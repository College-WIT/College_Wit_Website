import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Modal,
  Box,
  Link,
} from "@mui/material";
import React, { Component, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getCookie from "../../hooks/getCookie";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";

// const { writeJson } = require("./writeJson");

const buttons = {
  height: 40,
  margin: "5px",
  backgroundColor: "#E26639",
  fontSize: 15,
};

const paperStyle = { padding: 40 };
var flag = false;

var rp = localStorage.getItem("RecentPage");
console.log(rp);

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

class postans extends Component {
  constructor(props) {
    super(props);
    //console.log(this.props.qq);
    // var quest=this.props.qq;

    this.state = {
      email: JSON.parse(getCookie("login")).email,
      password: JSON.parse(getCookie("login")).password,
      question: this.props.qq,
      answer: "",
      lastpage: "/Answered",
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
        navigate("/Answered");
      } else {
        navigate("/login");
      }
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    // var username = this.state.username;
    // var newusername = "";
    // for (var i = 0; i < username.length; i++) {
    //   if (username.charAt(i) === "@") {
    //     break;
    //   }
    //   var chars = username.charAt(i);
    //   newusername += chars;
    // }
    var newstate = {
      email: this.state.email,
      password: this.state.password,
      question: this.state.question,
      answer: this.state.answer,
    };
    console.log(newstate);
    axios
      .post("https://rcoem-overflow-backend.herokuapp.com/add_answer", newstate)
      .then((response) => {
        flag = true;
        console.log("Answered added Successfully");
        modalText = "Answered added Successfully";
        this.setState({ openModal: true });
      })
      .catch((error) => {
        flag = false;
        modalText = "Error Adding Answer";
        this.state.message = "TRY AGAIN";
        this.state.lastpage = "/Post-an-answer";
        this.setState({ openModal: true });
        console.log(error.response);
      });
  };
  onClick(event) {
    this.submitHandler();
    this.onClickButton();
  }

  render(props) {
    const { answer } = this.state;

    return (
      <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 2 }}>
        <Grid container spacing={2}>
          {/* ----------------------------QUICK ACCESS------------------------------ */}

          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Leftbar />
          </Grid>

          {/* ------------------------------------Answers------------------------------------- */}

          <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
            <Grid>
              <Paper style={paperStyle}>
                <Grid align="center">
                  <h2>Post an Answer</h2>
                </Grid>
                <Grid sx={{ paddingTop: "20px" }}>
                  <h4>{this.props.qq}</h4>
                </Grid>
                <Grid align="center">
                  <h2>{this.getQues}</h2>
                </Grid>

                <form onSubmit={this.submitHandler}>
                  {/* <TextField multiline rows={6} label='Question' value={question} placeholder='Enter Question' type='text' onChange={ this.changeHandler } fullWidth required /> */}
                  <TextField
                    multiline
                    rows={15}
                    label="Answer"
                    type="text"
                    name="answer"
                    value={answer}
                    placeholder="Answer"
                    onChange={this.changeHandler}
                    fullWidth
                    required
                  />
                  {/* <Grid alig sx={{ padding: 1, alignContent: 'center' }}> <input type="text" name="username" value={username} placeholder="Username" onChange={ this.changeHandler } />
                                        <input type="text" name="password" value={password} placeholder="Password" onChange={ this.changeHandler } /></Grid> */}
                  <Grid>
                    {" "}
                    <Button
                      style={buttons}
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={this.onClick}
                    >
                      Post Answer
                    </Button>
                   
                  </Grid>
                </form>
                {/* {flag ? <h2>Question added Successfully</h2> : <h2></h2>} */}
              </Paper>
              <Modal
                open={this.state.openModal}
                onClose={this.onCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {modalText}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <Link
                      style={{ textDecoration: "None", color: "white" }}
                      href={this.state.lastpage}
                    >
                      <Button
                        style={buttons}
                        variant="contained"
                        color="primary"
                      >
                        {this.state.message}
                      </Button>
                    </Link>
                  </Typography>
                </Box>
              </Modal>
            </Grid>
          </Grid>

          {/* --------------------------------TAGS SECTION--------------------------------------------*/}

          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Rightbar />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default postans;
