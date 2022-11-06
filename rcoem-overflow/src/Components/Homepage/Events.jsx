import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const cards = {
  boxShadow: 24,
  border: "1px solid #000",
  borderRadius: 1,
  borderColor: "grey.500",
  maxHeight: 700,
};
const btn = {
  backgroundColor: "#001d3d",
  color: "white",
  p: 1,
  "&:hover": {
    backgroundColor: "white",
    color: "#001d3d",
  },
};

const Events = () => {

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
      <Typography
        sx={{
          fontFamily: "Josefin Sans, sans-serif",
          fontWeight: 500,
          fontSize: 40,
          paddingBottom: 3,
        }}
      >
        College Events
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
          <Card sx={cards}>
            <CardMedia
              component="img"
              height="60%"
              image="https://i.imgur.com/0aW7mSw.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                sx={{ fontFamily: "Josefin Sans, sans-serif", fontSize: 20 }}
              >
                DSA Workshop
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container justifyContent="center">
                <Button href="https://us02web.zoom.us/meeting/register/tZIvf-uupzgqGNMuOaNfPl3wwdrndky2OhFo" size="small" sx={btn}>
                  Register Now
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Card sx={cards}>
            <CardMedia
              component="img"
              height="80%"
              image="https://i.imgur.com/LFWnlJB.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Josefin Sans, sans-serif", fontSize: 20 }}
              >
                Auto Run Season 1
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container justifyContent="center">
                <Button href="https://practice.geeksforgeeks.org/contest/auto-run-team-rio" size="small" sx={btn}>
                  Register Now
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Card sx={cards}>
            <CardMedia
              component="img"
              height="80%"
              image="https://i.imgur.com/LJlNB8h.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                component="div"
                sx={{ fontFamily: "Josefin Sans, sans-serif", fontSize: 20 }}
              >
                Git-For-Geeks
              </Typography>
            </CardContent>
            <CardActions>
              <Grid container justifyContent="center">
                <Button href="https://gitforgeeks.netlify.app/" size="small" sx={btn}>
                  Register Now
                </Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Events;
