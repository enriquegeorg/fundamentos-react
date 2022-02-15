import React, { useState } from 'react';
import './Input.css'

export default props => {

    const [value, setValue] = useState('Initial')

    function whenChange(event) {
        setValue(event.target.value)
        console.log(event.target.value)
    }

    return (
        <div className="Input">
            <div className={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <h2>{value}</h2>
                <input value={value} onChange={whenChange} type="text" name="name" />
                <h2>{value}</h2>
                <input value={value} onChange={whenChange} type="text" name="name" />
                {/* <input type="submit" value="Enviar" /> */}
            </div>
        </div>
    )
}