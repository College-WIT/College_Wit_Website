import React, { useRef } from "react";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
function Signup() {
  const form = useRef();

  // Register Function
  const RegisterUser = (e) => {
    e.preventDefault();
    console.log("FORM DATA");
    //console.log(form.current);
    console.log(form.current.skills.value);
    var form_data = {
      name: form.current.name.value,
      username: form.current.username.value,
      email: form.current.email.value,
      password: form.current.password.value,
      cpassword: form.current.confirm.value,
      contributor: {
        linkedin: form.current.linkedin.value,
        github: form.current.github.value,
        codechef: form.current.codechef.value,
        codeforces: form.current.codeforces.value,
        hackerrank: form.current.hackerrank.value,
        about: form.current.about.value,
        branch: form.current.branch.value,
        semester: form.current.semester.value,
        skills: form.current.skills.value,
      },
    };
    console.log(form_data);
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
