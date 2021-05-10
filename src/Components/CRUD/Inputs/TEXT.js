import React from 'react';
import { TextField } from "@material-ui/core";


function TEXT({record, input, endpoint, onChange}) {
    return (
        <TextField
            id={"input" + input.field}
            label={input.title}
            type="text"
            InputLabelProps={{
                shrink: true,
            }}
            fullWidth
            style={{ margin: 8 }}
            value={record[input.field]||''}
            onChange={(e) => onChange(input.field, e.target.value)}
            variant="outlined"
        />
    )
}

export default TEXT;
