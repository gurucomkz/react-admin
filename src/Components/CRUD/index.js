import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CRUDCreate from './CRUDCreate';
import CRUDView from './CRUDView';
import CRUDEdit from './CRUDEdit';
import CRUDIndex from './CRUDIndex';
import { request } from '../../Context/actions';
import { BreadcrumbsItem  } from '../';

function CRUD({endpoint, ...props}) {
    const [schema, setSchema] = useState({});
    
    var routes = [
        {
            path: '/' + endpoint + '/create',
            component: CRUDCreate,
        },
        {
            path: '/' + endpoint + '/view/:id',
            component: CRUDView,
        },
        {
            path: '/' + endpoint + '/edit/:id',
            component: CRUDEdit,
        },
        {
            path: '/' + endpoint,
            component: CRUDIndex,
        },
    ];

    useEffect(function(){
        request(endpoint + '/schema')
        .then(
            (result) => {
                setSchema(result)
            },
            (error) => {
                // setIsLoaded(true);
                console.error(error);
                // setError(error);
            }
        )
    },[endpoint]);
    return (
        <>
            <Switch>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        exact
                        render={(props) => (
                            <route.component {...props} endpoint={endpoint} schema={schema} />
                        )}
                    />
                ))}
            </Switch>
            <BreadcrumbsItem to={'/' + endpoint}>{endpoint}</BreadcrumbsItem>
        </>
    )
}

export default CRUD;
