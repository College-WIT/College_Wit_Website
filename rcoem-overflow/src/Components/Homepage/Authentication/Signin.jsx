import React, { Component, useEffect } from "react";
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
import { ButtonGroup } from "@mui/material";
import setCookie from "../../../hooks/setCookie";
import getCookie from "../../../hooks/getCookie";
import removeCookie from "../../../hooks/removeCookie";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const buttons = { margin: "8px 0", backgroundColor: "#E26639" };
const text = { padding: 2 };
var modalText;
const paperStyle = {
  padding: 40,
  height: "500px",
  width: "40%",
  margin: "10px",
  boxShadow: "0px 0px 2px 0px rgba(0,0,0,0.75)",
};

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
  width: 200,
  margin: "5px",
  backgroundColor: "#4B9CD3",
  fontSize: 13,
  color: "#000",
  "&:hover": {
    border: "1px solid white",
    backgroundColor: "#E26639",
  },
};
class Signin extends Component {
  constructor(props) {
    super(props);
    //console.log("constructor");
    this.state = {
      email: "",
      password: "",
      lastpage: "/Questions",
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
        navigate("/Questions");
      } else {
        navigate("/login");
      }
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const newstate = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(newstate);
    axios
      .post("https://rcoem-overflow-backend.herokuapp.com/login", newstate)
      .then((response) => {
        console.log(response);
        console.log("LOGGED IN");
        modalText = "Logged In Successfully !!";
        console.log(modalText);
        removeCookie("login");
        setCookie("login", JSON.stringify(newstate));

        this.setState({ openModal: true });
        //this.navigation();
      })
      .catch((error) => {
        modalText = error.response.data;
        this.state.lastpage = "/login";
        this.state.message = "TRY AGAIN";
        this.setState({ openModal: true });
      });
    e.preventDefault();
  };

  onClick(event) {
    this.submitHandler();
    this.onClickButton();
  }

  render() {
    const { email, password } = this.state;
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
          <Grid align="center" marginBottom="40px">
            <h2>Sign In</h2>
          </Grid>
          <form onSubmit={this.submitHandler}>
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
              type="password"
              name="password"
              value={password}
              fullWidth
              label="Password"
              placeholder="Enter your password"
              onChange={this.changeHandler}
            />
            <Button
              style={buttons}
              type="submit"
              variant="contained"
              color="primary"
              onClick={this.onClick}
            >
              Login
            </Button>
          </form>
          {/*<Button style={buttons} type='submit' variant='contained' color='primary' onClick={this.onClickButton}>Login</Button>*/}{" "}
          <Grid container justifyContent="center">
            <ButtonGroup
              sx={{
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
                mt: "100px",
              }}
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Link
                style={{ textDecoration: "None", color: "white" }}
                to={`/forgotpassword`}
              >
                <Button sx={btn}>Forgot Password</Button>
              </Link>

              <Link
                style={{ textDecoration: "None", color: "white" }}
                to={`/signup`}
              >
                <Button sx={btn}>New User? Sign Up</Button>
              </Link>
            </ButtonGroup>
          </Grid>
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
                to={this.state.lastpage}
                style={{ textDecoration: "None", color: "white" }}
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

export default Signin;
