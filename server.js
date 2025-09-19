const express = require('express');
const path = require('path');
const courseData = require('./course-data.json');

const app = express();
const PORT = 3000;

// This middleware allows the front end to access files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to serve the golf course data
app.get('/api/course', (req, res) => {
    console.log('API request received for course data.');
    res.json(courseData);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
    console.log('API endpoint for course data is at: http://localhost:3000/api/course');
});
