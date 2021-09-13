import React from 'react'
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
    width: 100%;
    padding: 10px;
    background-color: green;
`

const Game = () => {

    const handleChoice = (e) => {
        console.log(e.target.value)
    }

    return (
        <GameWrapper>
            <Question question={obj} checkAnswer={handleChoice} />
        </GameWrapper>
    )
}

export default Game