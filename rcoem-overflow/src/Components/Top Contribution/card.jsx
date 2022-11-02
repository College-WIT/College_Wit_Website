import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function MediaCard() {
  return (
    <Card
      sx={{
        maxWidth: 500,
        height: "auto",
        margin: 2,
        boxShadow: "2px 5px 5px 2px #b3bfcc",
        color: "white",
      }}
    >
      <Grid
        xs={12}
        container
        justifyContent="center"
        sx={{
          height: "150px",
          background: "linear-gradient(to right, #2b2a2a, #141313)",
        }}
      >
        <Grid item xs={12} justifyContent="center">
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "'urw-din',sans-serif",
              textAlign: "center",
              position: "relative",
              top: "50%",
              color: "#ffffff",
            }}
          >
            Score : 100
          </Typography>
        </Grid>

        <Grid item justifyContent="center">
          <Avatar
            variant="square"
            sx={{
              position: "relative",
              top: "25%",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
            }}
            alt="Remy Sharp"
            src="https://th.bing.com/th/id/OIP.6C4bCvrEnKURBcRjCOr0sQHaHa?pid=ImgDet&rs=1"
          />
        </Grid>
      </Grid>
      <CardContent
        sx={{
          padding: 6,
        }}
      >
        <Grid item xs={12} justifyContent="center">
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "'urw-din',sans-serif",
              fontSize: 30,
              color: "#000000",
              fontWeight: "bold",
              marginTop: "35px",
              color: "black",
            }}
          >
            Bhushan Wanjari
          </Typography>
        </Grid>
        <Grid container justifyContent="center">
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "'urw-din',sans-serif",
              fontSize: 20,
              color: "#000000",
              marginTop: "10px",
            }}
          >
            Rank : 1
          </Typography>
        </Grid>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        {/* <Button size="small">
          <img loading="lazy" src="https://img.icons8.com/color/linkedin.png" />
        </Button>

        <Button size="small">
          <img loading="lazy" src="https://img.icons8.com/color/github.png" />
        </Button>

        <Button size="small">
          <img loading="lazy" src="https://img.icons8.com/color/twitter.png" />
        </Button> */}

        <Button
          size="small"
          sx={{
            backgroundColor: "#000000",
            color: "white",
            fontFamily: "'urw-din',sans-serif",
            fontSize: 15,
            fontWeight: "bold",
            borderRadius: "5px",
            padding: 1,
            "&:hover": {
              backgroundColor: "#000000",
              color: "white",
            },
          }}
        >
          <GitHubIcon sx={{ marginRight: 1 }} />
          Github
        </Button>

        <Button
          size="small"
          sx={{
            backgroundColor: "#0077b5",
            color: "white",
            fontFamily: "'urw-din',sans-serif",
            fontSize: 15,
            fontWeight: "bold",
            borderRadius: "5px",
            padding: 1,
            "&:hover": {
              backgroundColor: "#000000",
              color: "white",
            },
          }}
        >
          <LinkedInIcon sx={{ marginRight: 1 }} />
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  );
}
