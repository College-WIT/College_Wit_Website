import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import * as animationData1 from "../../Assets/Viewers.json";
import * as animationData2 from "../../Assets/People.json";
import * as animationData3 from "../../Assets/QnA.json";
import axios from "axios";

import Lottie from "react-lottie";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  margin: theme.spacing(2),
  textAlign: "center",
  color: "#fff",
  height: 100,
  width: "100%",
}));

const Counter = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: animationData3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [StatisticsData, setStatisticsData] = useState([]);

  var getStatsData = async () => {
    console.log("STATS DATA CALL");
    await axios
      .get("https://demo-vercel-teal.vercel.app/front_page_analytics")
      .then((response) => {
        console.log(response);
        setStatisticsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getStatsData();
  }, []);
  console.log(StatisticsData);

  return (
    <Grid
      container
      sx={{
        height: "auto",
        marginTop: "20px",
        marginBottom: "60px",
      }}
    >
      <Grid container justifyContent="center">
        <Typography
          sx={{
            fontSize: 40,
            color: "#000000",
            fontFamily: "Josefin Sans, sans-serif",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Website Statistics
        </Typography>
      </Grid>
      <Grid
        container
        xs={12}
        justifyContent="center"
        sx={{
          marginTop: "30px",
          marginBottom: "40px",
        }}
      >
        <Stack
          direction="row"
          sx={{
            width: "60%",
            height: "200px",
            padding: "3px",
            // border: "1px solid grey",
            borderRadius: 2,
            position: "relative",
            alignItems: "right",
          }}
        >
          <Item
            elevation={0}
            sx={{
              height: "auto",
              borderRight: "1px solid grey",
              borderRadius: "0px",
            }}
          >
            <Lottie options={defaultOptions} height="150px" width="100px" />
            <Typography
              sx={{
                fontSize: 25,
                color: "#000000",
                marginTop: "10px",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Views :{StatisticsData.views_count}
            </Typography>
          </Item>

          <Item
            elevation={0}
            sx={{
              height: "auto",
              borderRight: "1px solid grey",
              borderRadius: "0px",
            }}
          >
            <Lottie options={defaultOptions2} height="150px" width="190px" />
            <Typography
              sx={{
                fontSize: 25,
                color: "#000000",
                fontFamily: "Josefin Sans, sans-serif",
                marginTop: "10px",
              }}
            >
              Users:{StatisticsData.users_count}
            </Typography>
          </Item>
          <Item
            elevation={0}
            sx={{
              height: "auto",
              borderRadius: "0px",
            }}
          >
            <Lottie options={defaultOptions3} height="150px" width="100px" />
            <Typography
              sx={{
                fontSize: 25,
                color: "#000000",
                marginTop: "10px",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Questions:{StatisticsData.que_count}
            </Typography>
          </Item>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Counter;
