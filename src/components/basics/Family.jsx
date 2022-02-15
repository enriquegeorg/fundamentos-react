import React from 'react';

export default props => {
    return <div>
        {
            props.children.map((child, index) => { return React.cloneElement(child, { ...props, key: index }) })
        }
    </div>
}