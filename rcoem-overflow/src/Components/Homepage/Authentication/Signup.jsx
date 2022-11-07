import React, { useRef } from "react";
import { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const buttons = { margin: "8px", backgroundColor: "#1D3557" };
const text = { padding: 2, margin: "3px 0" };
const paperStyle = {
  height: "auto",
  padding: 40,
  width: 500,
  margin: "10px",
  // boxShadow: "1px 0px 0px 0px black",
};
const headerStyle = { margin: 0 };

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

function Signup() {
  const form = useRef();
  const navigate = useNavigate();

  //// Modal Code
  const [open, setOpen] = useState(false);
  const [lastpage, setLastpage] = useState("/signup");
  const [message, setMessage] = useState("Proceed");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigation = () => {
    if (lastpage === "/signup") {
      window.location.reload();
    } else {
      navigate(lastpage);
    }
  };

  // Register Function
  const RegisterUser = async (e) => {
    e.preventDefault();
    console.log("FORM DATA");
    var cpassword = form.current.confirm.value;
    var password = form.current.password.value;
    var form_data = {
      name: form.current.name.value,
      user_name: form.current.username.value,
      email: form.current.email.value,
      password: form.current.password.value,
    };
    console.log(form_data);

    if (password === cpassword) {
      await axios
        .post(
          "https://rcoem-overflow-backend.herokuapp.com/register",
          form_data
        )
        .then((response) => {
          console.log(response);
          modalText = "Registered Successfully";
          setLastpage("/login");
          setMessage("Proceed");
        })
        .catch((error) => {
          modalText = error.response.data;
          setLastpage("/signup");
          setMessage("Try Again");
          console.log(error);
        });
    } else {
      modalText = "Password Mismatched";
      setLastpage("/signup");
      setMessage("Try Again");
      console.log("Password Mismatched");
    }
    handleOpen();
  };

  return (
    <div style={{height:"100vh"}}>
    <Grid
      container
      sx={{
        padding: "20px",
        height: "auto",
        justifyContent: "center",
        
      }}
    >
      <Paper style={paperStyle}>
        <Grid align="center" sx={{ mb: 3 }}>
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

        {/* <Link to="/be-a-contributor">
          <Button
            onClick={RegisterUserAndNav}
            style={buttons}
            variant="contained"
            color="primary"
          >
            Sign Up and Be a Contributor
          </Button>
        </Link> */}
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
    </div>
  );
}

export default Signup;
