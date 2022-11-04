import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ExploreIcon from "@mui/icons-material/Explore";
import "../../index.css";
import * as animationData from "../../Assets/searchLottie.json";
import Lottie from "react-lottie";
import axios from "axios";

export default function Boxes() {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        px: "5%",
        py: "2%",
        my: "2%",
      }}
    >
      <Grid
        container
        justifyContent="center"
        sx={{
          width: "80%",
          height: "100%",
          px: "2%",
          py: "4%",
          backgroundColor: "#001d3d",
          borderRadius: "10px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            width: "80%",
            color: "white",
            fontWeight:"900",
            textAlign: "center",
            fontFamily: "Raleway Dots",
            m: 3,
          }}
        >
          {/* Every RCOEMian has a Tab to Open RCOEM-Overflow */}
          Every RCOEMian has a Tab to Open CollegeWit
        </Typography>

        <Grid
          container
          justifyContent="center"
          sx={{
            width: "70%",
            height: "100%",
            backgroundColor: "#118ab2",
            webkitBackdropFilter: "blur(4px)",
            oBackdropFilter: "blur(4px)",
            mozBackdropFilter: "blur(4px)",
            backdropFilter: "blur(4px)",
            borderRadius: "10px",
            alignItems: "center",
            py: "3%",
          }}
        >
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Lottie options={defaultOptions} height="127px" width="50%" />
            <br />
          </Grid>

          <Typography
            sx={{
              p: "2%",
              color: "white",
              textAlign: "center",
              fontSize: "30",
            }}
          >
            Find the best Answers to your Technical Questions, Help Others
            answer their's!
          </Typography>

          <Grid
            container
            justifyContent="center"
            sx={{
              paddingTop: 3,
            }}
          >
            <Button
              className="exploreButton"
              variant="contained"
              startIcon={<ExploreIcon />}
              sx={{
                backgroundColor: "#f1faee",
                color: "#457b9d",
                "&:hover": {
                  backgroundColor: "#457b9d",
                  color: "#f1faee",
                  border: "1px solid #f1faee",
                  opacity: 10,
                },
              }}
            >
              Explore
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
