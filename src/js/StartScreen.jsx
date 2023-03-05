import React from 'react';
import { useNavigate } from 'react-router-dom';

export const StartScreen = () => {

    const navigate = useNavigate();

    const onNav = () => {
        navigate('/trivia');
    }

    return (
        <div className="start">
            <div className="start__section" id='circles-top'>
                <div className="circleLg" id='pink'></div>
                <div className="circleSm" id='blue'></div>
            </div>
            <div className="start__section" id='menu'>
                <div id="menu-titles">
                    <h2 className='title'>Quick Trivia</h2>
                    <p>Answer 20 questions trivia questions on film & TV, history, and science</p>
                </div>
                <div id="menu-btn">
                    <button
                            onClick={onNav}
                            className='btn-lg'
                            id='begin-btn'>Begin
                    </button>
                </div>
            </div>
            <div className="start__section" id='circles-bottom'>
                <div className="circleLg" id='orange'></div>
                <div className="circleSm" id='yellow'></div>
            </div>
        </div>
    )
}