import React, { useRef } from "react";
import { styled } from "@mui/material/styles";
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

import axios from "axios";
import { useNavigate } from "react-router-dom";
import getCookie from "../../hooks/getCookie";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";


const buttons = {
  height: 40,
  margin: "5px",
  backgroundColor: "#E26639",
  fontSize: 15,
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
const tags = ["C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS"];

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
  const theme = useTheme();
  const [tag, setTag] = React.useState([]);

  const form = useRef();

  const PostQuest = (e) => {
    e.preventDefault();
    console.log("FORM DATA");
    console.log(form.current);
    var form_data = {
      email: JSON.parse(getCookie("login")).email,
      password: JSON.parse(getCookie("login")).password,
      question: form.current.question.value,
      tags: form.current.tags.value
    }
    console.log(form_data);
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
                  <h2>Post a Question</h2>
                </Grid>
                <form ref={form} onSubmit={PostQuest}
                // onSubmit={this.submitHandler}
                >
                  <TextField
                    multiline
                    rows={6}
                    label="Question"
                    type="text"
                    name="question"
                    // value={question}
                    placeholder="Question"
                    // onChange={this.changeHandler}
                    fullWidth
                    required
                  />
                  <Box sx={{ my: 3 }}>
                    <InputLabel id="demo-multiple-chip-label">
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
                      style={buttons}
                      type="submit"
                      variant="contained"
                      color="primary"
                      //   onClick={this.onClick}
                    >
                      Post
                    </Button>
                    <Button
                      style={buttons}
                      type="submit"
                      variant="contained"
                      color="primary"
                      //   onClick={this.onClick}
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
        </Grid>
      </Box>
    </div>
  );
};

export default PostQuestions;
