import React, { useRef } from "react";
import { useNavigate } from "react-router";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import Chip from "@mui/material/Chip";

const buttons = { margin: "8px 0", backgroundColor: "#00ABF3" };
const text = { padding: 2, margin: "5px 0" };
const paperStyle = {
  padding: 20,
  width: "50%",
  margin: "0 auto",
  height: "auto",
  // boxShadow: "1px 0px 0px 0px black",
};
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

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

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Signup() {
  const [semester, setSemester] = React.useState("");
  const [branch, setBranch] = React.useState("");
  const [expanded, setExpanded] = React.useState("panel1");
  const theme = useTheme();
  const [skill, setSkill] = React.useState([]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
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

  const headerStyle = { margin: 0 };
  return (
    <Grid
      sx={{
        py: 10,
        height: "auto",
      }}
    >
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form>
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

          {/* <Button
            style={buttons}
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button> */}
        </form>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Want to be Contributor</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <form>
              <TextField
                style={text}
                name="LinkedIn"
                required
                fullWidth
                label="LinkedIn url"
                placeholder="Enter your LinkedIn URL"
              />
              <TextField
                style={text}
                name="Github"
                required
                fullWidth
                label="Github url"
                placeholder="Enter your Github URL"
              />
              <TextField
                style={text}
                name="CodeChef"
                // required
                fullWidth
                label="CodeChef Profile url"
                placeholder="Enter your CodeChef account URL"
              />
              <TextField
                style={text}
                name="CodeForces"
                // required
                fullWidth
                label="CodeForces Profile url"
                placeholder="Enter your CodeForces account URL"
              />
              <TextField
                style={text}
                name="HackerRank"
                fullWidth
                label="HackerRank Profile url"
                placeholder="Enter your HackerRank account URL"
              />
              <Typography m="10px">
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
              />
              <FormControl sx={{ m: 1, minWidth: 400 }}>
                <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                <Select value={branch} label="Branch" onChange={Branch}>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>CSE A</MenuItem>
                  <MenuItem value={2}>CSE B</MenuItem>
                  <MenuItem value={3}>CSE C</MenuItem>
                  <MenuItem value={4}>CSE D</MenuItem>
                  <MenuItem value={5}>CSE E</MenuItem>
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
              <FormControl sx={{ m: 1 }} fullWidth>
                <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
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
            </form>
          </AccordionDetails>
        </Accordion>
        <Button
          style={buttons}
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign up
        </Button>
      </Paper>
    </Grid>
  );
}

export default Signup;
