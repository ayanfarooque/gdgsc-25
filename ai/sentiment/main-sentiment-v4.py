import sys
from datetime import datetime
from PyQt5.QtWidgets import (QApplication, QMainWindow, QWidget, QVBoxLayout, 
                           QHBoxLayout, QPushButton, QLabel, QLineEdit, 
                           QTextEdit, QScrollArea, QMessageBox, QFrame,
                           QListWidget, QStackedWidget, QGridLayout, QInputDialog)
from PyQt5.QtGui import QFont
from PyQt5.QtCore import (Qt, QTimer)
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from deep_translator import GoogleTranslator
from langdetect import detect, LangDetectException

# Dummy user credentials
USER_CREDENTIALS = {
    "john": "pass123",
    "alice": "pass456",
    "bob": "pass789",
    "emma": "pass321"
}

USER_LANGUAGE_PREFERENCE = {
    "john": None,  # John doesn't have a preference initially
    "alice": "fr",  # Example preferences
    "bob": "es",
    "emma": "de"
}

# Updated dummy messages with multilingual content
CHANNEL_MESSAGES = {
    "General Discussion": [
        {"username": "john", "content": "Hello everyone! How's the semester going?", "timestamp": "2025-02-05 10:30", "lang": "en"},
        {"username": "pierre", "content": "Bonjour mes chers amis indiens!", "timestamp": "2025-02-05 10:35", "lang": "fr"},
        {"username": "maria", "content": "¡Buenos días! ¿Cómo están todos?", "timestamp": "2025-02-05 11:15", "lang": "es"},
        {"username": "anna", "content": "Привет всем из России!", "timestamp": "2025-02-05 12:00", "lang": "ru"}
    ],
    "Academics": [
        {"username": "emma", "content": "Does anyone have notes from yesterday's Math lecture?", "timestamp": "2025-02-05 09:20", "lang": "en"},
        {"username": "hans", "content": "Ich kann meine Notizen teilen.", "timestamp": "2025-02-05 09:25", "lang": "de"}
    ],
    "Sports": []  #empty channel
}

class ForumPost(QFrame):
    def __init__(self, username, content, timestamp, lang="en"):
        super().__init__()
        self.setFrameStyle(QFrame.Box | QFrame.Raised)
        self.setLineWidth(1)

        layout = QVBoxLayout()
        header_layout = QHBoxLayout()
        username_label = QLabel(f"<b>{username}</b>")
        time_label = QLabel(timestamp)
        time_label.setAlignment(Qt.AlignRight)
        
        header_layout.addWidget(username_label)
        header_layout.addWidget(time_label)

        self.content_label = QLabel(content)
        self.content_label.setWordWrap(True)

        layout.addLayout(header_layout)
        layout.addWidget(self.content_label)

        # Report Button
        report_button = QPushButton("Report")
        report_button.clicked.connect(lambda: self.report_message(username, content))
        layout.addWidget(report_button)

        self.setLayout(layout)
        
    def report_message(self, username, content):
        # Notify the user and call the appropriate reporting action
        QMessageBox.information(self, "Report Sent", f"Reported message from {username}: {content}")
        # Future implementation: Store reports in database with admin access

    def translate_message(self):
        try:
            translated_text = GoogleTranslator(source=self.lang, target='en').translate(self.original_text)
            QMessageBox.information(self, "Translation", f"Translated Message: {translated_text}")
            self.content_label.setText(f"{self.original_text}\n(Translated: {translated_text})")
        except Exception as e:
            QMessageBox.critical(self, "Translation Error", str(e))

