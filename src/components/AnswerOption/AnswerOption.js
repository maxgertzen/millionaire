import React, { useState } from 'react'
import styled from 'styled-components'


const StyledAnswer = styled.button`
    border-radius: 50px;
    padding: 20px;
    background-color: ${props => props.selected ? 'grey' : 'black'};
    color: ${props => props.selected ? 'black' : 'white'};
    cursor: pointer;
    transition: all 0.1s ease-out;

    &:hover {
        transform: scale(1.01)
    }
`

const AnswerOption = ({ content, check }) => {
    const [selected, setSelected] = useState(false);

    return (
        <StyledAnswer onClick={(e) => { setSelected(!selected); check(e) }} selected={selected}>
            {content}
        </StyledAnswer>
    )
}

export default AnswerOption