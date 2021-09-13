import React from 'react'

// const prizes = new Array(15).fill(null)

let indicator = 50;
const prizes = [];

for (let i = 0; i < 15; i++) {
    indicator = indicator !== 64000 ? indicator * 2 : 125000;
    prizes.push(indicator)
}

const ProgressBar = () => {
    return (
        <aside className="progress-bar__container">
            <ul>
                {
                    prizes.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })
                }
            </ul>
        </aside>
    )
}

export default ProgressBar