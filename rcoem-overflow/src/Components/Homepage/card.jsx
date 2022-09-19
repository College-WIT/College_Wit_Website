import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
export default function MediaCard() {
    return (
        <Card sx={{
            maxWidth: 400,
            height: "auto",
            margin: 2,
            boxShadow: "2px 5px 5px 2px #b3bfcc",
            padding: 2,
            background: "linear-gradient(to right, #2b2a2a, #141313)",
            color: "white",

        }}>
            <Grid container spacing="4px"  >
                <Grid item xs={4} justifyContent="left" sx={{

                }}  >
                    <Avatar variant='square' sx={{
                        height: "100px",
                        width: "100px",
                    }}
                        alt="Remy Sharp"
                        src="https://th.bing.com/th/id/OIP.6C4bCvrEnKURBcRjCOr0sQHaHa?pid=ImgDet&rs=1"
                    />
                </Grid>
                <Grid item xs={8}  >
                    <Typography sx={{
                        fontFamily: "'urw-din',sans-serif",
                        fontSize: 30,
                        marginTop: "20px",
                        color: "white",
                    }}>
                        Lorem Ipsum <EmojiEventsIcon
                            sx={{
                                color: "#f9a825",
                            }}
                        />
                    </Typography>
                </Grid>
            </Grid>
            <Typography sx={{
                fontFamily: "'urw-din',sans-serif",
                fontSize: 20,
                marginTop: "20px",
                color: "white",
            }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>

        </Card>
    );
}
