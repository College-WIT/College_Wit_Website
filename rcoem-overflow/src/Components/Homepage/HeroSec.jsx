import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import search from "../../assets/search.png"
import Image from 'react-bootstrap/Image'
import Button from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import "../../index.css";
// import { FcSearch } from 'react-icons/fc'



export default function Boxes() {
    return (
        <div>
            <Grid container justifyContent="center"
             sx={{paddingTop: 8.5,
                '@media (max-width:1000px)': {
                    padding: 5
                }

             }}>
                <Box
                    sx={{
                        width: 1000,
                        height: 550,
                        backgroundColor: '#3C3938',
                        borderRadius: '20px',
                       

                    }}
                >
                    <Grid container justifyContent="center">
                        <Typography variant="h5" sx={{
                            width: 600,
                            paddingTop: 5,
                            color: 'white',
                            textAlign: 'center',
                            fontFamily: 'Raleway Dots'

                        }}>
                            Every RCOEMian has a Tab to Open RCOEM-Overflow
                        </Typography>

                    </Grid>
                    <Grid sx={{
                        padding: 5
                    }} container justifyContent="center">
                <Box
                    sx={{
                        width: 600,
                        height: 350,
                        backgroundColor: '#E26639',
                        position: 'relative',
                        borderRadius: '30px',
                        alignItems: "center"

                    }}
                >
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: "center"
                       
                    }}>
                      <Image style={{
                      paddingTop: 5,
                      }} className='search' src={search} />
                        <span
                         style={{
                            fontFamily: 'monospace',
                            color:"white",
                            textDecoration: 'none',
                            cursor: 'pointer',
                            fontSize: 25,
                            paddingTop: 5,

                        }}>Search</span>
                    </div>
                    {/* <div className='imageDiv'>
                        <Image className='search' src={search} />
                    </div> */}
                    <Grid container justifyContent="center">
                        {/* <Typography variant="body1" component='a' href='#' sx={{
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
                        </Typography> */}
                        <Typography variant="h6" sx={{
                            width: 400,
                            paddingTop: 4,
                            color: 'white',
                            fontFamily: 'monospace',
                        }}>
                            Find the best Answers to your Teachnical Questions, Help Others answer their's
                        </Typography>

                    </Grid>
                    <Grid container justifyContent="center" sx={{
                        paddingTop: 2
                    }}>
                        <Button className='exploreButton' variant='contained' startIcon={<ExploreIcon />} sx={{
                            backgroundColor: '#20D867',
                            "&:hover": {
                                backgroundColor: "#41D450",
                                opacity: 10,
                            }

                        }}>Explore</Button>
                    </Grid>

                </Box>
            </Grid>

                </Box>
            </Grid>
            
        </div>



    );
}