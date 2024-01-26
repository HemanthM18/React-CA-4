import React from 'react';
import questions from '../questions';
import '../styles/Result.css'


export default function Result({ score, restartGame, isDarkMode, backgroundChange }) {
  return (
    <div className={`scoreBoard ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      You scored {score} out of {questions.length} - ({((score / questions.length) * 100)}%)
      <button className='light-dark' onClick={backgroundChange}>
        {isDarkMode ? 'Light' : 'Dark'}
      </button><br/>
      <button className='restart-button' onClick={restartGame}>
        Restart
      </button>
    </div>
  );
}
