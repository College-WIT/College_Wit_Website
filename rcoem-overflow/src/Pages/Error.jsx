import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Navbar from "../Components/Navbar";
import Lottie from "react-lottie";
import * as animationData from "../Assets/error4.json";

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

                <Lottie options={defaultOptions} height="86.5vh" width="100%" />
            </Grid>

        </div >
    );
};

export default comingSoon;
