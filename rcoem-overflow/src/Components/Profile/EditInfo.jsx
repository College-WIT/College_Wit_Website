import * as React from "react";
import { Grid, Button, TextField, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Item = {
  backgroundColor: "#f5f5f5",
  color: "black",
  fontFamily: "'urw-din',sans-serif",
  minHeight: "500px",
  height: "auto",
  borderRadius: "10px",
  my: 3,
  mx: 1,
  justifyContent: "center",
};

const EditInfo = () => {
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };
  let location = useLocation();
  //const username = { username: location.state.username };
  //console.log(username);
  var str = window.location.pathname;
  const usernames = str.substring(9);
  const username = { username: usernames };

  const [UserData, setUserData] = useState([]);

  var getUserData = async () => {
    console.log("DATA CALL");
    await axios
      .post("https://rcoem-overflow-backend.herokuapp.com/user_info", username)
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
        //errorMsg: "Error retrieving data"
      });
  };
  useEffect(() => {
    getUserData();
  }, []);
  console.log(UserData);

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        xs={12}
        sx={{ background: "#d3d3d3" }}
      >
        {/* ----------------------------left Bar--------------------------------------------------------------- */}
        <Grid item xs={10} sm={8} md={3} lg={3} sx={Item} textAlign="center">
          <Card
            sx={{
              p: 1,
              maxWidth: 500,
              width: "auto",
              height: "auto",
              minHeight: "500px",
              boxShadow: "0",
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                height: "auto",
                borderRadius: "10px",
                border: "1px solid #457b9d",
                m: 1,
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  padding: "10px",
                  height: "200px",
                  width: "200px",
                  borderRadius: "50%",
                  margin: "auto",
                  marginTop: "20px",
                }}
                image="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1667425437~exp=1667426037~hmac=9464865d765f09b4765dcb5d8b8f905e26e6f9aa81d444199cace0b4b2e50d3e"
              />
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {UserData.name}
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  color="text.secondary"
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  {UserData.user_name}
                </Typography>
              </CardContent>
            </Grid>

            <CardActions>
              <Grid container justifyContent="center">
                <Typography>
                  <Button sx={{ fontSize: 20 }}>
                    <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
                  </Button>
                  <Button sx={{ fontSize: 20 }}>
                    <img src="https://img.icons8.com/color/48/000000/github--v1.png" />
                  </Button>
                  <Button sx={{ fontSize: 20 }}>
                    <img src="https://img.icons8.com/color/48/000000/gmail.png" />
                  </Button>
                </Typography>
              </Grid>
            </CardActions>

            <Divider />
            <Grid item justifyContent="center">
              <Link to="/EditProfile" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    fontSize: "15px",
                    my: 3,
                    width: "150px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "#293241",
                    color: "white",
                    boxShadow: "0",
                    position: "relative",

                    "&:hover": {
                      background: "#d3d3d3",
                      color: "black",
                    },
                  }}
                  variant="contained"
                >
                  Edit Info
                </Button>
              </Link>
            </Grid>
          </Card>
        </Grid>

        {/* ----------------------------right Bar--------------------------------------------------------------- */}
        <Grid
          item
          xs={10}
          sm={8}
          md={8}
          lg={8}
          sx={Item}
          backgroundColor="white"
        >
          <Typography
            sx={{
              fontSize: "40px",
              m: 3,
              textAlign: "center",
            }}
          >
            Edit Information
          </Typography>

          <Grid
            container
            justifyContent="center"
            sx={{ my: 3, p: 1, borderRadius: "10px" }}
            spacing={2}
          >
            <Grid item xs={10} sm={5}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={10} sm={5}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={10} sm={5}>
              <InputLabel id="birthday">Birthday</InputLabel>
              <TextField
                name="birthday"
                type="date"
                required
                fullWidth
                labelId="birthday"
                autoFocus
              />
            </Grid>
            <Grid item xs={10} sm={5}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                required
                fullWidth
                value={gender}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>others</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={10} sm={5}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={10} sm={5}>
              <TextField
                type="tel"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained">Save</Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Bar */}
      </Grid>
    </div>
  );
};

export default EditInfo;
