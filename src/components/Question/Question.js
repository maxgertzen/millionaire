import React from 'react'
import styled from 'styled-components'
import AnswerOption from '../AnswerOption/AnswerOption'

const QuestionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    gap: 10px;

    div.question {
        grid-column-end: span 2;
        background-color: black;
        color: white;
        height: 140px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Question = ({ question, progress }) => {

    const handleChoice = (e) => {

        console.log(e.target.innerText === question.correct_answer)
    }

    return (
        <QuestionWrapper>
            <div className="question">
                <h3>{question.question}</h3>
            </div>
            {[...question["incorrect_answers"], question["correct_answer"]].sort(() => Math.random() - 0.5).map((value, index) => {
                return <AnswerOption key={index} content={value} check={handleChoice} />
            })}
        </QuestionWrapper>
    )
}

export default Question