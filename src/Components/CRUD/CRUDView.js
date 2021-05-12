import React, { useEffect, useState } from 'react';

import { request } from '../../Context/actions';
import { withRouter } from 'react-router';
import { useItemsRender } from './Utls/RenderItems';
import { ViewHeaderButton } from '../ViewHeader';
import { BreadcrumbsItem, ReactLoader } from '../';

function _CRUDView({schema, endpoint, path, match, ...props}) {
    const [loading, setLoading] = useState(false);
    const [record, setRecord] = useState(null);
    const [changes, setChanges] = useState({});

    const handleActionClick = () => {}
    const setValue = (field, value) => {
        const newChanges = {
            ...changes,
            [field]: value,
        }
        console.log('change', field, value, newChanges);
        setChanges(newChanges);
        setRecord({
            ...record,
            ...newChanges,
        });
    }
    const renderItems = useItemsRender(record, setValue, endpoint);

    useEffect(() => {
        setLoading(true);
        request(endpoint + '/' + match.params.id, null, 'GET')
        .then(
            (result) => {
                setRecord(result);
                setLoading(false);
            },
            (error) => {
                setLoading(false);
            },
        )
    },
    [schema, endpoint, match.params.id]);

    if (!record) {
        return <ReactLoader />
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div style={{flex:1}}>
                {schema.form && renderItems(schema.form)}
            </div>
            {schema.actions && schema.actions.map((action) => (
                <ViewHeaderButton 
                    variant="outlined" 
                    color="primary"
                    size="small"
                    actionkey={action.action}
                    key={'mi' + action.action}
                    onClick={(e) => handleActionClick(e, action)}>
                    {action.name}
                </ViewHeaderButton>
            ))}
            <BreadcrumbsItem to={match.url}>Edit #{match.params.id}</BreadcrumbsItem>
        </div>
    );
}

const CRUDView = withRouter(_CRUDView);
export default CRUDView; 
