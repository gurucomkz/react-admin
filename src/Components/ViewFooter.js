import { Button } from '@material-ui/core'
import React from 'react'

import {
    ThroughProvider,
    throughContainer,
    throughAgent,
    createAdvAgent,
    throughInterface,
} from 'react-through';

export const viewfooterThroughArea = 'viewfooter'

export const viewfooterBearingKey = 'actionkey'

export const withViewFooter = throughInterface(viewfooterThroughArea)

export const withViewFooterItem = throughAgent(viewfooterThroughArea, viewfooterBearingKey)

export const withViewFooterContainer = throughContainer(viewfooterThroughArea)

export const ViewFooterProvider = ThroughProvider

export const ViewFooterButton = createAdvAgent(viewfooterThroughArea, viewfooterBearingKey)

const defaultCompare = (a, b) => (
    a[viewfooterBearingKey].length - b[viewfooterBearingKey].length
)

function ViewFooter_(props){
    const data = props[viewfooterThroughArea];

    const itemsValue = Object
        .keys(data)
        .map(k => data[k])
        .sort(defaultCompare);
    const count = itemsValue.length;

    if(!count) return null;
    return (
        <div className="footer" style={{display: 'flex', position: 'sticky', bottom: 0, zIndex: 5,background: '#eee', padding: 8}}>
            <div className="buttonsContainer">
                {itemsValue.map((itemProps, i) => (
                    <Button {...itemProps} key={i} />
                ))}
            </div>
        </div>
    )
}

export const ViewFooter = withViewFooterContainer(ViewFooter_)
