import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import getCookie from "../../hooks/getCookie";
const quickAccBar = ["Home", "Answered", "Unanswered", "Trending"];

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

const Leftbar = () => {
  return (
    <div>
      {/* ----------------------------QUICK ACCESS------------------------------ */}

      <Item>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 500,
            fontFamily: "Josefin Sans, sans-serif",
          }}
        >
          {" "}
          Quick Access
        </Typography>
        <Divider light />
        {quickAccBar.map((content) => (
          <Grid
            sx={{
              padding: 2,
              "@media (max-width:780px)": {
                padding: "0 ,0, 0, 0",
              },
            }}
          >
            <Link
              style={{ textDecoration: "None", color: "white" }}
              to={`/${content}`}
            >
              <Button
                sx={{
                  fontSize: 15,
                  backgroundColor: "#118ab2",
                  width: 130,
                  height: 35,
                  borderRadius: 1,
                  fontFamily: "Josefin Sans, sans-serif",
                  "&:hover": {
                    backgroundColor: "#04274d",
                    color: "#fff",
                    opacity: 10,
                  },
                  "@media (max-width:1000px)": {
                    fontSize: 12,
                    width: 100,
                    height: 20,
                  },
                  "@media (max-width:900px)": {
                    fontSize: 10,
                    width: 90,
                    height: 20,
                  },
                  "@media (max-width:800px)": {
                    fontSize: 8,
                    width: 70,
                    height: 20,
                  },
                }}
                variant="contained"
                disableElevation
              >
                {content}
              </Button>
            </Link>
          </Grid>
        ))}

        <Grid sx={{ paddingTop: 2 }}>
          <Link style={{ textDecoration: "None" }} to={red_link}>
            <Button
              sx={{
                backgroundColor: "#001d3d",
                color: "#fff",
                width: 150,
                height: 60,
                borderRadius: 2,
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: 15,
                "@media (max-width:1000px)": {
                  width: 110,
                },
                "&:hover": {
                  backgroundColor: "white",
                  border: "1px solid #001d3d",
                  color: "#000",
                  opacity: 10,
                },
              }}
              variant="contained"
              disableElevation
            >
              Post a question
            </Button>
          </Link>
        </Grid>
      </Item>
    </div>
  );
};

export default Leftbar;
