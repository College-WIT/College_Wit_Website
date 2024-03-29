import * as React from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar, Button, CardActions, Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
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
            Rank {UserData.rank}
          </Typography>
        </Grid>

        <Grid item justifyContent="center">
          <Avatar
            variant="square"
            sx={{
              position: "relative",
              backgroundColor:"#fff",
              width: "120px",
              height: "120px",
              borderRadius:"10%"
            }}
            alt="Avatar"
            src="https://avatars.dicebear.com/api/identicon/gree.svg"
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
        <a href={UserData.github_url}>
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
