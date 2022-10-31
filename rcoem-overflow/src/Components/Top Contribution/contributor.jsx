import * as React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import MediaCard from "../Homepage/card";
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

const contributor = () => {
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const buttons = { margin: "8px", backgroundColor: "#4B9CD3", color: "#000" };
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

  function createData(Rank, Name, Score, Github) {
    return { Rank, Name, Score, Github };
  }

  const rows = [
    createData(1, "Abcd", 100, "Anjali2201"),
    createData(2, "Abcd", 100),
    createData(3, "Abcd", 100),
    createData(4, "Abcd", 100),
  ];

  return (
    <Grid>
      {/* // ------------------------------- Top 3 cards------------------------------------------------------------------------------- */}
      <Grid
        container
        sx={{
          height: "auto",
        }}
      >
        <Grid container justifyContent="center">
          <Typography
            sx={{
              fontSize: 60,
              color: "#000000",
              fontFamily: "'urw-din',sans-serif",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Top Contributors
          </Typography>
          {/* <Link to="/be-a-contributor">
            <Button
              style={buttons}
              type="submit"
              variant="contained"
              color="primary"
            >
              Be a Contributor
            </Button>
          </Link> */}
        </Grid>
        <Grid
          container
          justifyContent="center"
          sx={{
            marginTop: "40px",
            marginBottom: "40px",

            "@media (max-width: 1200px)": {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
            "@media (max-width: 1000px)": {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
            "@media (max-width: 900px)": {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
            "@media (max-width: 700px)": {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        spacing={4}
        justifyContent="center"
        sx={{
          width: "80%",
          padding: "20px",
        }}
      >
        <Grid item justifyContent="right">
          Check Your Rank here:
        </Grid>
        <Grid item xs={8} justifyContent="center">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        sx={{
          marginTop: "40px",
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
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.Rank}>
                  <StyledTableCell align="center"> {row.Rank}</StyledTableCell>
                  <StyledTableCell align="center">{row.Name}</StyledTableCell>
                  <StyledTableCell align="center">{row.Score}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button
                      sx={{
                        backgroundColor: "#E26639",
                        color: "#ffffff",
                        borderRadius: "10px",
                        width: "auto",
                        height: "40px",
                        fontSize: "20px",
                      }}
                      href="#contained-buttons"
                    >
                      {row.Github}
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>

    // -------------------------------------------------------------------------------------------------------------------------------------
  );
};

export default contributor;
