import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StartQuiz from "./components/StartQuiz";
import Quiz from "./components/Quiz";
import "./styles/App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartQuiz />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};


export default App;
