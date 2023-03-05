import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Results from './Results';
import Questions from './Questions';

function Trivia() {
    const [question, setQuestion] = useState('');
    const [allQuestions, setAllQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [category, setCategory] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [rightAnswers, setRightAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswer] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const URL = 'https://the-trivia-api.com/api/questions?limit=20&categories=science,history';
            axios.get(URL).then((Response) => {
                setQuestion(Response.data[currentQuestion].question);
                setAllQuestions([
                    ...Response.data[currentQuestion].incorrectAnswers,
                    Response.data[currentQuestion].correctAnswer
                ]);
                setCategory(Response.data[currentQuestion].category);
                setCorrectAnswer(Response.data[currentQuestion].correctAnswer);
            })
        };

        fetchData()

    }, [currentQuestion]);

    const progress = () => {
        return Math.round((currentQuestion / 20) * 100);
    }

    const questionList = () => { 
        return allQuestions.sort((a, b) => 0.5 - Math.random()); 
    }

    const onReset = () => { window.location.reload() }

    const calculateGrade = () => {
        const grade = Math.round((rightAnswers / 20) * 100);
        return grade;
    }

    const onAnswer = e => {
        e.target.value === correctAnswer
            ? setRightAnswers(() => rightAnswers + 1)
            : setWrongAnswer(() => wrongAnswers + 1);
        setCurrentQuestion(() => currentQuestion + 1);
    }

    const onMainMenu = () => {
        navigate(-1);
    }

    if (currentQuestion === 20) {

        return (
            <div className="results">
                <Results grade={calculateGrade()} />
            </div>
        )
    } else {
        return (
            <div className="questions">
                <Questions
                    question={question}
                    allQuestions={questionList()}
                    category={category}
                    reset={onReset}
                    onAnswer={onAnswer}
                    correctAnswer={correctAnswer}
                    rightCounter={rightAnswers}
                    wrongCounter={wrongAnswers}
                    onBack={onMainMenu}
                    progress={progress()}
                />
            </div>
        )
    }
}

export default Trivia;

