import React, { useRef } from "react";
import { useState } from "react";
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

import axios from "axios";
import { useNavigate } from "react-router-dom";
import getCookie from "../../hooks/getCookie";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";

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
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const tags = [
  "ANDROID-DEVELOPMENT",
  "COLLEGE-LIFE",
  "COMPETITIVE-PROGRAMMING",
  "CSS",
  "DJANGO",
  "FLUTTER",
  "HTML",
  "JAVASCRIPT",
  "NODE-JS",
  "OPEN-SOURCE",
  "OTHERS",
  "PYQ",
  "REACT-JS",
  "WEB-DEVELOPMENT",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const paperStyle = { padding: 40 };

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

const PostQuestions = () => {
  //// Modal Code
  const [open, setOpen] = useState(false);
  const [lastpage, setLastpage] = useState("/Post-a-question");
  const [message, setMessage] = useState("Proceed");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigation = () => {
    if (lastpage === "/Post-a-question") {
      window.location.reload();
    } else {
      navigate(lastpage);
    }
  };

  const theme = useTheme();
  const [tag, setTag] = React.useState([]);
  const navigate = useNavigate();
  const form = useRef();

  const PostQuest = async (e) => {
    //navigate('/Answered');
    e.preventDefault();
    console.log("FORM DATA");
    let login = getCookie("login");
    if (login) {
      var form_data = {
        email: JSON.parse(getCookie("login")).email,
        password: JSON.parse(getCookie("login")).password,
        question: form.current.question.value,
        tags: form.current.tags.value,
        anonymous: "False",
      };
      console.log(form_data);
      await axios
        .post(
          "https://rcoem-overflow-backend.herokuapp.com/add_question",
          form_data
        )
        .then((response) => {
          modalText = "Question Added Successfully";
          setLastpage("/Unanswered");
          setMessage("Proceed");
          console.log(response.data);
        })
        .catch((error) => {
          //console.log(error.response.data);
          modalText = error.response.data;
          setLastpage("/Post-a-question");
          setMessage("Try Again");
          console.log(error);
        });

      handleOpen();
    } else {
      navigate("/login");
    }
  };

  const PostQuestAno = async (e) => {
    // const navigate = useNavigate();
    e.preventDefault();
    console.log("FORM DATA");
    console.log(form.current);
    var form_data = {
      email: JSON.parse(getCookie("login")).email,
      password: JSON.parse(getCookie("login")).password,
      question: form.current.question.value,
      tags: form.current.tags.value,
      anonymous: "True",
    };
    console.log(form_data);
    await axios
      .post(
        "https://rcoem-overflow-backend.herokuapp.com/add_question",
        form_data
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
    navigate("/Unanswered");
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTag(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 2 }}>
        <Grid container spacing={2}>
          {/* ----------------------------QUICK ACCESS------------------------------ */}

          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Leftbar />
          </Grid>
          {/* ------------------------------------Questions------------------------------------- */}

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
                    Post an Question
                  </Typography>
                </Grid>
                <form
                  ref={form}
                  onSubmit={PostQuest}
                  // onSubmit={this.submitHandler}
                >
                  <TextField
                    multiline
                    rows={6}
                    label={
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "100",
                          fontFamily: "Josefin Sans, sans-serif",
                        }}
                      >
                        Question
                      </Typography>
                    }
                    type="text"
                    name="question"
                    fullWidth
                    required
                  />
                  <Box sx={{ my: 3 }}>
                    <InputLabel
                      id="demo-multiple-chip-label"
                      sx={{
                        fontSize: "20px",
                        fontWeight: "300",
                        fontFamily: "Josefin Sans, sans-serif",
                        color: "#000",
                      }}
                    >
                      Add Tags
                    </InputLabel>
                    <Select
                      name="tags"
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      fullWidth
                      value={tag}
                      onChange={handleChange}
                      input={
                        <OutlinedInput id="select-multiple-chip" label="tags" />
                      }
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {tags.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, tag, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Grid>
                    <Button
                      name="button1"
                      id="1"
                      sx={buttons}
                      type="submit"
                      variant="outlined"
                      //   onClick={this.onClick}
                    >
                      Post
                    </Button>
                    <Button
                      name="button2"
                      id="2"
                      sx={buttons}
                      // type="submit"
                      variant="outlined"
                      onClick={PostQuestAno}
                    >
                      Post Anonymously
                    </Button>
                  </Grid>
                </form>
              </Paper>
              <Modal
                // open={this.state.openModal}
                // onClose={this.onCloseModal}
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
                      //   href={this.state.lastpage}
                    >
                      <Button
                        style={buttons}
                        variant="contained"
                        color="primary"
                      >
                        {/* {this.state.message} */}
                      </Button>
                    </Link>
                  </Typography>
                </Box>
              </Modal>
            </Grid>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
            <Rightbar />
          </Grid>

          {/* /// MOdal Code HTML */}
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
      </Box>
    </div>
  );
};

export default PostQuestions;
