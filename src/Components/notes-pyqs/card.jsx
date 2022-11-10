import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import * as animationData from "../../Assets/folderLottie.json";
import Lottie from "react-lottie";

const card = (props) => {
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
      <Card
        sx={{
          width: "200px",
          height: "250px",
          margin: "10px",
          p: 1,
        }}
      >
        <Grid>
          <Lottie options={defaultOptions} height="50%" width="100%" />

          <Typography
            sx={{
              alignItems: "center",
              textAlign: "center",
              fontSize: "15px",
              wordWrap: "break-word",
              fontFamily: "Josefin Sans, sans-serif",
              fontWeight: "400",
            }}
          >
            {props.sem}
          </Typography>
        </Grid>
      </Card>
    </div>
  );
};

export default card;
