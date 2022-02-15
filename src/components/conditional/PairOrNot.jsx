import React from 'react';

export default props => {
    const isPair = props.number % 2 === 0;
    return (
        <div>
            {isPair ?
                <span> Par </span> :
                <span> Impar </span>
            }
        </div>
    )
}