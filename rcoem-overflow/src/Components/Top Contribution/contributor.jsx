import * as React from "react";
import { Link } from "react-router-dom";
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
const contributor = () => {
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

  const btn1 = {
    color: "white",
    fontFamily: "'urw-din',sans-serif",
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: "5px",
    padding: 1,
    backgroundColor: "#000000",
    "&:hover": {
      backgroundColor: "#000000",
      color: "white",
    },
  };
  const btn2 = {
    color: "white",
    fontFamily: "'urw-din',sans-serif",
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: "5px",
    padding: 1,
    backgroundColor: "#0077b5",
    "&:hover": {
      backgroundColor: "#000000",
      color: "white",
    },
  };

  function createData(Rank, Name, Score, Github, LinkedIn) {
    return { Rank, Name, Score, Github, LinkedIn };
  }

  const rows = [
    createData(1, "Abcd", 100, "Anjali2201", "Anjali2201"),
    createData(2, "Abcd", 100, "Anjali2201", "Anjali2201"),
    createData(3, "Abcd", 100, "Anjali2201", "Anjali2201"),
    createData(4, "Abcd", 100, "Anjali2201", "Anjali2201"),
    createData(5, "Abcd", 100, "Anjali2201", "Anjali2201"),
  ];

  return (
    <div>
      {/* -----------------------------------------------Heading of the page------------------------------------------------------------ */}

      <Grid container justifyContent="center">
        <Typography
          sx={{
            fontFamily: "'urw-din',sans-serif",
            fontSize: 40,
            fontWeight: "bold",
            color: "#000000",
            marginTop: "50px",
          }}
        >
          Top Contributors
        </Typography>
      </Grid>

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
          <MediaCard />
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
          <MediaCard />
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
          <MediaCard />
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
                <StyledTableCell align="center">Rank</StyledTableCell>
                <StyledTableCell align="center">Name</StyledTableCell>
                <StyledTableCell align="center">Score</StyledTableCell>
                <StyledTableCell align="center">Github</StyledTableCell>
                <StyledTableCell align="center">LinkedIn</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Rank}>
                  <StyledTableCell align="center"> {row.Rank}</StyledTableCell>
                  <StyledTableCell align="center">{row.Name}</StyledTableCell>
                  <StyledTableCell align="center">{row.Score}</StyledTableCell>

                  <StyledTableCell align="center">
                    <Button size="small" sx={btn1}>
                      <GitHubIcon sx={{ marginRight: 1 }} />
                      {row.Github}
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button size="small" sx={btn2}>
                      <LinkedInIcon sx={{ marginRight: 1 }} />
                      {row.LinkedIn}
                    </Button>
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

export default contributor;
