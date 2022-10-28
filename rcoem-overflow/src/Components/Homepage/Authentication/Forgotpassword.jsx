import React from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
// import { Link } from "react-router-dom";

const buttons = { margin: "8px", backgroundColor: "#4B9CD3", color: "#000" };
const text = { padding: 2, margin: "5px 0" };
const paperStyle = {
  padding: 20,
  width: "50%",
  margin: "0 auto",
  height: "auto",
  // boxShadow: "1px 0px 0px 0px black",
};

const Forgotpassword = () => {
  return (
    <Grid
      container
      sx={{
        padding: "20px",
        height: "auto",
        justifyContent: "center",
      }}
    >
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2>Reset Password</h2>
        </Grid>
        <form>
          <TextField
            style={text}
            name="email"
            // value={email}
            fullWidth
            label="Email"
            placeholder="Enter your email"
          />
          <TextField
            style={text}
            type="OTP"
            name="OTP"
            // value={OTP}
            fullWidth
            label="OTP"
            placeholder="Enter OTP "
          />
          <Button
            style={buttons}
            type="submit"
            variant="contained"
            color="primary"
          >
            Send OTP
          </Button>
        </form>

        {/* <Link to={`/login`}>
          <Button
            style={buttons}
            type="submit"
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </Link> */}
      </Paper>
    </Grid>
  );
};

export default Forgotpassword;
