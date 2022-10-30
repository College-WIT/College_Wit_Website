import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
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
                width: "170px",
                height: "220px",
                margin: "10px"

            }}>

                <Grid>
                    <Lottie options={defaultOptions}
                        height='80%'
                        width='100%'
                    />

                    <Typography sx={{
                        alignItems: "center",
                        textAlign: "center",
                        fontFamily: "monospace",
                        wordWrap: "break-word",
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