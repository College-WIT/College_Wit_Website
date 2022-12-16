import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Modal,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box,
  useTheme,
  OutlinedInput,
  Chip,
} from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import setCookie from "../../../hooks/setCookie";
import getCookie from "../../../hooks/getCookie";
import removeCookie from "../../../hooks/removeCookie";

const headerStyle = {
  marginBottom: "10px",
  fontFamily: "Josefin Sans, sans-serif",
};
const paperStyle = {
  p: 2,
  width: "50%",
  m: "0 auto",
  height: "auto",
};

const buttons = { margin: "8px", backgroundColor: "#4B9CD3", color: "#fff" };

var modalText = "Proceed";
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
  const navigate = useNavigate();

  ///// check Login 
  const loggedin = getCookie("login");
  const NavigateLogin = () => {
    console.log("Func called");
    if (!loggedin) {
      navigate("/login");
    }
  }
  useEffect(() => {
    NavigateLogin();
  }, []);



  const form = useRef();
  const [open, setOpen] = useState(false);
  const [lastpage, setLastpage] = useState("/be-a-contributor");
  const [message, setMessage] = useState("Proceed");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigation = () => {
    if (lastpage === "/be-a-contributor") {
      window.location.reload();
    } else {
      navigate(lastpage);
    }
  };

  const label = {
    fontFamily: "Josefin Sans, sans-serif",
  };

  const semesterarr = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "Passout",
  ];
  const brancharr = [
    "CSE A",
    "CSE B",
    "CSE AIML",
    "CSE DS",
    "CSE Cyber",
    "ECE",
    "IT",
    "Industrial",
    "Mechanical",
    "Electrical",
    "Biomedical",
    "Civil",
    "Others",
  ];
  const genderarr = ["male", "female", "not-to-say"];

  const [semester, setSemester] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [branch, setBranch] = React.useState("");
  const theme = useTheme();
  const [skill, setSkill] = React.useState([]);

  const sem = (event) => {
    setSemester(event.target.value);
  };
  const Branch = (event) => {
    setBranch(event.target.value);
  };
  const Gender = (event) => {
    setGender(event.target.value);
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
    console.log(branch);
    var form_data = {
      email: JSON.parse(getCookie("login")).email,
      gender: "male",
      college: "RCOEM",
      semester: semesterarr[semester - 1],
      branch: brancharr[branch - 1],
      linkedin_url: form.current.linkedin.value,
      github_url: form.current.github.value,
      codechef_url: form.current.codechef.value,
      codeforces_url: form.current.codeforces.value,
      leetcode_url: form.current.leetcode.value,
      other_url: form.current.personal.value,
      company: form.current.companyname.value,
      position: form.current.position.value,
      skills: form.current.skills.value,
    };
    console.log(form_data);
    await axios
      .post(
        "https://cw-backend.vercel.app/register_contributor",
        form_data
      )
      .then((response) => {
        const cookieState = {
          email: JSON.parse(getCookie("login")).email,
          password: JSON.parse(getCookie("login")).password,
          contributor: true,
        };
        removeCookie("login");
        setCookie("login", JSON.stringify(cookieState));
        modalText = "User Data Added Successfully";
        setLastpage("/Contributors");
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
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          py: 10,
          height: "auto",
        }}
      >
        <Paper sx={paperStyle}>
          <Grid align="center">
            <h2 style={headerStyle}>
              <VolunteerActivismIcon sx={{ fontSize: "40px", mr: "10px" }} />
              Contribute
            </h2>
            <Typography
              variant="caption"
              gutterBottom
              fontFamily="Josefin Sans, sans-serif"
            >
              Please fill this form to register as a Contributor !
            </Typography>
          </Grid>
          <FormControl sx={{ marginBottom: 1, minWidth: 300 }}>
            <InputLabel
              sx={{ fontFamily: " Josefin Sans, sans-serif" }}
              id="demo-simple-select-label"
            >
              Branch*
            </InputLabel>
            <Select
              name="branch"
              value={branch}
              label={
                <Typography
                  variant="caption"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  Branch
                </Typography>
              }
              fullWidth
              fontFamily="Josefin Sans, sans-serif"
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
          <FormControl sx={{ m: 0, minWidth: 300 }}>
            <InputLabel
              sx={{ fontFamily: " Josefin Sans, sans-serif" }}
              id="demo-simple-select-helper-label"
            >
              Semester*
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              name="semester"
              fontFamily="Josefin Sans, sans-serif"
              value={semester}
              label={
                <Typography
                  variant="caption"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  Semester
                </Typography>
              }
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

          <form ref={form} onSubmit={RegisterContributor}>
            {/* <FormControl sx={{ m: 1, minWidth: 300 }}>
              <InputLabel id="demo-simple-select-helper-label">
                Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                name="gender"
                fontFamily="Josefin Sans, sans-serif"
                value={gender}
                label="gender"
                onChange={Gender}
              >
                <MenuItem value={1} fontFamily="Josefin Sans, sans-serif">
                  Male
                </MenuItem>
                <MenuItem value={2} fontFamily="Josefin Sans, sans-serif">
                  Female
                </MenuItem>
                <MenuItem value={3} fontFamily="Josefin Sans, sans-serif">
                  Not To Say
                </MenuItem>
              </Select>
            </FormControl> */}

            <TextField
              style={text}
              name="linkedin"
              required
              fullWidth
              fontFamily="Josefin Sans, sans-serif"
              label={
                <Typography
                  variant="caption"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  Enter your LinkedIn url
                </Typography>
              }
            />
            <TextField
              style={text}
              name="github"
              required
              fullWidth
              fontFamily="Josefin Sans, sans-serif"
              label={
                <Typography
                  variant="caption"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  Enter your Github url
                </Typography>
              }
            />
            <FormControl sx={{ mt: 1 }} fullWidth>
              <InputLabel
                id="demo-multiple-chip-label"
                sx={{ fontFamily: " Josefin Sans, sans-serif" }}
              >
                Skills*
              </InputLabel>
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
            <TextField
              style={text}
              name="codechef"
              // required
              fullWidth
              fontFamily="Josefin Sans, sans-serif"
              label={
                <Typography
                  variant="caption"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  Enter your Codechef url (optional)
                </Typography>
              }
            />
            <TextField
              style={text}
              name="codeforces"
              // required
              fullWidth
              fontFamily="Josefin Sans, sans-serif"
              label={
                <Typography
                  variant="caption"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  Enter your CodeForces url (optional)
                </Typography>
              }
            />
            <TextField
              style={text}
              name="leetcode"
              fontFamily="Josefin Sans, sans-serif"
              fullWidth
              label={
                <Typography
                  variant="caption"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  Enter your Leetcode url (optional)
                </Typography>
              }
            />
            <TextField
              style={text}
              name="personal"
              fullWidth
              fontFamily="Josefin Sans, sans-serif"
              label={
                <Typography
                  variant="caption"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  Any other url (optional)
                </Typography>
              }
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


            <Typography m="10px" fontFamily="Josefin Sans, sans-serif">
              A College Passout? Enter your current Job details (optional)<br />
            </Typography>
            <TextField
              style={text}
              name="companyname"
              fontFamily="Josefin Sans, sans-serif"
              // required
              width="400px"
              multiline
              label={
                <Typography
                  variant="caption"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  Company Name
                </Typography>
              }
            />
            <TextField
              style={text}
              name="position"
              fontFamily="Josefin Sans, sans-serif"
              // required
              width="400px"
              multiline
              label={
                <Typography
                  variant="caption"
                  fontFamily="Josefin Sans, sans-serif"
                >
                  Position
                </Typography>
              }
            />

            <br />
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
};

export default Contributorform;
