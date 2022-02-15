import React from 'react';
import DirectChild from './DirectChild'

export default props => {
    return (
        <div>
            <DirectChild text="Cleverson" number={19} bool={false} />
            <DirectChild text="Regadinho" number={188} bool={true} />
        </div>
    )
}