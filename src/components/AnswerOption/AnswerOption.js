import React from 'react'
import styled from 'styled-components'


const StyledAnswer = styled.button`
    border-radius: 50px;
    padding: 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    transition: all 0.1s ease-out;

    &:hover {
        transform: scale(1.01)
    }
`

const AnswerOption = ({ content, check }) => {
    return (
        <StyledAnswer onClick={(e) => check(e)}>
            {content}
        </StyledAnswer>
    )
}

export default AnswerOption