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

const buttons = {
  color: "#001d3d",
  width: "auto",
  height: "auto",
  px: 1,
  py: 1,
  fontWeight: "600",
  fontFamily: "Josefin Sans, sans-serif",
  borderRadius: 1,
  fontSize: "13px",
  border: "1px solid #001d3d",
  margin: "5px",

  "&:hover": {
    backgroundColor: "#118ab2",
    color: "white",
    opacity: 10,
  },
};

const paperStyle = { padding: 40 };

// eslint-disable-next-line no-unused-vars
var flag = false;

var modalText;

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
    var email = "";
    var password = "";
    let login = getCookie("login");
    if (login) {
      email = JSON.parse(getCookie("login")).email;
      password = JSON.parse(getCookie("login")).password;
    }

    this.state = {
      email: email,
      password: password,
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
    var newstate = {
      email: this.state.email,
      password: this.state.password,
      question: this.state.question,
      answer: this.state.answer,
    };
    console.log(newstate);
    axios
      .post("https://cw-backend.vercel.app/add_answer", newstate)
      .then((response) => {
        flag = true;
        console.log("Answered added Successfully");
        modalText = "Answered added Successfully";
        this.setState({ openModal: true });
      })
      .catch((error) => {
        flag = false;
        modalText = "Error Adding Answer";

        this.setState({
          openModal: true,
          message: "TRY AGAIN",
          lastpage: "/Post-an-answer",
        });
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
                  <Typography
                    sx={{
                      fontSize: "40px",
                      fontWeight: "bold",
                      fontFamily: "Josefin Sans, sans-serif",
                      color: "#000",
                      paddingTop: 5,
                    }}
                  >
                    Post an Answer
                  </Typography>
                </Grid>
                <Grid sx={{ paddingTop: "20px" }}>
                  <Typography
                    sx={{
                      fontSize: "30px",
                      fontWeight: "300px",
                      fontFamily: "Josefin Sans, sans-serif",
                      color: "#000",
                      paddingTop: 3,
                    }}
                  >
                    {this.props.qq}
                  </Typography>
                </Grid>
                <Grid align="center">
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      fontFamily: "Josefin Sans, sans-serif",
                      color: "#000",
                      paddingTop: 2,
                    }}
                  >
                    {this.getQues}
                  </Typography>
                </Grid>

                <form onSubmit={this.submitHandler}>
                  <TextField
                    multiline
                    rows={10}
                    label="Answer"
                    type="text"
                    name="answer"
                    value={answer}
                    placeholder="Answer"
                    onChange={this.changeHandler}
                    fullWidth
                    required
                  />

                  <Grid>
                    {" "}
                    <Button
                      sx={buttons}
                      type="submit"
                      variant="outlined"
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
