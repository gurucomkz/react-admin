import React from 'react';
import { FormControlLabel, Switch } from "@material-ui/core";


function BOOLEAN({record, input, endpoint, onChange}) {
    return (
        <FormControlLabel
            control={
            <Switch
                id={"input" + input.field}
                checked={!!record[input.field]}
                onChange={(e) => onChange(input.field, e.target.checked)}
                name={input.field}
                color="primary"
            />
            }
            label={input.title}
            style={{ margin: 8 }}
        />
    )
}

export default BOOLEAN;
