import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const AddNav = () => {
    return (
        <Box className="NavBox" sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <ArrowBackIcon/>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Календарь тренировок
                    </Typography>
                    <SummarizeIcon color="action"/>
                    <ExitToAppIcon/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
