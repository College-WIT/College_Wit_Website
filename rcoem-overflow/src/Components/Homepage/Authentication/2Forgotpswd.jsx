import React from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";
// import { Link } from "react-router-dom";

const buttons = { margin: "8px", backgroundColor: "#4B9CD3", color: "#000" };
const text = { padding: 2, margin: "5px 0" };
const paperStyle = {
  padding: 20,
  width: "35%",
  margin: "0 auto",
  height: "auto",
  // boxShadow: "1px 0px 0px 0px black",
};

const Forgotpswd = () => {
  return (
    <Grid
      sx={{
        padding: "5%",
      }}
    >
      <Paper style={paperStyle}>
        <Grid align="center" sx={{ marginBottom: "50px" }}>
          <h3>Enter OTP</h3>
        </Grid>
        <form>
          <TextField
            style={text}
            name="OTP"
            fullWidth
            label="OTP"
            placeholder="Enter OTP"
          />

          <Button
            style={buttons}
            type="submit"
            variant="contained"
            color="primary"
            value="Send"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Forgotpswd;
