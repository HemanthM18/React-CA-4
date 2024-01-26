import React, { useState } from 'react';
import questions from '../questions';
import '../styles/QuestionBox.css';
import Result from './Result';

export default function QuestionBox() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [highlight, setHighlight] = useState(false);

  const backgroundChange = () => {
    const newColor = isDarkMode ? '#B2A279' : '#353124';
    document.body.style.backgroundColor = newColor;
    setIsDarkMode(!isDarkMode);
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setHighlight(false); // Reset the highlight when moving to the next question
    } else {
      setShowScore(true);
    }
  };

  const handleRestartGame = () => {
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
    setHighlight(false);
  };

  const handleHighlight = () => {
    setHighlight(!highlight);
  };

  return (
    <div className='container'>
      {showScore ? (
        <Result score={score} restartGame={handleRestartGame} isDarkMode={isDarkMode} backgroundChange={backgroundChange} />
      ) : (
        <div className='full'>
          <button className='light-dark' onClick={backgroundChange}>
            {isDarkMode ? 'Light' : 'Dark'}
          </button>
          <div className='container-header'>
            <div className='count'>
              <u><span>Question : {currentQuestion + 1} Out of {questions.length}</span></u>
            </div>
            <div className='questionColor' style={{ color: highlight ? 'red' : 'darkblue' }}>
              {questions[currentQuestion].text}
            </div>
          </div>
          <div className='answer'>
            {questions[currentQuestion].options.map((answerOption) => (
              <button key={answerOption.text} className='option' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                {answerOption.text}
              </button>
            ))}
          </div>
          <div className='highlight-container'>
            <button className='highlight-button' onClick={handleHighlight}>
              {highlight ? 'Remove Highlight' : 'Highlight'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
