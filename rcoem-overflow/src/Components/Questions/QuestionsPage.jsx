import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 1000,
}));

export default function QuestionsPage() {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 3 }}>
            <Grid container justifyContent="center" sx={{
                paddingBottom: 5
            }}>
                <h1>Questions Page</h1>
            </Grid>

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Item>Left Side Bar</Item>
                </Grid>
                <Grid item xs={7}>
                    <Item>Questions Section</Item>
                </Grid>
                <Grid item xs={2}>
                    <Item>Tags</Item>
                </Grid>
            </Grid>
        </Box>
    );
}
