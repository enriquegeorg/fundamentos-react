import React from 'react'

export default props => {
    return (
        <div>
            <label htmlFor="stepsInput">Passo: </label>
            <input
                type="number"
                name="Valor passo"
                id="stepsInput"
                value={props.steps} 
                onChange={event => props.setSteps(+event.target.value)}/>
        </div>
    )
}