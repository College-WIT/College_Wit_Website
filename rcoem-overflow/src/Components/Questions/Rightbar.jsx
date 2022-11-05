import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import getCookie from "../../hooks/getCookie";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

var cookie = getCookie("login");
var red_link = "/Post-a-question";
if (cookie == null) {
  red_link = "/login";
  console.log(red_link);
}
const queTags = [
  "ANDROID-DEVELOPMENT",
  "COLLEGE-LIFE",
  "COMPETITIVE-PROGRAMMING",
  "CSS",
  "DJANGO",
  "FLUTTER",
  "HTML",
  "JAVASCRIPT",
  "NODE-JS",
  "OPEN-SOURCE",
  "OTHERS",
  "PYQ",
  "REACT-JS",
  "WEB-DEVELOPMENT",
];

const Rightbar = () => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div>
      <Item>
        <Typography
          color="black"
          sx={{
            fontFamily: "'urw-din',sans-serif",
            fontSize: 20,
          }}
        >
          Tags
        </Typography>
        <Divider light />
        {queTags.map((content) => (
          <Grid
            sx={{
              padding: 1,
            }}
          >
            <Link
              to={{
                pathname: `/tags/${content}`,
              }}
              state={{ tag: content }}
            >
              <Button
                sx={{
                  backgroundColor: "#118ab2",
                  width: 130,
                  height: 45,
                  padding: "10px",
                  borderRadius: 1,
                  fontSize: 12,
                  fontFamily: "'urw-din',sans-serif",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#38E54D",
                    color: "#04274d",
                    opacity: 10,
                  },

                  "@media (max-width:1000px)": {
                    width: 110,
                    height: 55,
                    padding: "15px",
                  },
                }}
              >
                {content}
              </Button>
            </Link>
          </Grid>
        ))}

        {/* <Grid sx={{ paddingTop: 10 }}>
          <Button
            sx={{
              backgroundColor: "#20D867",
              width: 150,
              height: 60,
              border: 1,
              borderRadius: 2,
              fontSize: 15,
              "&:hover": {
                backgroundColor: "#E26639",
                opacity: 10,
              },
            }}
            variant="contained"
            disableElevation
          >
            <Link
              style={{ textDecoration: "None", color: "white" }}
              to={red_link}
            >
              Post a question
            </Link>
          </Button>
        </Grid> */}
      </Item>
    </div>
  );
};

export default Rightbar;
