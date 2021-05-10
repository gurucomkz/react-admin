import React, { useState } from 'react';
import { Box, makeStyles, Tab, Tabs } from "@material-ui/core";
import { useItemsRender } from '../Utls/RenderItems';

function TabPanel(props) {
    const { children, selected, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={selected !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {selected === index && (
                <Box p={3} style={{}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100%',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
        width: '200px',
    },
}));

function TABSET({record, input, endpoint, onChange}) {
    const classes = useStyles();
    const renderItems = useItemsRender(record, onChange, endpoint);
    const [selected, setSelected] = useState(0);

    const handleChange = (event, newValue) => {
        setSelected(newValue);
    };
    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={selected}
                onChange={handleChange}
                className={classes.tabs}
            >
                {input.items.map((tab, tk)=>(
                    <Tab label={tab.title} index={tk} key={'tab_'+tk} />
                ))}
            </Tabs>
            {input.items.map((tab, tk)=>(
                <TabPanel key={'tabpanel_'+tk} index={tk} selected={selected} style={{flexDirection:'column', flex:1}}>
                    {renderItems(tab.items)}
                </TabPanel>
            ))}
        </div>

    )
}

export default TABSET;
