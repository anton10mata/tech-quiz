import React from "react";
import { Link } from "react-router-dom";

const StartQuiz = () => {
  return (
    <div className="start-container">
      <h1>Welcome to the Tech Quiz</h1>
      <Link to="/quiz">
        <button className="btn btn-primary">Start Quiz</button>
      </Link>
    </div>
  );
};

export default StartQuiz;
