const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db.js');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Import and use routes
// const chatbotRoutes = require('./routes/chatbotRoutes');
// const assignmentRoutes = require('./routes/assignmentRoutes');
// const resourceRoutes = require('./routes/resourceRoutes');
// const classroomRoutes = require('./routes/classroomRoutes');

// app.use('/api/chatbot', chatbotRoutes);
// app.use('/api/assignment', assignmentRoutes);
// app.use('/api/resource', resourceRoutes);
// app.use('/api/classroom', classroomRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
