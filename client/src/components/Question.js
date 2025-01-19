import React from "react";

const Question = ({ question, currentQuestion, totalQuestions, handleAnswer }) => {
  return (
    <div className="question-container">
      <h2>
        Question {currentQuestion + 1} of {totalQuestions}
      </h2>
      <h3>{question.text}</h3>
      <div className="answers">
        {question.answers.map((answer, index) => (
          <button
            key={index}
            className="btn btn-primary"
            onClick={() => handleAnswer(answer.isCorrect)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
