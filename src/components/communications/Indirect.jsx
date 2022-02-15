import React, { useState } from 'react';
import IndirectChild from './IndirectChild'

export default props => {
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [nerd, setNerd] = useState(false)

    function sentInfos(name, age, nerd) {
        setName(name)
        setAge(age)
        setNerd(nerd)
        console.log(name, age, nerd)
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span>{age} </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndirectChild onClick={sentInfos}></IndirectChild>
        </div>
    )
}