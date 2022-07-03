import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../Assets/NavLogo.png"
import { Link } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';

const buttons = { height: 40, width: 100, margin: '5px', backgroundColor: "#E26639", fontSize: 12 }
const pages = ['Home', 'Questions', 'Top Contributors', 'Notes-PYQs'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{
      backgroundColor: '#0E0E0E',
      height: 80

    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: 70,
              width: 300,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              '@media (max-width:780px)': {
                display: 'None'
              }
            }}

            alt="logo img"
            src={logo}
          />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
                    <Button
                      key={page}
                      sx={{
                        my: 2,
                        color: 'black',
                        display: 'block',
                        "&:hover": {
                          color: "#41D450",
                          opacity: 10,
                        }
                      }}>
                      <Link style={{ textDecoration: "None", color: "black" }} to={`/${page}`}>
                        {page}
                      </Link>
                    </Button>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}>
            RCOEM-Overflow
          </Typography>


          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link style={{ textDecoration: "None", color: "white" }} to={`/${page}`}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    fontSize: 15,
                    my: 2,
                    color: 'white',
                    display: 'block',
                    "&:hover": {
                      color: "#41D450",
                      opacity: 10,
                    },
                    '@media (max-width:780px)': {
                      fontSize: 15,
                    }
                  }}>
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu> 
            {/* //   sx={{ mt: '45px' }}
            //   id="menu-appbar"
            //   anchorEl={anchorElUser}
            //   anchorOrigin={{
            //     vertical: 'top',
            //     horizontal: 'right',
            //   }}
            //   keepMounted
            //   transformOrigin={{
            //     vertical: 'top',
            //     horizontal: 'right',
            //   }}
            //   open={Boolean(anchorElUser)}
            //   onClose={handleCloseUserMenu}
            // >
            //   {settings.map((setting) => (
            //     <MenuItem key={setting} onClick={handleCloseUserMenu}>
            //       <Typography textAlign="center">{setting}</Typography>
            //     </MenuItem>
            //   ))} 
            {/* </Menu> */}

            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              {/* <Link style={{ textDecoration: "None", color: "white" }} to={`/login`}><Button style={buttons} variant="contained" color="primary" sx={{ height: 40 }}>
                Login</Button></Link> */}
              <Link style={{ textDecoration: "None", color: "white" }} to={`/signup`}><Button style={buttons} variant="contained" color="primary" sx={{ height: 40 }}>
                Register </Button></Link>
            </ButtonGroup>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;