import * as React from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button, CardActions, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function MediaCard(props) {
  const UserData = props.data;
  return (
    <Card
      sx={{
        maxWidth: 400,
        maxHeight: 500,
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
          backgroundColor: "#1a1a1a",
        }}
      >
        <Grid container xs={12} justifyContent="center">
          <Typography
            sx={{
              fontSize: 15,
              fontFamily: "Josefin Sans, sans-serif",
              textAlign: "center",
              borderRadius: "5px",
              width: "auto",
              backgroundColor: "#118ab2",
              my: "10px",
              color: "white",
              px: 2,
              py: "5px",
            }}
          >
            Rank 1
          </Typography>
        </Grid>

        <Grid item justifyContent="center">
          <Avatar
            variant="square"
            sx={{
              position: "relative",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
            }}
            alt="Remy Sharp"
            src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1667425437~exp=1667426037~hmac=9464865d765f09b4765dcb5d8b8f905e26e6f9aa81d444199cace0b4b2e50d3e"
          />
        </Grid>
      </Grid>
      <CardContent
        sx={{
          padding: 2,
        }}
      >
        <Grid container xs={12} justifyContent="center">
          <Button
            sx={{
              textAlign: "center",
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: 20,
              color: "#000000",
              fontWeight: "bold",
              marginTop: "50px",
              color: "black",
            }}
          >
            <Link
              style={{ textDecoration: "None", color: "black" }}
              to={{
                pathname: `/Profile/${UserData.user_name}`,
              }}
            >
              {UserData.name}
            </Link>
          </Button>
        </Grid>
        <Grid container justifyContent="center">
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: 20,
              color: "#000000",
            }}
          >
            Score : {UserData.points}
          </Typography>
        </Grid>
        <Divider
          sx={{
            marginTop: "10px",
            color: "#000000",
          }}
        />
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <a href={UserData.linkedin_url}>
          <Button
            size="small"
            sx={{
              backgroundColor: "#000000",
              color: "white",
              "&:hover": {
                boxShadow: "2px 5px 5px 2px #b3bfcc",
                color: "black",
                border: "1px solid black",
              },
            }}
          >
            <GitHubIcon />
          </Button>
        </a>
        <a href={UserData.linkedin_url}>
          <Button
            size="small"
            sx={{
              backgroundColor: "#0077b5",
              color: "white",
              "&:hover": {
                boxShadow: "2px 5px 5px 2px #b3bfcc",
                color: "black",
                border: "1px solid black",
              },
            }}
          >
            <LinkedInIcon />
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
