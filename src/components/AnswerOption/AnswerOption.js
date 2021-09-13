import React from 'react'
import styled from 'styled-components'


const StyledAnswer = styled.div`
    border-radius: 50%;
    padding: 20px;
    background-color: black;
    color: white;
`

const AnswerOption = ({ content, check }) => {
    return (
        <StyledAnswer onClick={(e) => check(e)}>
            {content}
        </StyledAnswer>
    )
}

export default AnswerOption