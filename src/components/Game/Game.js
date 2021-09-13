import React from 'react'



let obj = {
    "category": "Geography",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What%20is%20the%20name%20of%20the%20capital%20of%20Turkey%3F",
    "correct_answer": "Ankara", "incorrect_answers": ["Istanbul", "Izmir", "Bursa"]
}

const Game = () => {

    return (
        <GameWrapper>
            <Question question={obj} />
        </GameWrapper>
    )
}

export default Game