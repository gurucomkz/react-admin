import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';

import { request } from '../../Context/actions';
import { withRouter } from 'react-router';
import { useItemsRender } from './Utls/RenderItems';

function _CRUDView({schema, endpoint, path, match, ...props}) {
    const [loading, setLoading] = useState(false);
    const [record, setRecord] = useState({});
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
    [schema, endpoint]);

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            <div className="header" style={{display: 'flex'}}>
                <div style={{flex:1}}>
                    Breadcrubms
                </div>
                <div>
                    {schema.actions && schema.actions.map((action, pos) => (
                        <Button 
                            variant="outlined" 
                            color="primary"
                            size="small"
                            key={'mi' + pos}
                            onClick={(e) => handleActionClick(e, action)}>
                            {action.name}
                        </Button>
                    ))}
                    <Button>
                        <CloseIcon fontSize="small" />
                    </Button>
                </div>
            </div>
            <div style={{flex:1}}>
                {schema.form && renderItems(schema.form)}
            </div>
        </div>
    );
}

const CRUDView = withRouter(_CRUDView);
export default CRUDView; 
