import React from 'react';
import { renderItem } from '../Utls/RenderItems';

function GROUP({record, input, endpoint, onChange}) {
    return (
        <div style={{display: 'flex', flexDirection: 'row', flex: 1}}>
            {input.items.map((input, k)=>(
                <div key={k} style={{flex: 1, paddingRight: '16px'}}>
                    {renderItem(input, k, record, onChange, endpoint)}
                </div>
            ))}
        </div>
    )
}

export default GROUP;
