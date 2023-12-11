import { Grid, Typography } from '@mui/material'
import React from 'react'
import Lottie from 'react-lottie'
import Navbar from "../../Navbar";
import * as animationData from "../../../Assets/Loading.json";

const Loading = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            <Grid container>
                <Grid xs={12} md={12} lg={10}>
                    <Lottie options={defaultOptions} height="85%" width="80%" style={{ marginTop: '20px' }} />
                </Grid>
            </Grid>

        </div>
    )
}

export default Loading