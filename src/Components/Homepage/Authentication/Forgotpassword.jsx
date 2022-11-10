import React, { useRef } from "react";
import { Grid, Paper, TextField, Button, Box } from "@mui/material";
import { useNavigate } from "react-router";
import emailjs from "@emailjs/browser";

const buttons = { margin: "8px", backgroundColor: "#4B9CD3", color: "#fff", fontFamily: "Josefin Sans, sans-serif", };
const paperStyle = {
  padding: 20,
  width: "35%",
  margin: "2%",
  height: "auto",
  // boxShadow: "1px 0px 0px 0px black",
};

const Forgotpassword = () => {
  const form = useRef();
  const navigate = useNavigate();
  const SendEmail = (e) => {
    e.preventDefault();
    var random = Math.floor(100000 + Math.random() * 900000);
    var random_str = random.toString();
    form.current.otp.value = random_str;
    console.log(form.current.otp.value);

    emailjs
      .sendForm(
        "service_04xpjpp",
        "template_cg8pwwf",
        form.current,
        "J5_BpBqDns_0imULd"
      )
      .then(
        (result) => {
          var formjson = {
            email: form.current.email.value,
            otp: form.current.otp.value,
          };
          console.log(formjson);
          console.log(result.text);

          navigate("/otp", { state: { data: formjson } });
        },
        (error) => {
          console.log(error.text);
          navigate("/forgotpassword");
        }
      );
  };

  return (
    <Box sx={{
      "@media (max-width:1000px)": {
        height: "90vh"
      }
    }}>
      <Grid
        container
        sx={{
          padding: "5%",
          height: "auto",
          justifyContent: "center",
        }}
      >
        <Paper style={paperStyle}>
          <Grid align="center" sx={{ marginBottom: "50px", fontFamily: "Josefin Sans, sans-serif", }}>
            <h2>Reset Password</h2>
          </Grid>
          <form ref={form} onSubmit={SendEmail}>
            <TextField
              name="email"
              // value={email}
              label="Email"
              placeholder="Enter your email"
              fullWidth
            />

            {/* Hidden Field */}
            <input name="otp" type="hidden" />

            <Button
              style={buttons}
              type="submit"
              variant="contained"
              color="primary"
            >
              Send OTP
            </Button>
          </form>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Forgotpassword;
