import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Grid, Paper, TextField, Button } from "@mui/material";
const buttons = { margin: "8px 0", backgroundColor: "#00ABF3" };
const text = { padding: 2 };
const paperStyle = { padding: 20, width: 600, margin: "0 auto" };


const Forgotpswd = () => {
  const form = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.data);

  const OtpVer =async (e) => {
    e.preventDefault();
    
    if (form.current.OTP.value === location.state.data.otp) {
      const newstate = {
        email: location.state.data.email,
        password: form.current.password.value,
      };
      await axios
      .post("https://rcoem-overflow-backend.herokuapp.com/update_password", newstate)
      .then(response => {
          console.log("Changed Password Successfully");
          console.log(response)
      })
      .catch(error => {
          console.log(error.response)
      })
      console.log(newstate);
    } else {
      console.log("error otp");
    }
   
  };

  return (
    <Grid
      sx={{
        padding: "5%",
      }}
    >
      <Paper style={paperStyle}>
        <Grid align="center">
          <h3>Enter OTP</h3>
        </Grid>
        <form ref={form} onSubmit={OtpVer}>
          <TextField
            style={text}
            name="password"
            fullWidth
            label="password"
            placeholder="Enter New Password"
          />
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
            Change Password
          </Button>
        </form>
      </Paper>
    </Grid>


  );
};


export default Forgotpswd;
