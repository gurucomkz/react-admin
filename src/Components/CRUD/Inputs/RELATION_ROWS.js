import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { renderItem } from '../Utls/RenderItems';
import DeleteIcon from '@material-ui/icons/Delete';

function RELATION_ROWS({record, input, endpoint, onChange}) {
    const items = (record || {})[input.field];

    const onRowInputChange = (idx, field, value) => {
        const editedSet = items.map((_,k) => {
            if(k === idx) {
                _[field] = value;
            }
            return _;
        });
        onChange(input.field, editedSet);
    };

    const deleteRow = (idx) => {
        const newSet = items.filter((_,k) => k !== idx);
        onChange(input.field, newSet);
    }

    const addRow = (e) => {
        var newRow = {
            id: -(new Date()).getTime()
        };
        input.config.forEach((rowField) => {
            newRow[rowField.field] = null;
        });
        onChange(input.field, items.concat([newRow]));
    }
    
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    {input.title}
                </Typography>
                <Grid container spacing={1}>
                    {items.map((row, rowIdx) => (
                        <Grid container item xs={12} spacing={3} key={'row' + row.id}>
                            {input.config.map((rowField, fIdx) => {
                                const subField = {
                                    ...rowField,
                                    parent: input
                                }
                                return (
                                    <Grid item xs key={'cell' + fIdx}>
                                        {renderItem(subField, fIdx, row, (a,b) => onRowInputChange(rowIdx, a, b), endpoint, record)}
                                    </Grid>
                                )
                            })}
                            <Grid item xs={1}>
                                <Button 
                                    variant="outlined" 
                                    size="large"
                                    style={{marginTop: 8, paddingTop: 9, paddingBottom: 9}}
                                    onClick={(e) => deleteRow(rowIdx)}>
                                    <DeleteIcon fontSize="large" />
                                </Button>
                            </Grid>
                        </Grid>
                    ))}
                    <Grid item xs>
                        <Button 
                            onClick={addRow} 
                            fullWidth
                            variant="outlined" 
                            color="primary"
                            size="small">
                            Add row
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}


export default RELATION_ROWS;
