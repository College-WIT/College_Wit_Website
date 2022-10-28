import React, { useRef } from "react";
import { Grid, Paper, TextField, Button, Typography,Modal } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const buttons = { margin: "8px", backgroundColor: "#4B9CD3", color: "#000" };
const text = { padding: 2, margin: "5px 0" };
const paperStyle = {
  padding: 20,
  width: "50%",
  margin: "0 auto",
  height: "auto",
  // boxShadow: "1px 0px 0px 0px black",
};
const headerStyle = { margin: 0 };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const btn = {
  height: 40,
  width: 150,
  margin: "5px",
  backgroundColor: "#E26639",
  fontSize: 10,
  "&:hover": {
    border: "1px solid white",
    backgroundColor: "#E26639",
  },
};




function Signup() {
  const form = useRef();


  // Register Function
  const RegisterUser = async (e) => {
    e.preventDefault();
    console.log("FORM DATA");
    var cpassword= form.current.confirm.value;
    var password= form.current.password.value;
    var form_data = {
      name: form.current.name.value,
      user_name: form.current.username.value,
      email: form.current.email.value,
      password: form.current.password.value
      // contributor: {
      //   linkedin: form.current.linkedin.value,
      //   github: form.current.github.value,
      //   codechef: form.current.codechef.value,
      //   codeforces: form.current.codeforces.value,
      //   hackerrank: form.current.hackerrank.value,
      //   about: form.current.about.value,
      //   branch: form.current.branch.value,
      //   semester: form.current.semester.value,
      //   skills: form.current.skills.value,
      // },
    };
    console.log(form_data);
    if(password===cpassword){
    await axios
      .post("https://rcoem-overflow-backend.herokuapp.com/register",form_data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    }
    else{
      console.log("Password Mismatched");
    }
  };


  return (
    <Grid
      sx={{
        py: 10,
        height: "auto",
      }}
    >
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form ref={form} onSubmit={RegisterUser}>
          <TextField
            style={text}
            required
            name="name"
            fullWidth
            label="Name"
            placeholder="Enter your name"
          />
          <TextField
            style={text}
            required
            name="username"
            fullWidth
            label="Username"
            placeholder="Enter your Username"
          />
          <TextField
            style={text}
            required
            name="email"
            fullWidth
            label="Email"
            placeholder="Enter your email"
          />
          <TextField
            style={text}
            required
            name="password"
            type="password"
            fullWidth
            label="Password"
            placeholder="Enter your password"
          />
          <TextField
            style={text}
            required
            name="confirm"
            type="password"
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your password"
          />

          <Button
            style={buttons}
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
        </form>

        <Link to="/be-a-contributor">
          <Button
            style={buttons}
            type="submit"
            variant="contained"
            color="primary"
          >
            Be a Contributor
          </Button>
        </Link>
      </Paper>
    </Grid>
  );
}

export default Signup;
