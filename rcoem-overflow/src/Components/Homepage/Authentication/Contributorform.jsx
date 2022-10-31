import React, { useRef } from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
// import { useNavigate } from "react-router";
import { Grid, Paper, TextField, Button, Typography, Modal } from "@mui/material";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import setCookie from "../../../hooks/setCookie";
import getCookie from "../../../hooks/getCookie";
import removeCookie from "../../../hooks/removeCookie";

const headerStyle = { marginBottom: "10px" };
const paperStyle = {
  padding: 20,
  width: "50%",
  margin: "0 auto",
  height: "auto",
  // boxShadow: "1px 0px 0px 0px black",
};

const buttons = { margin: "8px", backgroundColor: "#4B9CD3", color: "#000" };

var modalText="Proceed";
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

const names = [
  "Python",
  "C++",
  "Java",
  "JavaScript",
  "C",
  "C#",
  "PHP",
  "SQL",
  "HTML",
  "CSS",
  "Web Development",
  "Android Development",
  "iOS Development",
  "Machine Learning",
  "Data Science",
  "Blockchain",
  "Cloud Computing",
  "UI/UX",
  "Game Development",
  "Ethical Hacking",
  "Competitive Programming",
  "Other",
];
const text = { padding: 2, margin: "5px 0" };
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Contributorform = () => {
  const form = useRef();
  const navigate = useNavigate();
    //// Modal Code
    const [open, setOpen] = useState(false);
    const [lastpage, setLastpage] = useState("/be-a-contributor");
    const [message, setMessage] = useState("Proceed");
      const handleOpen = () => {
          setOpen(true);
      };
      const handleClose = () => {
          setOpen(false);
      };
  
      const navigation = () =>{
        if(lastpage==="/be-a-contributor"){
            window.location.reload();
        }
        else{
          navigate(lastpage);
        }
      }


  const semesterarr=["1st","2nd","3rd","4th","5th","6th","7th","8th","Passout"];
  const brancharr=["CSE A","CSE B","CSE AIML","CSE DS","CSE Cyber","ECE","IT"];

  const [semester, setSemester] = React.useState("");
  const [branch, setBranch] = React.useState("");
  const theme = useTheme();
  const [skill, setSkill] = React.useState([]);

  const sem = (event) => {
    setSemester(event.target.value);
  };
  const Branch = (event) => {
    setBranch(event.target.value);
  };
  const Skills = (event) => {
    const {
      target: { value },
    } = event;
    setSkill(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };


    // Register Contributor Function
    const RegisterContributor = async (e) => {
      e.preventDefault();
      console.log("FORM DATA");

      var form_data = {
          "email":JSON.parse(getCookie("login")).email,
          "college": "RCOEM",
          "semester": semesterarr[(form.current.semester.value)-1],
          "branch" : brancharr[(form.current.branch.value)-1],
          "linkedin_url" : form.current.linkedin.value,
          "github_url" : form.current.github.value,
          "codechef_url" : form.current.codechef.value,
          "codeforces_url" : form.current.codeforces.value,
          "leetcode_url" : form.current.leetcode.value,
          "other_url" : form.current.personal.value,
          "company" : form.current.companyname.value,
          "position" : form.current.position.value,
          "skills": form.current.skills.value,
      };
      console.log(form_data);
      await axios
        .post("https://rcoem-overflow-backend.herokuapp.com/register_contributor",form_data)
        .then((response) => {
          const cookieState={
            email: JSON.parse(getCookie("login")).email,
            password: JSON.parse(getCookie("login")).password,
            contributor: true
          }
          removeCookie("login");
          setCookie("login", JSON.stringify(cookieState));
          modalText="User Data Added Successfully";
          setLastpage("/Top%20Contributors");
          setMessage("Proceed");
          console.log(response);
        })
        .catch((error) => {
          modalText = "Error Adding Data";
          setLastpage("/be-a-contributor");
          setMessage("Try Again");
          console.log(error);
        });
        handleOpen();
    };

  return (
    <div>
      <Grid
        sx={{
          py: 10,
          height: "auto",
        }}
      >
        <Paper style={paperStyle}>
          <Grid align="center">
            <h2 style={headerStyle}>
              <VolunteerActivismIcon sx={{ fontSize: "40px", mr: "10px" }} />
              Contribute
            </h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to register as a Contributor !
            </Typography>
          </Grid>

          <form ref={form} onSubmit={RegisterContributor}>
            <TextField
              style={text}
              name="linkedin"
              required
              fullWidth
              label="LinkedIn url"
              placeholder="Enter your LinkedIn URL"
            />
            <TextField
              style={text}
              name="github"
              required
              fullWidth
              label="Github url"
              placeholder="Enter your Github URL"
            />
            <TextField
              style={text}
              name="codechef"
              // required
              fullWidth
              label="CodeChef Profile url"
              placeholder="Enter your CodeChef account URL"
            />
            <TextField
              style={text}
              name="codeforces"
              // required
              fullWidth
              label="CodeForces Profile url"
              placeholder="Enter your CodeForces account URL"
            />
            <TextField
              style={text}
              name="leetcode"
              fullWidth
              label="Leetcode Profile url"
              placeholder="Enter your Leetcode account URL"
            />
            <TextField
              style={text}
              name="personal"
              fullWidth
              label="Personal Portfolio url"
              placeholder="Enter your Personal URL"
            />
            {/* <Typography m="10px">
              Bio (max 200 words) <br />
            </Typography>
            <TextField
              style={text}
              name="about"
              required
              fullWidth
              multiline
              label="About yourself"
              rows={4}
              placeholder="Enter your details"
            /> */}
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-simple-select-label">Branch</InputLabel>
              <Select
                name="branch"
                value={branch}
                label="Branch"
                onChange={Branch}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>CSE A</MenuItem>
                <MenuItem value={2}>CSE B</MenuItem>
                <MenuItem value={3}>CSE AIML</MenuItem>
                <MenuItem value={4}>CSE DS</MenuItem>
                <MenuItem value={5}>CSE Cyber</MenuItem>
                <MenuItem value={6}>ECE</MenuItem>
                <MenuItem value={7}>IT</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Semester
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="semester"
                value={semester}
                label="Semester"
                onChange={sem}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1st</MenuItem>
                <MenuItem value={2}>2nd</MenuItem>
                <MenuItem value={3}>3rd</MenuItem>
                <MenuItem value={4}>4th</MenuItem>
                <MenuItem value={5}>5th</MenuItem>
                <MenuItem value={6}>6th</MenuItem>
                <MenuItem value={7}>7th</MenuItem>
                <MenuItem value={8}>8th</MenuItem>
                <MenuItem value={9}>Passout</MenuItem>
              </Select>
            </FormControl>

            <Typography m="10px">
              A College Passout? Enter your current Job details <br />
            </Typography>
            <TextField
              style={text}
              name="companyname"
              // required
              width="400px"
              multiline
              label="Company"
              placeholder="Company name"
            />
            <TextField
              style={text}
              name="position"
              // required
              width="400px"
              multiline
              label="Position"
              placeholder="Position"
            />
            <FormControl sx={{ mt: 1 }} fullWidth>
              <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                name="skills"
                value={skill}
                onChange={Skills}
                input={
                  <OutlinedInput id="select-multiple-chip" label="SKills" />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, skill, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              style={buttons}
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
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
                <Button onClick={navigation} style={buttons} variant="contained" color="primary">
                  {message}
                </Button>
              {/* </Link> */}
            </Typography>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
};

export default Contributorform;
