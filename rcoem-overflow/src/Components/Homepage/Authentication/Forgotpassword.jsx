import React from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

const buttons = { margin: "8px", backgroundColor: "#4B9CD3", color: "#000" };
const text = { padding: 2, margin: "5px 0" };
const paperStyle = {
  padding: 20,
  width: "35%",
  margin: "2%",
  height: "auto",
  // boxShadow: "1px 0px 0px 0px black",
};

const Forgotpassword = () => {
  return (
    <Grid
      container
      sx={{
        padding: "5%",
        height: "auto",
        justifyContent: "center",
      }}
    >
      <Paper style={paperStyle}>
        <Grid align="center" sx={{ marginBottom: "50px" }}>
          <h2>Reset Password</h2>
        </Grid>
        <form>
          <TextField
            name="email"
            // value={email}
            label="Email"
            placeholder="Enter your email"
            fullWidth
          />

          {/* Hidden Field */}
          <input name="otp" type="hidden" />

          <Link to={`/otp`}>
            <Button
              style={buttons}
              type="submit"
              variant="contained"
              color="primary"
            >
              Send OTP
            </Button>
          </Link>
        </form>
      </Paper>
    </Grid>
  );
};

export default Forgotpassword;