class DiscussionForum(QMainWindow):
    def __init__(self):
        super().__init__()
        self.sentiment_analyzer = SentimentIntensityAnalyzer()
        self.offensive_terms = ["idiot", "clown", "stupid", "bang", "dogshit", "dumb", "moron", "boob", "ass", "dick", "nigga", "whore", "slut", "trash", "sucks", "make love", "हरामी", "गंवार", "बेवकूफ", "चोर"]
        self.user_reports = {}  # To track user reports
        self.sentiment_warning_count = {}  # To track consecutive negative messages
        self.user_reports = {}  # To track user reports
        self.sentiment_warning_count = {}  # To track consecutive negative messages
        self.is_blocked = False  # Add this line
        self.initUI()

    def initUI(self):
        main_widget = QWidget()
        self.setCentralWidget(main_widget)
        layout = QVBoxLayout(main_widget)

        self.stacked_widget = QStackedWidget()

        # Login page
        login_page = QWidget()
        login_layout = QGridLayout(login_page)

        self.username_input = QLineEdit()
        self.username_input.setPlaceholderText("Username")
        self.password_input = QLineEdit()
        self.password_input.setPlaceholderText("Password")
        self.password_input.setEchoMode(QLineEdit.Password)
        login_button = QPushButton("Login")

        self.username_input.returnPressed.connect(self.handle_login)
        self.password_input.returnPressed.connect(self.handle_login)
        login_button.clicked.connect(self.handle_login)

        login_layout.addWidget(QLabel("Welcome to Student Discussion Forum"), 0, 0, 1, 2)
        login_layout.addWidget(self.username_input, 1, 0, 1, 2)
        login_layout.addWidget(self.password_input, 2, 0, 1, 2)
        login_layout.addWidget(login_button, 3, 0, 1, 2)
        login_layout.setRowStretch(4, 1)

        forum_page = QWidget()
        forum_layout = QVBoxLayout(forum_page)

        content_layout = QHBoxLayout()
        self.topics_list = QListWidget()
        self.topics_list.addItems(CHANNEL_MESSAGES.keys())
        self.topics_list.setMaximumWidth(200)
        self.topics_list.currentTextChanged.connect(self.change_topic)

        messages_layout = QVBoxLayout()
        self.topic_label = QLabel("Current Topic: General Discussion")

        self.posts_widget = QWidget()
        self.posts_layout = QVBoxLayout(self.posts_widget)
        self.posts_layout.addStretch()

        scroll = QScrollArea()
        scroll.setWidget(self.posts_widget)
        scroll.setWidgetResizable(True)

        input_layout = QHBoxLayout()
        self.message_input = QTextEdit()
        self.message_input.setMaximumHeight(100)
        self.message_input.installEventFilter(self)
        send_button = QPushButton("Send")
        send_button.clicked.connect(self.handle_message)

        input_layout.addWidget(self.message_input)
        input_layout.addWidget(send_button)

        messages_layout.addWidget(self.topic_label)
        messages_layout.addWidget(scroll)
        messages_layout.addLayout(input_layout)

        content_layout.addWidget(self.topics_list)
        content_layout.addLayout(messages_layout)

        forum_layout.addLayout(content_layout)
        self.stacked_widget.addWidget(login_page)
        self.stacked_widget.addWidget(forum_page)

        layout.addWidget(self.stacked_widget)

        self.setGeometry(100, 100, 800, 600)
        self.setWindowTitle('Student Discussion Forum')
        self.show()

        self.username = ""
        self.current_topic = "General Discussion"

        self.load_channel_messages(self.current_topic)

    def eventFilter(self, obj, event):
        if obj == self.message_input and event.type() == event.KeyPress:
            if event.key() == Qt.Key_Return and event.modifiers() != Qt.ShiftModifier:
                self.handle_message()
                return True
        return super().eventFilter(obj, event)

    def handle_login(self):
        username = self.username_input.text().strip()
        password = self.password_input.text().strip()

        if username in USER_CREDENTIALS and USER_CREDENTIALS[username] == password:
            self.username = username
            self.stacked_widget.setCurrentIndex(1)

            # Check if user has no language preference set
            if USER_LANGUAGE_PREFERENCE[username] is None:
                self.ask_for_language_preference()
            else:
                self.load_channel_messages(self.current_topic)
            
            # Set timer to show reported message after 1 minute (for demonstration purpose)
            QTimer.singleShot(30000, self.show_reported_message)

        else:
            QMessageBox.warning(self, "Error", "Invalid username or password")
            self.password_input.clear()
            self.password_input.setFocus()

    def show_reported_message(self):
        QMessageBox.warning(
            self,
            "Content Warning",
            "One of your messages has been reported by another user for inappropriate content. This is a warning. Please ensure your messages follow community guidelines."
        )

    def ask_for_language_preference(self):
        languages = ["en", "fr", "es", "de"]
        language_choice, ok = QInputDialog.getItem(self, "Select Language", "Choose your preferred language:", languages, 0, False)
        if ok:
            USER_LANGUAGE_PREFERENCE[self.username] = language_choice
            self.load_channel_messages(self.current_topic)

    def clear_messages(self):
        while self.posts_layout.count() > 1:
            item = self.posts_layout.takeAt(0)
            if item.widget():
                item.widget().deleteLater()

    def load_channel_messages(self, channel):
        self.clear_messages()
        messages = sorted(CHANNEL_MESSAGES.get(channel, []), key=lambda x: x["timestamp"])
        for msg in messages:
            # Auto translate messages to user's preferred language
            if USER_LANGUAGE_PREFERENCE.get(self.username):
                msg["content"] = GoogleTranslator(source=msg["lang"], target=USER_LANGUAGE_PREFERENCE[self.username]).translate(msg["content"])
            post = ForumPost(msg["username"], msg["content"], msg["timestamp"], msg.get("lang", "en"))
            self.posts_layout.insertWidget(self.posts_layout.count() - 1, post)

    def report_message(self, username, message):
        # Admin will handle this report. In future, store it in a database or send an email.
        print(f"Message reported: {message} by {username}. Admin action required.")
        QMessageBox.information(self, "Message Reported", f"The message from {username} has been reported for review.")

    def change_topic(self, topic):
        self.current_topic = topic
        self.topic_label.setText(f"Current Topic: {topic}")
        self.load_channel_messages(topic)

    def handle_message(self):
        if self.is_blocked:
            QMessageBox.warning(self, "Blocked", "You are temporarily blocked from sending messages. Please wait.")
            return
        content = self.message_input.toPlainText().strip()
        if not content:
            return

        # Check for offensive terms in the original content
        if any(offensive_term in content.lower() for offensive_term in self.offensive_terms):
            QMessageBox.critical(
                self,
                "Message Blocked",
                "Your message contains offensive or abusive language and cannot be posted. Please revise your message.",
            )
            self.message_input.setFocus()
            return

        try:
            detected_lang = detect(content)
        except LangDetectException:
            detected_lang = "en"

        # Translate the message if it's not in English
        translated_content = content
        if detected_lang != "en":
            try:
                translated_content = GoogleTranslator(source=detected_lang, target="en").translate(content)
            except Exception as e:
                QMessageBox.critical(self, "Translation Error", f"Failed to translate for sentiment analysis: {str(e)}")
                return

        # Check for offensive terms in the translated content
        if any(offensive_term in translated_content.lower() for offensive_term in self.offensive_terms):
            QMessageBox.critical(
                self,
                "🛑 🚫 Message Blocked 🛑 🚫",
                "Your message contains offensive or abusive language and cannot be posted. Please revise your message and refrain from repeating this.",
            )
            self.message_input.setFocus()
            return

        # Perform sentiment analysis
        sentiment_score = self.sentiment_analyzer.polarity_scores(translated_content)
        sentiment, allow_post = self.analyze_sentiment(sentiment_score["compound"])

        if allow_post == "warning":
            response = QMessageBox.warning(
                self,
                "⚠️ Content Warning ⚠️",
                "Your message appears slightly negative. Would you please like to revise it?",
                QMessageBox.Yes | QMessageBox.No
            )
            if response == QMessageBox.Yes:
                self.message_input.setFocus()
                return

        if not allow_post:
            self.sentiment_warning_count[self.username] = self.sentiment_warning_count.get(self.username, 0) + 1
            if self.sentiment_warning_count[self.username] >= 3:
                QMessageBox.warning(self, "Content Warning", "You've been trying to spread a lot of hate. This won't be tolerated. You have been warned!")
                self.message_input.setFocus()
                self.is_blocked = True # Block the user
                QTimer.singleShot(60000, lambda: self.unblock_user())  # Reset after 1 minute
            QMessageBox.critical(
                self,
                "🛑 🚫 Message Blocked 🛑 🚫",
                f"Your message was detected as {sentiment} and cannot be posted. Please revise your message to be more constructive."
            )
            self.message_input.setFocus()
            return

        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M")
        CHANNEL_MESSAGES.setdefault(self.current_topic, []).append({
            "username": self.username,
            "content": content,
            "timestamp": timestamp,
            "lang": detected_lang
        })

        post = ForumPost(self.username, content, timestamp, detected_lang)
        self.posts_layout.insertWidget(self.posts_layout.count() - 1, post)
        self.message_input.clear()

    def unblock_user(self):
        self.is_blocked = False
        self.reset_sentiment_warning_count()

    def reset_sentiment_warning_count(self):
        self.sentiment_warning_count[self.username] = 0

    def analyze_sentiment(self, compound_score):
        if compound_score <= -0.6:
            return "Very Negative", False
        elif -0.6 < compound_score <= -0.3:
            return "Negative", False
        elif -0.3 < compound_score < 0.0:
            return "Slightly Negative", "warning"
        elif compound_score == 0.0:
            return "Neutral", True
        else:
            return "Positive", True

if __name__ == '__main__':
    app = QApplication(sys.argv)
    window = DiscussionForum()
    sys.exit(app.exec_())
