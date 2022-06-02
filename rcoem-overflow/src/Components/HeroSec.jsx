import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import search from "../assets/search.png"
import Image from 'react-bootstrap/Image'
import Button from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import "../index.css";

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
                color: 'white',
                textAlign: 'center'
            }}>
                Every RCOEMian has a Tab to Open RCOEM-Overflow
            </Typography>
        </Grid>          
        </Box>
    </Grid>
    <Grid container justifyContent="center">
        <Box
            sx={{
            width: 445,
            height: 310,
            backgroundColor: '#E26639',
            position:'relative',
            bottom: 330,
            borderRadius:'30px'
            }}
        >
        <div className='imageDiv'>
            <Image className='search' src={search} />            
        </div>
        <Grid container justifyContent="center">
            <Typography variant="h6" sx={{
                width: 400,
                paddingTop: 5,
                color: 'white'
            }}>
                Find the best Answers to your Teachnical Questions, Help Others answer their's
            </Typography>
            <Typography variant="body1" component='a' href='#' sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                color: 'white',                
                textDecoration: 'none',
                cursor: 'pointer',
                paddingTop: 2,
                "&:hover": {
                    color: "#41D450",
                    opacity: 10,
                }
              }}>
                Search Question
            </Typography>            
        </Grid>
        <Grid container justifyContent="center" sx={{
            paddingTop: 2
        }}>
            <Button className='exploreButton' variant='contained' startIcon = {<ExploreIcon/>} sx={{
                backgroundColor:'#20D867',
                "&:hover": {
                    backgroundColor: "#41D450",
                    opacity: 10,
                }

            }}>Explore</Button>
        </Grid>       

        </Box>
    </Grid>
    
    </div>
    

      
  );
}