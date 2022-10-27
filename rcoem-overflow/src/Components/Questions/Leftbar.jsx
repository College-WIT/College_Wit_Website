import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
const quickAccBar = ["Home", "Answered", "Unanswered", "Trending"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Leftbar = () => {
  return (
    <div>
      {/* ----------------------------QUICK ACCESS------------------------------ */}

      <Item>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 300,
            fontFamily: "'urw-din',sans-serif",
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
            <Button
              sx={{
                fontSize: 15,
                backgroundColor: "#E26639",
                width: 130,
                height: 35,
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: "#41D450",
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
              <Link
                style={{ textDecoration: "None", color: "white" }}
                to={`/${content}`}
              >
                {content}
              </Link>
            </Button>
          </Grid>
        ))}
      </Item>
    </div>
  );
};

export default Leftbar;