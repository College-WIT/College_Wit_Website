import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import folder from '../../Assets/folder3.svg'
import { Grid, Link } from '@mui/material';
import * as animationData from '../../Assets/folderLottie.json'
import Lottie from 'react-lottie';


const card = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };



    return (
        <div>
            <Card sx={{
                width: "150px",
                height: "180px",
                margin: "10px"

            }}>

                <Grid>
                    <Lottie options={defaultOptions}
                        height='100%'
                        width='100%'
                    />

                    <Typography sx={{
                        alignItems: "center",
                        textAlign: "center",
                        fontFamily: "monospace",
                    }}>
                        {props.sem}
                    </Typography>

                    {/* <Typography sx={{
                        alignItems: "center",
                        textAlign: "center",
                        fontFamily: "monospace",
                        paddingBottom: '320px'
                    }}>
                        Semester 1
                    </Typography> */}
                </Grid>

            </Card>
        </div>
    )
}

export default card