import React from "react";

const Result = ({ score, totalQuestions, restartQuiz }) => {
  return (
    <div className="result-container">
      <h2>Quiz Completed</h2>
      <p>
        Your score is {score} out of {totalQuestions}.
      </p>
      <button className="btn btn-success" onClick={restartQuiz}>
        Take New Quiz
      </button>
    </div>
  );
};

export default Result;
