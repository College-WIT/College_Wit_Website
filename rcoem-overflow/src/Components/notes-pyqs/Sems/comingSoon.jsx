import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Navbar from "../../Navbar";
import Lottie from "react-lottie";
import * as animationData from "../../../Assets/comingsoon.json";

const comingSoon = () => {
    
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
            <Navbar />
            <Grid container>
                <Grid xs={12} md={6}>
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                            marginTop: "150px",
                        }}
                    >
                        Coming Soon ...
                    </Typography>
                </Grid>
                <Grid xs={12} md={6}>
                    <Lottie options={defaultOptions} height="85%" width="80%" style={{ marginTop: '20px' }} />        </Grid>
            </Grid>
                
        </div>
    );
};

export default comingSoon;
