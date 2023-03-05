import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Questions({ question, allQuestions, category, reset, onAnswer, rightCounter, wrongCounter, onBack, progress }) {

    return (
        <>
            <div className="trivia__section" id='trivia__header'>
                <h2 id='questionType'>{category}</h2>
                <h3 id='question'> {question}</h3>
            </div>
            <div className="trivia__section" id='progressBar'>
                <ProgressBar
                    now={progress}
                    id='bar'
                    variant='success'
                />
            </div>
            <div className="trivia__section" id='trivia__main'>
                {allQuestions.map((choice, i) => {
                    return (
                        <button
                            key={i}
                            className='choice-btn'
                            id={'choice' + i}
                            value={choice}
                            onClick={onAnswer}> {choice}
                        </button>
                    )
                })}
            </div>
            <div className="trivia__section" id='trivia__footer'>
                <div className="footer__section" id='userInfo'>
                    <h2>Correct: <span style={{ color: 'lightgreen' }}>{rightCounter}</span></h2>
                    <h2>Wrong: <span style={{ color: 'red' }}>{wrongCounter}</span></h2>
                </div>
                <div className="footer__section" id='events'>
                    <button
                        className='btn-md'
                        id='reset-btn'
                        onClick={reset}>Reset
                    </button>
                    <button
                        className='btn-md'
                        id='mainMenu-btn'
                        onClick={onBack}>Main Menu
                    </button>
                </div>
            </div>
        </>
    );
}

export default Questions;


