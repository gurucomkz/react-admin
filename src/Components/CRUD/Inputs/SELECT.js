import React, { useEffect, useRef, useState } from 'react';
import { CircularProgress, TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { request } from '../../../Context/actions';

function SELECT({record, input, endpoint, onChange, primaryRecord}) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;
    const queryRecord = primaryRecord || record;

    const initialValue = useRef(record[input.field]);
    const queryUrl = endpoint + '/options/' + queryRecord.id + '/' + (input.parent ? input.parent.field + '/' : '') + input.field;

    const onACChange = (e,v) => onChange(input.field, v ? v.value : null)
    
    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        request(queryUrl)
        .then((result) => {
            if (active) {
                setOptions(result);
            }
        });

        return () => {
            active = false;
        };
    }, [loading, queryUrl]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <Autocomplete
            style={{margin: '8px'}}
            id={"input" + input.field}
            fullWidth
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, current) => option.value === current.value}
            getOptionLabel={(option) => option.title}
            options={options}
            loading={loading}
            defaultValue={initialValue.current}
            onChange={onACChange}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={input.title}
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    )
}

export default SELECT;
