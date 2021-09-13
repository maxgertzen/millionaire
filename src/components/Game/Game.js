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
    width: 90%;
    background-color: green;
    margin: auto auto;
    padding: 20px;
`

const Game = () => {

    const handleChoice = (e) => {
        console.log(e.target.innerText)
        console.log(e.target.innerText === obj.correct_answer)
        e.target.classList.add('selected')
    }

    return (
        <GameWrapper>
            <Question question={obj} checkAnswer={handleChoice} />
        </GameWrapper>
    )
}

export default Game