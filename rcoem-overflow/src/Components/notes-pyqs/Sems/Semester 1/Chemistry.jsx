import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';


const Chemistry = () => {
    const data = [
        {
            id: 1,
            title: "Notes",
            url: "https://www.google.co.in/"
        },
        {
            id: 2,
            title: "PYQ 2022",
            url: "https://drive.google.com/drive/u/0/folders/1HNL0w1Qr76t_SiOf7JT-OdSdenUjDTD1"
        },
        {
            id: 3,
            title: "PYQ 2021",
            url: "https://www.google.co.in/"
        },
        {
            id: 4,
            title: "PYQ 2020",
            url: "https://www.google.co.in/"
        },
        
    ];
    return (
        <div>
            <Typography variant="h3" sx={{
                textAlign: 'center',
                marginTop: '40px'
            }}>Chemistry Notes and PYQ</Typography>

            <Grid container spacing={2} columns={10} sx={{
                marginTop: '50px'
            }}>
                {data.map((d) => (
                    <Grid item xs={8} sx={{ marginLeft: '10%' }}>
                        <a href={d.url}>
                            <Stack variant='contained' sx={{
                                height: '50px',
                                backgroundColor: '#E26639',
                                borderRadius: '10px',
                                textTransform: 'none',
                                fontSize: '20px',
                                color: '#fff',
                                fontWeight: 500,
                            }}>
                                {d.title}
                            </Stack>
                        </a>
                    </Grid>
                ))}
                {/* <Grid item xs={5}>
                    <Link to="/ChemPYQ">
                        <Button variant='contained' sx={{
                            backgroundColor: '#E26639',
                            textTransform: 'none',
                            fontSize: '20px',
                            "&:hover": {
                                backgroundColor: "#E26639",
                            }
                        }}>
                            Previous Year Questions
                        </Button>
                    </Link>
                </Grid> */}
            </Grid>
        </div>
    )
}

export default Chemistry