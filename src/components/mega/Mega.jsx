import React, { useState } from 'react'

import './Mega.css'

export default props => {

    const [qtdNumbers, setQtdNumbers] = useState(props.qtdNumbers || 6)
    const [numbers, setNumbers] = useState(Array(qtdNumbers).fill(0))

    function generateNumbers() {
        const numbers = Array(qtdNumbers)
            .fill(0)
            .reduce((numbs) => {
                const newNumbers = generateNewNumbers(1, 60, numbs)
                // console.log([...numbs, newNumbers])
                return [...numbs, newNumbers]
            }, [])
            .sort((n1, n2) => n1 - n2)
        console.log(numbers)
        console.log(qtdNumbers)
        return numbers
    }

    function generateNewNumbers(min, max, currentNumbers) {
        const aleatory = parseInt(Math.random() * (max + 1 - min) + min)
        return currentNumbers.includes(aleatory) ?
            generateNewNumbers(min, max, currentNumbers) : aleatory
    }

    // console.log(generateNewNumbers(1, 60, [0, 0, 0, 0, 0, 0]))
    return (
        <div className="Mega">
            <h3>{generateNumbers().join(' ')}</h3>
            <div>
                <label> Quantidade de números </label>
                <input
                    max="14" 
                    type="number" 
                    value={qtdNumbers} 
                    onChange={e => setQtdNumbers(+e.target.value)}>
                </input>                                            
            </div>
            <button 
                onClick={_ => setNumbers(generateNumbers(qtdNumbers))}> 
                Gerar números 
            </button>
        </div>
    )
}