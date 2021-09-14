import React, { useState } from 'react'
import styled from 'styled-components'
import Question from '../Question/Question'



let obj = {
    "category": "Geography",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the name of the capital of Turkey",
    "correct_answer": "Ankara",
    "incorrect_answers": ["Istanbul", "Izmir", "Bursa"]
}

const GameWrapper = styled.section`
    width: 90%;
    background-color: green;
    margin: auto auto;
    padding: 20px;
`

const Game = () => {
    const [questionIndex, setQuestionIndex] = useState(0);

    const progressGame = (result) => {
        if (result) setQuestionIndex(questionIndex + 1)
        console.log('WRONG')
    }

    return (
        <GameWrapper>
            <Question question={obj} progress={progressGame} />
        </GameWrapper>
    )
}

export default Game