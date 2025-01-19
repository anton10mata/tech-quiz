import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";
import { questions } from "../data/questions";


const Quiz = () => {
    const [quizStarted, setQuizStarted] = useState(false); // Track whether the quiz has started
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
  
    const questions = [
      {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: '4',
      },
      {
        question: 'Which programming language is used for React?',
        options: ['Python', 'JavaScript', 'Ruby', 'C++'],
        answer: 'JavaScript',
      },
      {
        question: 'What does CSS stand for?',
        options: [
          'Cascading Style Sheets',
          'Computer Style Sheets',
          'Creative Style Sheets',
          'Colorful Style Sheets',
        ],
        answer: 'Cascading Style Sheets',
      },
      {
        question: 'What is the output of 3 + "3" in JavaScript?',
        options: ['6', '33', 'Error', 'undefined'],
        answer: '33',
      },
      {
        question: 'Which HTML tag is used to define a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<hyper>'],
        answer: '<a>',
      },
    ];
  
    const handleAnswer = (option) => {
      if (option === questions[currentQuestion].answer) {
        setScore(score + 1);
      }
  
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizCompleted(true);
      }
    };
  
    const restartQuiz = () => {
      setCurrentQuestion(0);
      setScore(0);
      setQuizCompleted(false);
      setQuizStarted(false); // Go back to the start page
    };
  
    const startQuiz = () => {
      setQuizStarted(true); // Set quizStarted to true to show the questions
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        {!quizStarted ? (
          <div>
            <h1>Welcome to the Tech Quiz!</h1>
            <p>Test your knowledge and improve your skills.</p>
            <button
              onClick={startQuiz}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              Start Quiz
            </button>
          </div>
        ) : quizCompleted ? (
          <div>
            <h1>Quiz Completed</h1>
            <p>Your score: {score}/{questions.length}</p>
            <button
              onClick={restartQuiz}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                marginTop: '20px',
              }}
            >
              Take New Quiz
            </button>
          </div>
        ) : (
          <div>
            <h2>{questions[currentQuestion].question}</h2>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index}>
                <button
                  onClick={() => handleAnswer(option)}
                  style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    margin: '10px',
                  }}
                >
                  {option}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default Quiz;