import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function MediaCard() {
    return (
        <Card sx={{
            maxWidth: 500,
            height: "400px",
            margin: 2,
            boxShadow: "2px 5px 5px 2px #b3bfcc",
            
           
            color: "white",
            '@media (max-width:1200px)': {
                width: 300,
            },
            '@media (max-width:1000px)': {
                width: 300,
            },
            '@media (max-width:900px)': {
                width: 200,
            },
            '@media (max-width:700px)': {
                width: 250,
            },
            '@media (max-width:600px)': {
                width: 250,
            },

        }}>
            <Grid xs={12} container  sx={{
                padding: 2,
                 background: "linear-gradient(to right, #2b2a2a, #141313)",
            }} >
                <Grid item xs={5} md={4} justifyContent="left" sx={{
                    
                }}  >
                    <Avatar variant='square' sx={{
                        height: "90px",
                        width: "90px",

                        '@media (max-width:1200px)': {
                            width: '80px',
                            height: '80px',
                        },
                        '@media (max-width:1000px)': {
                            width: '80px',
                            height: '80px',
                        },
                        '@media (max-width:900px)': {
                            height: "60px",
                            width: "60px",
                        },
                    }}
                        alt="Remy Sharp"
                        src="https://th.bing.com/th/id/OIP.6C4bCvrEnKURBcRjCOr0sQHaHa?pid=ImgDet&rs=1"
                    />
                </Grid>
                <Grid item xs={7} md={8} sx={{
                    
                }}  >
                    <Typography sx={{
                        fontFamily: "'urw-din',sans-serif",
                        fontSize: 30,
                        marginTop: "20px",
                        color: "white",
                        '@media (max-width:1000px)': {
                            fontSize: 20,
                        },
                        '@media (max-width:900px)': {
                            fontSize: 20,
                            marginTop: "5px",
                        },
                    }}>
                        Lorem Ipsum <EmojiEventsIcon
                            sx={{
                                color: "#f9a825",
                            }}
                        />
                    </Typography>
                </Grid>
            </Grid>
            <CardContent sx={{
                padding: 6,
            }}>

            <Typography sx={{
                fontFamily: "'urw-din',sans-serif",
                fontSize: 20,
                marginTop: "20px",
                color: "black",
                '@media (max-width:900px)': {
                    fontSize: 15,
                },
            }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>

        </Card>
    );
}
