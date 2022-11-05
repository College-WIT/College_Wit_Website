import React, { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Modal,
  Box,
} from "@mui/material";
const buttons = { margin: "8px 0", backgroundColor: "#00ABF3" };
const text = { padding: 2 };
const paperStyle = { padding: 20, width: 600, margin: "0 auto" };

var modalText = "Modal Open";
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

const Forgotpswd = () => {
  const form = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.data);

  //// Modal Code
  const [open, setOpen] = useState(false);
  const [lastpage, setLastpage] = useState("/otp");
  const [message, setMessage] = useState("Proceed");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigation = () => {
    if (lastpage === "/otp") {
      window.location.reload();
    } else {
      navigate(lastpage);
    }
  };

  const OtpVer = async (e) => {
    e.preventDefault();

    if (form.current.OTP.value === location.state.data.otp) {
      const newstate = {
        email: location.state.data.email,
        password: form.current.password.value,
      };
      await axios
        .post(
          "https://rcoem-overflow-backend.herokuapp.com/update_password",
          newstate
        )
        .then((response) => {
          console.log("Changed Password Successfully");
          modalText = "Changed Password Successfully";
          setLastpage("/login");
          setMessage("Proceed");
          console.log(response);
        })
        .catch((error) => {
          modalText = "Error retrieving data";
          setLastpage("/otp");
          setMessage("Try Again");
          console.log(error.response);
        });
    } else {
      modalText = "Wrong OTP";
      setLastpage("/otp");
      setMessage("Try Again");
      console.log("error otp");
    }
    handleOpen();
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalText}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* <Link
                style={{ textDecoration: "None", color: "white" }}
                to={lastpage}
              > */}
            <Button
              onClick={navigation}
              style={buttons}
              variant="contained"
              color="primary"
            >
              {message}
            </Button>
            {/* </Link> */}
          </Typography>
        </Box>
      </Modal>
    </Grid>
  );
};

export default Forgotpswd;
