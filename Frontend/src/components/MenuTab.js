import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation } from 'react-router-dom';

export default function MenuTabs() {
    const location = useLocation();
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        if (location.pathname === '/inicio') {
            setValue(0);
        } else if (location.pathname === '/jogos') {
            setValue(1);
        }
    }, [location.pathname]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Início" component={Link} to="/inicio" style={{ color: 'white', fontSize: '18px' }} />
                <Tab label="Jogos" component={Link} to="/jogos" style={{ color: 'white', fontSize: '18px' }} />
            </Tabs>
        </Box>
    );
}