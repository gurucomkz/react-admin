import React from 'react';
import { TEXT, TABSET, TEXTAREA, BOOLEAN, GROUP, SELECT } from '../Inputs';

const renderItem = (input, k, record, onChange, endpoint) => {
    const inputProps = {
        input, record, onChange, endpoint
    };
    switch(input.type) {
        case 'SELECT': 
            return <SELECT key={'group_' + k} {...inputProps} />
        case 'GROUP': 
            return <GROUP key={'group_' + k} {...inputProps} />
        case 'BOOLEAN': 
            return <BOOLEAN key={'input_' + k} {...inputProps} />
        case 'TEXTAREA': 
            return <TEXTAREA key={'input_' + k} {...inputProps} />
        case 'TABSET': 
            return <TABSET key={'tabset_' + k} {...inputProps} />
        default: 
            return <TEXT key={'input_' + k} {...inputProps} />
    }
}

const useItemsRender = (record, onChange, endpoint) => {

    const renderItems = (list) => {
        return list.map((input, k) => renderItem(input, k, record, onChange, endpoint));
    }
    return renderItems;
}

export {
    renderItem,
    useItemsRender
};
