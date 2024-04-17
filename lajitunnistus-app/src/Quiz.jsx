import React, { useState } from 'react'
import { resultInitialState } from './constants'

const Quiz = ({ quizData }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answer, setAnswer] = useState(null)
    const [answerIdx, setAnswerIdx] = useState(null)
    const [result, setResult] = useState(resultInitialState)
    const [showResult, setShowResult] = useState(false)

    const { imageURL, choices, correctAnswer } = quizData[currentQuestion]

    const onAnwserClick = (answer, index) => {
        console.log(answer)
        setAnswerIdx(index)
        if (answer === correctAnswer) {
            setAnswer(true)
        } else {
            setAnswer(false)
        }
    }

    const onClickNext = () => {
        setAnswerIdx(null)
        setResult((prev) =>
            answer
                ? {
                    ...prev,
                    correctAnswers: prev.correctAnswers + 1
                }
                : {
                    ...prev, wrongAsnwers: prev.wrongAnswers + 1
                })
        if (currentQuestion !== quizData.length - 1) {
            setCurrentQuestion((prev) => prev + 1)
        } else {
            setCurrentQuestion(0)
            setShowResult(true)
        }
    }

    const onTryAgain = () => {
        setResult(resultInitialState)
        setShowResult(false)
    }


    return (
        <div className="quiz-container">
            {!showResult ? (<>
                <span className="active-question-no">{currentQuestion + 1}</span>
                <span className="total-questions">/{quizData.length}</span>
                <h2>Mikä laji?</h2>
                <img src={imageURL} alt="quiz" />
                <ul>
                    {
                        choices.map((choice, index) => (
                            <li
                                key={index}
                                onClick={() => onAnwserClick(choice, index)}
                                className={answerIdx === index ? 'selected-answer' : null}
                            >
                                {choice}
                            </li>
                        ))
                    }
                </ul>
                <div className="footer">
                    <button onClick={onClickNext} disabled={answerIdx === null}>
                        {currentQuestion === quizData.length - 1 ? 'Tulokset' : 'Seuraava'}
                    </button>
                </div>
            </>) : <div className="result">
                <h3>Tulokset</h3>
                <p>Oikeat vastaukset: {result.correctAnswers}</p>
                <button onClick={onTryAgain}>Yritä uudelleen</button>
            </div>}

        </div>
    )
}

export default Quiz