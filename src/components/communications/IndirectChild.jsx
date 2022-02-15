import React from 'react';

export default props => {
    const randonAge = () => parseInt(Math.random() * (80 - 30) + 30)
    const randonNerd = Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.onClick('João', randonAge(), randonNerd)}>Fornecer informações</button>
        </div>
    )
}