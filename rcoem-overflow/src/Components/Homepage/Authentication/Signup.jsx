import React, { Component, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Modal,
  Box,
  Link,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import getCookie from "../../../hooks/getCookie";
//import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const buttons = { margin: "8px 0", backgroundColor: "#E26639" };
const text = { padding: 2 };
const paperStyle = { padding: 20, width: 600, margin: "0 auto" };
const headerStyle = { margin: 0 };

var modalText;
//const paperStyle = { padding: 40, height: '60vh', width: 400, margin: "10px" }

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

class Signup extends Component {
  constructor(props) {
    super(props);
    //console.log("constructor");
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
      lastpage: "/login",
      message: "PROCEED",
    };
  }

  state = {
    openModal: false,
  };

  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  changeHandler = (event) => {
    console.log("change handler");
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  navigation = () => {
    const navigate = useNavigate();
    //navigate('/Answered');
    useEffect(() => {
      let login = getCookie("login");
      if (login) {
        navigate("/Profile");
      } else {
        navigate("/login");
      }
    });
  };

  submitHandler = (e) => {
    if (this.state.confirm == this.state.password) {
      e.preventDefault();
      const newstate = {
        name: this.state.name,
        user_name: this.state.username,
        email: this.state.email,
        password: this.state.password,
      };
      console.log(newstate);
      axios
        .post("https://rcoem-overflow-backend.herokuapp.com/register", newstate)
        .then((response) => {
          console.log(response);
          //alert("User Registered Successfully");
          modalText = "User Registered Successfully";
          this.setState({ openModal: true });
        })
        .catch((error) => {
          console.log(error.response);
          if (error.response.data == "INVALID SERIALIZED DATA") {
            //alert("Invalid Email");
            modalText = "Invalid Data";
            this.state.message = "TRY AGAIN";
            this.state.lastpage = "/signup";
            this.setState({ openModal: true });
          }
          //alert(error.response.data);
          modalText = "Invalid Data";
          this.state.message = "TRY AGAIN";
          this.state.lastpage = "/signup";
          this.setState({ openModal: true });
        });
    } else {
      //alert("Password Mismastched");
      modalText = "Password Mismastched";
      this.state.message = "TRY AGAIN";
      this.state.lastpage = "/signup";
      this.setState({ openModal: true });
    }
  };
  onClick(event) {
    this.submitHandler();
    this.onClickButton();
  }

  render() {
    const { name, username, email, password, confirm } = this.state;
    return (
      <Grid
        sx={{
          padding: 5,
          height: 800,
        }}
      >
        <Paper style={paperStyle}>
          <Grid align="center">
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form onSubmit={this.submitHandler}>
            <TextField
              style={text}
              name="name"
              value={name}
              fullWidth
              label="Name"
              placeholder="Enter your name"
              onChange={this.changeHandler}
            />
            <TextField
              style={text}
              name="username"
              value={username}
              fullWidth
              label="Username"
              placeholder="Enter your Username"
              onChange={this.changeHandler}
            />
            <TextField
              style={text}
              name="email"
              value={email}
              fullWidth
              label="Email"
              placeholder="Enter your email"
              onChange={this.changeHandler}
            />
            <TextField
              style={text}
              name="password"
              type="password"
              value={password}
              fullWidth
              label="Password"
              placeholder="Enter your password"
              onChange={this.changeHandler}
            />
            <TextField
              style={text}
              name="confirm"
              type="password"
              value={confirm}
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              onChange={this.changeHandler}
            />

            <Button
              style={buttons}
              type="submit"
              variant="contained"
              color="primary"
              onClick={this.onClick}
            >
              Sign up
            </Button>
            {/* <Snackbar
                            open={open}
                            autoHideDuration={6000}
                            onClose={handleClose}
                            message="Note archived"
                            action={action}
                        /> */}
          </form>
          <Typography>
            <Link to={"/login"}>Already Registered ? Login</Link>
          </Typography>
        </Paper>
        <Modal
          open={this.state.openModal}
          onClose={this.onCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalText}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Link
                style={{ textDecoration: "None", color: "white" }}
                href={this.state.lastpage}
              >
                <Button style={buttons} variant="contained" color="primary">
                  {this.state.message}
                </Button>
              </Link>
            </Typography>
          </Box>
        </Modal>
      </Grid>
    );
  }
}

export default Signup;
