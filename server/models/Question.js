const mongoose = require('mongoose');

// Define the schema for a quiz question
const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true, // Ensures the question text is provided
  },
  answers: [
    {
      text: { type: String, required: true }, // The answer text
      isCorrect: { type: Boolean, required: true }, // Indicates if this answer is correct
    },
  ],
});

// Export the Question model
module.exports = mongoose.model('Question', questionSchema);
