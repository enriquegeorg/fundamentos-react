import React from "react"

export default function First() {
    const msg = 'Mensagem piuka'
    return (
        <React.Fragment key="1">
            <h2> Primeiro compontente </h2>
            <p>{msg}</p>
        </React.Fragment>
    )
} 