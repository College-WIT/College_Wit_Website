import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { ButtonGroup } from "@mui/material";
import SearchBar from "./SearchBar";
import getCookie from "../hooks/getCookie";
import removeCookie from "../hooks/removeCookie";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonIcon from "@mui/icons-material/Person";

let loggedin = getCookie("login");

var contributor = false;
var username;
if (loggedin) {
  username = JSON.parse(getCookie("login")).username;
  contributor = JSON.parse(getCookie("login")).contributor;
}

const logout = () => {
  let loggedin = getCookie("login");
  if (loggedin) {
    removeCookie("login");
    window.location.reload();
  }
};

const buttons = {
  height: 40,
  width: 110,
  margin: "5px",
  backgroundColor: "#118ab2",
  fontFamily: "Josefin Sans, sans-serif",
  fontSize: 12,
  "&:hover": {
    border: "1px solid white",
    backgroundColor: "#118ab2",
  },
};

const logout_buttons = {
  height: 40,
  width: 110,
  fontFamily: "Josefin Sans, sans-serif",
  margin: "5px",
  border: "1px solid white",
  backgroundColor: "transparent",
  color: "white",
  fontSize: 12,
  "&:hover": {
    backgroundColor: "transparent",
    color: "#118ab2",
    borderColor: "#118ab2",
  },
};
const pages = ["Questions", "Contributors", "Resources"];
const mpages = ["Home", "Questions", "Contributors", "Resources"];
const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#0E0E0E",
        height: 80,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* -----------------------------LOGO-------------------------------------- */}

          <Link to="/">
            <Typography
              sx={{
                flexGrow: 2,
                display: { xs: "none", md: "none", lg: "flex" },
                fontSize: 30,
                color: "#ffffff",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              College{" "}
              <span
                style={{
                  color: "#118ab2",
                  fontSize: 30,
                  fontWeight: "bold",
                  fontFamily: "Josefin Sans, sans-serif",
                }}
              >
                Wit
              </span>
            </Typography>
          </Link>

          {/* -------------------------------------------------------------------------- */}

          {/*----------------------------Search bar---------------------------- */}

          <Box
            sx={{
              flexGrow: 6,
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "flex",
                xl: "flex",
              },
              mx: 2,
            }}
          >
            <SearchBar placeholder="Search your Question" />
          </Box>

          {/* -------------------------------------------------------------- */}

          <Box
            sx={{
              display: { xs: "flex", md: "flex", lg: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "block", lg: "none" },
              }}
            >
              {mpages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Link
                      style={{ textDecoration: "None", color: "black" }}
                      to={`/${page}`}
                    >
                      <Button
                        key={page}
                        sx={{
                          my: 2,
                          fontFamily: "Josefin Sans, sans-serif",
                          color: "black",
                          display: "block",
                          "&:hover": {
                            color: "#41D450",
                            opacity: 10,
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        {page}
                      </Button>
                    </Link>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            sx={{
              display: { xs: "flex", md: "flex", lg: "none" },
              flexGrow: 1,
              fontSize: 30,
              color: "#ffffff",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            College
            <span
              style={{
                color: "#118ab2",
                fontSize: 30,
                fontWeight: "bold",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Wit
            </span>
          </Typography>

          <Box
            sx={{
              mx: 2,
              display: { xs: "none", md: "none", lg: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link
                sx={{
                  textDecoration: "None",
                  color: "white",
                }}
                to={`/${page}`}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: 15,
                    color: "white",
                    display: "block",
                    fontFamily: "Josefin Sans, sans-serif",
                    "&:hover": {
                      backgroundColor: "transparent",
                      borderBottom: "1px solid white",
                      borderRadius: 0,
                    },
                    "@media (max-width:780px)": {
                      fontSize: 15,
                    },
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!loggedin ? (
              <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
              >
                <Button sx={buttons} color="primary">
                  <Link
                    style={{ textDecoration: "None", color: "white" }}
                    to={`/login`}
                  >
                    <PersonIcon sx={{ fontSize: 20 }} /> Login
                  </Link>
                </Button>
                <Link
                  style={{ textDecoration: "None", color: "white" }}
                  to={`/signup`}
                >
                  <Button sx={buttons} color="primary">
                    <PersonAddIcon sx={{ fontSize: 20, mr: 1 }} /> Register
                  </Button>
                </Link>
              </ButtonGroup>
            ) : (
              <ButtonGroup variant="contained" sx={{ mt: 1 }}>
                {!contributor ? (
                  <Link
                    style={{ textDecoration: "None", color: "white" }}
                    to={`/be-a-contributor`}
                  >
                    <Button sx={buttons} color="primary">
                      Be a Contributor
                    </Button>
                  </Link>
                ) : (
                  <></>
                )}

                <Button sx={logout_buttons} onClick={logout}>
                  <LogoutIcon sx={{ mr: 1 }} />
                  Logout
                </Button>
                <Link
                  style={{ textDecoration: "None", color: "white" }}
                  to={{
                    pathname: `/Profile/${username}`,
                  }}
                  state={{ username: username }}
                >
                  <Button
                    sx={{
                      fontFamily: "Josefin Sans, sans-serif",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                      sx={{
                        width: 40,
                        height: 40,
                      }}
                    />
                  </Button>
                </Link>
              </ButtonGroup>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
