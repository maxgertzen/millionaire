import React from 'react'
import styled from 'styled-components'

const QuestionWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;

    h3 {
        column-span: all
    }
`

const Question = ({ question, checkAnswer }) => {
    return (
        <QuestionWrapper>
            <h3>{question.question}</h3>
            {[...question["incorrect_answers"], question["correct_answer"]].sort(() => Math.random() - 0.5).map((value, index) => {
                return <AnswerOption key={index} content={value} check={checkAnswer} />
            })}
        </QuestionWrapper>
    )
}

export default Question