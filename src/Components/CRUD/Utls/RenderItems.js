import React from 'react';
import { TEXT, TABSET, TEXTAREA, BOOLEAN, GROUP, SELECT, RELATION_ROWS } from '../Inputs';

const renderItem = (input, k, record, onChange, endpoint, primaryRecord) => {
    const inputProps = {
        input, record, onChange, endpoint, primaryRecord
    };
    switch(input.type) {
        case 'RELATION_ROWS': 
            return <RELATION_ROWS key={'relation_' + k} {...inputProps} />
        case 'SELECT': 
            return <SELECT key={'select_' + k} {...inputProps} />
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
