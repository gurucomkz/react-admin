import React from 'react';
import { TextField } from "@material-ui/core";


function TEXTAREA({record, input, endpoint, onChange}) {
    return (
        <TextField
            multiline={true}
            rows={10}
            id={"input" + input.field}
            label={input.title}
            type="text"
            InputLabelProps={{
                shrink: true,
            }}
            fullWidth
            style={{ margin: 8 }}
            value={record[input.field]||''}
            onChange={(val) => onChange(input.field, val)}
            variant="outlined"
        />
    )
}

export default TEXTAREA;
