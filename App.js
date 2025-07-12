import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AskQuestion from "./components/AskQuestion";
import QuestionPage from "./components/QuestionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ask" element={<AskQuestion />} />
        <Route path="/question/:id" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;