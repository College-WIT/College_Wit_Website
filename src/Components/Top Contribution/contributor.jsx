import * as React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import MediaCard from "./card";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";

import { Container } from "react-floating-action-button";
const Contributor = () => {

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    border: "1px solid #d3d3d3",
    width: "100%",
    height: "50px",
    borderRadius: "10px",
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      height: "90px",
      fontSize: "25px",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 20,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    width: "100%",
    height: "100px",

    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const header = {
    fontSize: 20,
    fontFamily: "Josefin Sans, sans-serif",
  };

  const [UserData, setUserData] = useState([]);
  const [UserData1, setUserData1] = useState([]);
  const [UserData2, setUserData2] = useState([]);
  const [UserData3, setUserData3] = useState([]);

  var getContributorData = async () => {
    console.log("Contributor DATA CALL");
    await axios
      .get("https://demo-vercel-teal.vercel.app/all_contributors")
      .then((response) => {
        console.log(response);
        setUserData(response.data.next);
        setUserData1(response.data.top3[0]);
        setUserData2(response.data.top3[1]);
        setUserData3(response.data.top3[2]);
      })
      .catch((error) => {
        console.log(error);
        //errorMsg: "Error retrieving data"
      });
  };
  useEffect(() => {
    getContributorData();
  }, []);
  console.log(UserData);

  return (
    <div>
      {/* -----------------------------------------------Heading of the page------------------------------------------------------------ */}

      <Grid container justifyContent="center">
        <Typography
          sx={{
            fontSize: 40,
            fontWeight: "bold",
            color: "#000000",
            marginTop: "50px",
            fontFamily: "Josefin Sans, sans-serif",
          }}
        >
          Top Contributors
        </Typography>
      </Grid>

      <Link to="/be-a-contributor">
        <Container>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#001d3d",
              color: "#ffffff",
              width: "200px",
              height: "50px",
              fontSize: "12px",
              fontFamily: "Josefin Sans, sans-serif",
              "&:hover": {
                backgroundColor: "#001d3d",
              },
            }}
          >
            <AddIcon
              sx={{
                mr: "10px",
                fontSize: "25px",
              }}
            />{" "}
            Be a Contributor
          </Button>
        </Container>
      </Link>

      {/* ------------------------------- Top 3 cards------------------------------------------------------------------------------- */}
      <Grid
        container
        xs={12}
        md={12}
        lg={12}
        sm={12}
        justifyContent="center"
        sx={{
          my: "20px",
        }}
      >
        <Grid
          item
          justifyContent="center"
          xs={12}
          sm={12}
          md={12}
          lg={3}
          sx={{
            mx: {
              xs: "10%",
              sm: "20%",
              md: "25%",
              lg: "0%",
            },
          }}
        >
          <MediaCard data={UserData1} />
        </Grid>
        <Grid
          item
          justifyContent="center"
          xs={12}
          sm={12}
          md={12}
          lg={3}
          sx={{
            mx: {
              xs: "10%",
              sm: "20%",
              md: "25%",
              lg: "0%",
            },
          }}
        >
          <MediaCard data={UserData2} />
        </Grid>
        <Grid
          item
          justifyContent="center"
          xs={12}
          sm={12}
          md={12}
          lg={3}
          sx={{
            mx: {
              xs: "10%",
              sm: "20%",
              md: "25%",
              lg: "0%",
            },
          }}
        >
          <MediaCard data={UserData3} />
        </Grid>
        <Divider
          sx={{
            justifyContent: "center",
            width: "80%",
            my: "40px",
          }}
        />
      </Grid>

      {/* -----------------------------------------------Search bar------------------------------------------------------------------ */}

      <Grid item sx={{ mx: "10%", my: "20px" }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Check your rank here"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </Grid>

      {/* -----------------------------------------------Table------------------------------------------------------------------ */}

      <Grid
        container
        justifyContent="center"
        sx={{
          mt: "30px",
        }}
      >
        <TableContainer
          sx={{
            width: "85%",
            marginBottom: "40px",
            borderRadius: "10px",
          }}
          component={Paper}
        >
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">
                  <Typography align="center" color="white" sx={header}>
                    Rank
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {" "}
                  <Typography align="center" color="white" sx={header}>
                    User Profile
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography align="center" color="white" sx={header}>
                    Points
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography align="center" color="white" sx={header}>
                    LinkedIn
                  </Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography align="center" color="white" sx={header}>
                    Github
                  </Typography>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            {/* -----------------------------------------------Table------------------------------------------------------------------ */}

            <TableBody>
              {UserData.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center">
                    <Typography color="black" sx={header}>
                      {row.rank}
                    </Typography>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Link
                      style={{ textDecoration: "None", color: "black" }}
                      to={{
                        pathname: `/Profile/${row.user_name}`,
                      }}
                    >
                      <Button
                        size="small"
                        sx={{
                          fontFamily: "Josefin Sans, sans-serif",
                          fontSize: 15,
                          fontWeight: 400,
                          color: "#000000",
                          "&:hover": {
                            color: "#0077b5",
                            border: "1px solid #0077b5",
                          },
                        }}
                      >
                        <PersonIcon /> {row.name}
                      </Button>
                    </Link>
                  </StyledTableCell>

                  <StyledTableCell align="center">
                    <Typography sx={header}>{row.points}</Typography>
                  </StyledTableCell>

                  <StyledTableCell align="left">
                    <a href={row.linkedin_url}>
                      <LinkedInIcon
                        sx={{
                          fontSize: 40,
                          color: "#0077b5",
                        }}
                      />{" "}
                      {row.linkedin_username}
                    </a>
                  </StyledTableCell>

                  <StyledTableCell align="left">
                    <a href={row.github_url}>
                      <Typography
                        sx={{
                          fontSize: 25,
                          color: "#000000",
                          fontFamily: "Josefin Sans, sans-serif",
                          "&:hover": {
                            border: "1px solid black",
                          },
                        }}
                      >
                        <GitHubIcon /> {row.github_username}
                      </Typography>
                    </a>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </div>

    // -------------------------------------------------------------------------------------------------------------------------------------
  );
};

export default Contributor;
