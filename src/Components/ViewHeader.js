import { Button } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Breadcrumbs } from 'react-breadcrumbs-dynamic'

import {
    ThroughProvider,
    throughContainer,
    throughAgent,
    createAdvAgent,
    throughInterface,
} from 'react-through';

export const viewheaderThroughArea = 'viewheader'

export const viewheaderBearingKey = 'actionkey'

export const withViewHeader = throughInterface(viewheaderThroughArea)

export const withViewHeaderItem = throughAgent(viewheaderThroughArea, viewheaderBearingKey)

export const withViewHeaderContainer = throughContainer(viewheaderThroughArea)

export const ViewHeaderProvider = ThroughProvider

export const ViewHeaderButton = createAdvAgent(viewheaderThroughArea, viewheaderBearingKey)

const defaultCompare = (a, b) => (
    a[viewheaderBearingKey].length - b[viewheaderBearingKey].length
)

function ViewHeader_(props){
    const data = props[viewheaderThroughArea];

    const itemsValue = Object
        .keys(data)
        .map(k => data[k])
        .sort(defaultCompare);
    const count = itemsValue.length;

    return (
        <div className="header" style={{display: 'flex', position: 'sticky', top: 0, zIndex: 5,background: '#eee', padding: '4px 8px'}}>
            <div style={{flex:1, lineHeight: '32px'}}>
                <Breadcrumbs
                    separator={<b> / </b>}
                    item={NavLink}
                    finalItem={'b'}
                    finalProps={{
                        style: {color: 'red'}
                    }}
                />
            </div>
            {count > 0 && (
                <div className="buttonsContainer">
                    {itemsValue.map((itemProps, i) => (
                        <Button {...itemProps} key={i} />
                    ))}
                </div>
            )}
        </div>
    )
}

export const ViewHeader = withViewHeaderContainer(ViewHeader_)
