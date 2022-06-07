import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#E26639',
    ...theme.typography.body2,
    margin: theme.spacing(2),
    textAlign: 'center',
    color: '#fff',
    height: 70,
}));

export default function Contributors() {
    return (
        <div>
            <Grid container justifyContent="center" sx={{
                paddingBottom: 5
            }}>
                <h1>Top Contributors</h1>
            </Grid>


            <Box sx={{ 
                flexGrow: 1,
                px: 5,
            }}>
                <Grid container spacing={4}>
                    <Grid item xs={5}>
                        <Item>Item</Item>
                        <Item>Item</Item>
                        <Item>Item</Item>
                        <Item>Item</Item>
                        <Item>Item</Item>
                    </Grid>
                    <Grid item xs={7}>
                        <Item>Demo description</Item>
                    </Grid>
                </Grid>
            </Box>       
        </div>
    )
}