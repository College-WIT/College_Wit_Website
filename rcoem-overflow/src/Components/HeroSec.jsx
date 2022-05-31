import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Boxes() {
  return (
    <div>
    <Grid container justifyContent="center" sx={{
        paddingTop:8.5,
    }}>
        <Box
            sx={{
                width: 996,
                height: 558,
                backgroundColor: '#3C3938',
                borderRadius:'30px'
            }}
        >
        <Grid container justifyContent="center">
            <Typography variant="h4" sx={{
                width: 600,
                paddingTop: 5,
                color: 'white'
            }}>
                Every RCOEMian has a Tab to Open RCOEM Overflow
            </Typography>
        </Grid>          
        </Box>
    </Grid>
    <Grid container justifyContent="center">
        <Box
            sx={{
            width: 445,
            height: 270,
            backgroundColor: '#E26639',
            position:'relative',
            bottom: 330,
            borderRadius:'30px',
            }}
        >
        </Box>
    </Grid>
    
    </div>
    

      
  );
}