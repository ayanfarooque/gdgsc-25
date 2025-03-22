import os
import google.generativeai as gen_ai
from dotenv import load_dotenv
from PyQt5.QtWidgets import (QApplication, QVBoxLayout, QLabel, QTextEdit, 
                           QPushButton, QWidget, QMessageBox)
from google.generativeai.types import GenerationConfig  # Add this import

# Load environment variables
load_dotenv()

# Configure Google Gemini-Pro AI model
GOOGLE_API_KEY = "AIzaSyAvi9ck-A61jEKcQyMTimzI-SVVd_kH1fU"
gen_ai.configure(api_key=GOOGLE_API_KEY)
model = gen_ai.GenerativeModel('models/gemini-2.0-flash-lite')

class AssignmentChecker(QWidget):
    def __init__(self):
        super().__init__()
        self.stored_rubric = None  # Store generated rubric
        self.initUI()

    def initUI(self):
        self.setWindowTitle("Assignment Checker")
        self.setGeometry(100, 100, 800, 600)  # Set window size
        layout = QVBoxLayout()

        # Input fields
        self.assignment_label = QLabel("Enter Assignment Questions:")
        layout.addWidget(self.assignment_label)
        self.assignment_input = QTextEdit()
        layout.addWidget(self.assignment_input)

        self.student_answer_label = QLabel("Enter Student's Answers:")
        layout.addWidget(self.student_answer_label)
        self.student_answer_input = QTextEdit()
        layout.addWidget(self.student_answer_input)

        self.model_answer_label = QLabel("Enter Model Answer Paper (Optional):")
        layout.addWidget(self.model_answer_label)
        self.model_answer_input = QTextEdit()
        layout.addWidget(self.model_answer_input)

        self.rubric_label = QLabel("Enter Rubric Details (Optional):")
        layout.addWidget(self.rubric_label)
        self.rubric_input = QTextEdit()
        layout.addWidget(self.rubric_input)

        self.total_marks_label = QLabel("Enter Total Marks for the Assignment:")
        layout.addWidget(self.total_marks_label)
        self.total_marks_input = QTextEdit()
        self.total_marks_input.setMaximumHeight(50)  # Reduce height for marks input
        layout.addWidget(self.total_marks_input)

        # Result display area (non-editable)
        self.result_label = QLabel("Results:")
        layout.addWidget(self.result_label)
        self.result_display = QTextEdit()
        self.result_display.setReadOnly(True)  # Make it non-editable
        layout.addWidget(self.result_display)

        self.check_button = QPushButton("Check Assignment")
        self.check_button.clicked.connect(self.check_assignment)
        layout.addWidget(self.check_button)

        self.setLayout(layout)

    def check_assignment(self):
        assignment_text = self.assignment_input.toPlainText().strip()
        student_answer_text = self.student_answer_input.toPlainText().strip()
        model_answer_text = self.model_answer_input.toPlainText().strip()
        rubric_text = self.rubric_input.toPlainText().strip()
        total_marks = self.total_marks_input.toPlainText().strip()

        if not total_marks.isdigit():
            QMessageBox.critical(self, "Error", "Please enter a valid total marks value.")
            return

        total_marks = int(total_marks)
        prompt = self.generate_prompt(assignment_text, student_answer_text, 
                                    model_answer_text, rubric_text, total_marks)

        # Initialize chat session with Gemini
        chat_session = model.start_chat(history=[])

        # Set generation config with temperature = 0.2
        generation_config = GenerationConfig(
            temperature=0.2,  # Setting low temperature here to maintain consitency and avoid hallucinations
            top_p=0.8,        # to focus on more likely outputs
            top_k=40,          # Optional: Adjust top-k if needed
            frequency_penalty=0.0,  # No penalty for repeated tokens
            presence_penalty=0.0   # No penalty for token presence
        )

        # Send the message with the generation config
        response = chat_session.send_message(prompt, generation_config=generation_config)
        
        # Extract total score from response
        response_text = response.text
        self.result_display.setText(response_text)  # Display full response in text box
        
        # Show only final score in popup
        try:
            # Look for the final score in the response
            score_lines = [line for line in response_text.split('\n') 
                        if 'total' in line.lower() and 'score' in line.lower()]
            if score_lines:
                final_score = score_lines[-1]  # Take the last mention of total score
                QMessageBox.information(self, "Final Score", final_score)
        except Exception:
            QMessageBox.information(self, "Final Score", 
                                "Please check the results panel for detailed scoring.")

    def generate_prompt(self, assignment_text, student_answer_text, 
                       model_answer_text, rubric_text, total_marks):
        # If we have a stored rubric and no new rubric is provided, use the stored one
        if not rubric_text and not model_answer_text and self.stored_rubric:
            rubric_text = self.stored_rubric

        prompt = (
            f"Please provide a detailed evaluation with the following structure:\n"
            f"1. If no rubric is provided, first create and display a detailed rubric "
            f"based on the assignment context.\n"
            f"2. Show marks allocation for each criterion.\n"
            f"3. Provide final total score.\n\n"
            f"Total marks for this assignment: {total_marks}\n"
            f"Assignment Questions: {assignment_text}\n"
            f"Student's Answers: {student_answer_text}\n"
        )

        if model_answer_text:
            prompt += f"Model Answer Paper: {model_answer_text}\n"
            if rubric_text:
                prompt += f"Rubric: {rubric_text}\n"
                prompt += "Please evaluate strictly according to the provided rubric."
            else:
                prompt += ("No rubric provided. Please evaluate by comparing with "
                          "the model answer.")
        elif rubric_text:
            prompt += f"Rubric: {rubric_text}\n"
            prompt += ("Please evaluate strictly according to the provided rubric, "
                      "considering the academic context.")
        else:
            if not self.stored_rubric:
                prompt += ("Please create and display a suitable rubric based on "
                          "the subject and academic level before evaluation. "
                          "Store this rubric for future use.")
            else:
                prompt += f"Using stored rubric: {self.stored_rubric}\n"

        return prompt

if __name__ == "__main__":
    import sys
    app = QApplication(sys.argv)
    checker = AssignmentChecker()
    checker.show()
    sys.exit(app.exec_())