import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import getCookie from "../../hooks/getCookie";
import axios from "axios";

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

const Rightbar = () => {
  const [tagsData, setTagsData] = useState([]);

  var getTagsData = async () => {
    await axios
      .get("https://cw-backend.vercel.app/all_tags")
      .then((response) => {
        setTagsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTagsData();
  }, []);

  return (
    <div>
      <Item>
        <Typography
          color="black"
          sx={{
            fontSize: 20,
            fontFamily: "Josefin Sans, sans-serif",
          }}
        >
          Tags
        </Typography>
        <Divider light />
        {tagsData.map((content) => (
          <Grid
            sx={{
              padding: 1,
            }}
          >
            <Link
              to={{
                pathname: `/tags/${content.tag}`,
              }}
              state={{ tag: content.tag }}
            >
              <Button
                sx={{
                  backgroundColor: "#118ab2",
                  width: 130,
                  height: 45,
                  padding: "10px",
                  borderRadius: 1,
                  fontSize: 12,
                  fontFamily: "Josefin Sans, sans-serif",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#04274d",
                    color: "#fff",
                    opacity: 10,
                  },

                  "@media (max-width:1000px)": {
                    width: 110,
                    height: 55,
                    padding: "15px",
                  },
                }}
              >
                {content.tag}
              </Button>
            </Link>
          </Grid>
        ))}
      </Item>
    </div>
  );
};

export default Rightbar;
