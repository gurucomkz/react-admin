import React, { useEffect, useState } from 'react';

import { request } from '../../Context/actions';
import { useSnacksDispatch } from '../../Context/snacks';
import { withRouter } from 'react-router';
import { useItemsRender } from './Utls/RenderItems';
import { ViewHeaderButton } from '../ViewHeader';
import { BreadcrumbsItem, ReactLoader } from '../';
import { ViewFooterButton } from '../ViewFooter';

function _CRUDView({schema, endpoint, path, match, ...props}) {
    const [loading, setLoading] = useState(false);
    const [record, setRecord] = useState(null);
    const [changes, setChanges] = useState({});
    const [haveChanges, setHaveChanges] = useState(false);
    const errorHandler = useSnacksDispatch();

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
        setHaveChanges(true);
    }
    const renderItems = useItemsRender(record, setValue, endpoint);

    const onSaveClick = (e) => {
        e.stopPropagation();
        setLoading(true);
        const saveURL = record.id ? endpoint + '/' + record.id : endpoint;
        const saveMethod = record.id ? 'PUT' : 'POST';
        request(saveURL, record, saveMethod)
        .then(
            (result) => {
                setRecord(result);
                setLoading(false);
            },
            (error) => {
                setLoading(false);
                errorHandler(error);
            },
        );
        return false;
    }

    useEffect(() => {
        let active = true;
        setLoading(true);
        request(endpoint + '/' + match.params.id, null, 'GET')
        .then(
            (result) => {
                if(!active) return;
                setRecord(result);
                setLoading(false);
            },
            (error) => {
                setLoading(false);
                errorHandler(error);
            },
        )

        return () => {
            active = false;
        }
    },
    // eslint-disable-next-line
    [schema, endpoint, match.params.id]);

    if (!record) {
        return <ReactLoader />
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100%'}}>
            {loading && <ReactLoader />}
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
            <ViewFooterButton 
                variant={haveChanges ? "contained" : "outlined"}
                color="primary"
                size="small"
                actionkey="crudSave"
                key="miCrudSave"
                onClick={onSaveClick}>
                Save
            </ViewFooterButton>
        </div>
    );
}

const CRUDView = withRouter(_CRUDView);
export default CRUDView; 
