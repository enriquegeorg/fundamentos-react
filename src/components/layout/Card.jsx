import React from "react";

import "./Card.css"

export default _ => {

    const cardStyle = { 
        backgroundColor:  _.color || '#F00',
        borderColor: _.color || '#F00'
    }

    return (
        <div className="Card" style={cardStyle}>
            <h2 className="Title">{ _.titulo }</h2>
            <div className="Content">{_.children}</div>
        </div>
    )
}