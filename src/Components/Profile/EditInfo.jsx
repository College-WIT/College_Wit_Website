import * as React from "react";
import { Grid, Button, TextField, Divider, Box } from "@mui/material";
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
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import axios from "axios";
const Styles = {
  Item: {
    color: "black",
    fontFamily: "'urw-din',sans-serif",
    minHeight: "500px",
    height: "auto",
    borderRadius: "10px",
    my: 3,
    mx: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: "20px",
    background: "#001d3d",
    color: "white",
    textAlign: "center",
    borderRadius: "5px",
    fontFamily: "Josefin Sans, sans-serif",
    width: "auto",
    p: 1,
  },
  card: {
    p: 1,
    maxWidth: 500,
    width: "auto",
    height: "auto",
    minHeight: "500px",
    boxShadow: "0",
  },
  media: {
    padding: "10px",
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    margin: "auto",
    marginTop: "20px",
  },
  icon: {
    fontSize: 20,
    color: "#ffffff",
  },
  button: {
    fontSize: "15px",
    my: 3,
    width: "150px",
    height: "40px",
    borderRadius: "10px",
    background: "#293241",
    color: "white",
    boxShadow: "0",
    position: "relative",
    fontFamily: "Josefin Sans, sans-serif",
    "&:hover": {
      background: "#d3d3d3",
      color: "black",
    },
  },
  content: {
    fontSize: "20px",
    color: "black",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: "bold",
  },
  content2: {
    fontSize: "20px",
    color: "black",
    fontFamily: "Josefin Sans, sans-serif",
    fontWeight: 400,
    marginLeft: "10px",
  },
  content3: {
    fontFamily: "Josefin Sans, sans-serif",
  },
};
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  "Python",
  "C++",
  "Java",
  "JavaScript",
  "C",
  "C#",
  "PHP",
  "SQL",
  "HTML",
  "CSS",
  "Web Development",
  "Android Development",
  "iOS Development",
  "Machine Learning",
  "Data Science",
  "Blockchain",
  "Cloud Computing",
  "UI/UX",
  "Game Development",
  "Ethical Hacking",
  "Competitive Programming",
  "Other",
];
const EditInfo = () => {
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  var str = window.location.pathname;
  const usernames = str.substring(9);
  const username = { username: usernames };

  const [UserData, setUserData] = useState([]);

  var getUserData = async () => {
    console.log("DATA CALL");
    await axios
      .post("https://demo-vercel-teal.vercel.app/user_info", username)
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(
    () => {
      getUserData();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
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
        <Grid
          item
          xs={10}
          sm={8}
          md={3}
          lg={3}
          sx={Styles.Item}
          textAlign="center"
        >
          <Card sx={Styles.card}>
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
                sx={Styles.media}
                image="https://xsgames.co/randomusers/avatar.php?g=pixel"
              />
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 30,
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "Josefin Sans, sans-serif",
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
                    textAlign: "center",
                    fontFamily: "Josefin Sans, sans-serif",
                    fontWeight: 200,
                  }}
                >
                  {UserData.user_name}
                </Typography>
              </CardContent>
            </Grid>

            <CardActions>
              <Grid container justifyContent="center">
                <Typography>
                  <a href={UserData.linkedin_url}>
                    <Button sx={Styles.icon}>
                      <img
                        alt="LinkedIn"
                        src="https://img.icons8.com/color/48/000000/linkedin.png"
                      />
                    </Button>
                  </a>
                  <a href={UserData.github_url}>
                    <Button sx={Styles.icon}>
                      <img
                        alt="github"
                        src="https://img.icons8.com/color/48/000000/github--v1.png"
                      />
                    </Button>
                  </a>
                </Typography>
              </Grid>
            </CardActions>

            <Divider />
            <Grid item justifyContent="center">
              <Link to="/EditProfile" style={{ textDecoration: "none" }}>
                <Button sx={Styles.button} variant="contained">
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
          sx={Styles.Item}
          backgroundColor="white"
        >
          <Typography
            sx={{
              fontSize: "40px",
              textAlign: "center",
              fontFamily: "Josefin Sans, sans-serif",
              fontWeight: 200,
              my: 1,
            }}
          >
            Edit Information
          </Typography>

          <Grid
            container
            justifyContent="center"
            sx={{ my: 3, p: 1, borderRadius: "10px" }}
            spacing={1}
          >
            {/* ----------------Name---------------- */}
            <Grid item xs={12} sm={10}>
              <TextField
                fontFamily="Josefin Sans, sans-serif"
                autoComplete="given-name"
                name="Name"
                required
                fullWidth
                id="Name"
                label={<span style={Styles.content3}>Name</span>}
                autoFocus
              />
            </Grid>

            {/* <Grid item xs={10} sm={5}>
              <InputLabel id="birthday" style={Styles.content3}>
                Birthday
              </InputLabel>
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
              <InputLabel id="demo-simple-select-label" style={Styles.content3}>
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                required
                fullWidth
                value={gender}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value={10} style={Styles.content3}>
                  Male
                </MenuItem>
                <MenuItem value={20} style={Styles.content3}>
                  Female
                </MenuItem>
                <MenuItem value={30} style={Styles.content3}>
                  others
                </MenuItem>
              </Select>
            </Grid> */}
            {/* ----------------Email---------------- */}
            <Grid item xs={10} sm={5}>
              <TextField
                required
                fullWidth
                id="email"
                label={<span style={Styles.content3}>Email</span>}
                name="email"
                autoComplete="email"
              />
            </Grid>
            {/* ----------------Phone---------------- */}
            <Grid item xs={10} sm={5}>
              <TextField
                type="tel"
                required
                fullWidth
                id="phone"
                label={<span style={Styles.content3}>Phone</span>}
                name="phone"
              />
            </Grid>
            {/* ----------------Semester---------------- */}
            <Grid item xs={10} sm={5}>
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={Styles.content3}
              >
                Semester
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="semester"
                label="Semester"
                sx={Styles.content3}
                fullWidth
              >
                <MenuItem value="" sx={Styles.content3}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1} sx={Styles.content3}>
                  1st
                </MenuItem>
                <MenuItem value={2} sx={Styles.content3}>
                  2nd
                </MenuItem>
                <MenuItem value={3} sx={Styles.content3}>
                  3rd
                </MenuItem>
                <MenuItem value={4} sx={Styles.content3}>
                  4th
                </MenuItem>
                <MenuItem value={5} sx={Styles.content3}>
                  5th
                </MenuItem>
                <MenuItem value={6} sx={Styles.content3}>
                  6th
                </MenuItem>
                <MenuItem value={7} sx={Styles.content3}>
                  7th
                </MenuItem>
                <MenuItem value={8} sx={Styles.content3}>
                  8th
                </MenuItem>
                <MenuItem value={9} sx={Styles.content3}>
                  Passout
                </MenuItem>
              </Select>
            </Grid>

            {/* ----------------Branch---------------- */}
            <Grid item xs={10} sm={5}>
              <InputLabel id="demo-simple-select-label" sx={Styles.content3}>
                Branch
              </InputLabel>
              <Select
                name="branch"
                label="Branch"
                sx={Styles.content3}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>CSE A</MenuItem>
                <MenuItem value={2}>CSE B</MenuItem>
                <MenuItem value={3}>CSE AIML</MenuItem>
                <MenuItem value={4}>CSE DS</MenuItem>
                <MenuItem value={5}>CSE Cyber</MenuItem>
                <MenuItem value={6}>ECE</MenuItem>
                <MenuItem value={7}>IT</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={10}>
              <TextField
                fontFamily="Josefin Sans, sans-serif"
                autoComplete="given-name"
                name="College"
                fullWidth
                id="College"
                label={<span style={Styles.content3}>College</span>}
                autoFocus
              />
            </Grid>
            {/* ----------------Company---------------- */}
            <Grid item xs={10} sm={5}>
              <TextField
                fullWidth
                id="Company"
                label={<span style={Styles.content3}>Company</span>}
                name="Company"
              />
            </Grid>
            {/* ----------------Position---------------- */}
            <Grid item xs={10} sm={5}>
              <TextField
                fullWidth
                id="Position"
                label={<span style={Styles.content3}>Position</span>}
                name="Position"
              />
            </Grid>
            <Divider sx={{ width: "80%", my: 2, backgroundColor: "black" }} />

            <Grid item xs={10} sm={12}>
              <Typography variant="h6" textAlign="center" sx={Styles.content3}>
                Links
              </Typography>
            </Grid>

            {/* ----------------LinkedIn---------------- */}
            <Grid item xs={10} sm={5}>
              <TextField
                fullWidth
                id="LinkedIn"
                label={<span style={Styles.content3}>LinkedIn</span>}
                name="LinkedIn"
              />
            </Grid>
            {/* ----------------Github---------------- */}
            <Grid item xs={10} sm={5}>
              <TextField
                fullWidth
                id="Github"
                label={<span style={Styles.content3}>Github</span>}
                name="Github"
              />
            </Grid>
            {/* ----------------CodeChef---------------- */}
            <Grid item xs={10} sm={5}>
              <TextField
                fullWidth
                id="CodeChef"
                label={<span style={Styles.content3}>CodeChef</span>}
                name="CodeChef"
              />
            </Grid>

            {/* ----------------CodeForces---------------- */}
            <Grid item xs={10} sm={5}>
              <TextField
                fullWidth
                id="CodeForces"
                label={<span style={Styles.content3}>CodeForces</span>}
                name="CodeForces"
              />
            </Grid>

            {/* ----------------Leetcode---------------- */}
            <Grid item xs={10} sm={5}>
              <TextField
                fullWidth
                id="Leetcode"
                label={<span style={Styles.content3}>Leetcode</span>}
                name="Leetcode"
              />
            </Grid>

            {/* ----------------Portfolio---------------- */}
            <Grid item xs={10} sm={5}>
              <TextField
                fullWidth
                id="Portfolio"
                label={<span style={Styles.content3}>Portfolio</span>}
                name="Portfolio"
              />
            </Grid>

            {/* <Grid item xs={12} alignItems="center">
              <Button variant="contained">Save</Button>
            </Grid> */}
          </Grid>
        </Grid>

        {/* Right Bar */}
      </Grid>
    </div>
  );
};

export default EditInfo;
