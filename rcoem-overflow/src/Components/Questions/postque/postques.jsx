import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Component } from 'react'
import axios from 'axios'
import { TextField, } from '@mui/material'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const buttons = { margin: '8px 0', backgroundColor: "#E26639", padding: 5};
const quickAccBar = ["Home", "Answers", "Trending"];
const queTags = ["Tags", "Tags", "Tags", "Tags"];
const paperStyle = { padding: 40 }

class postques extends Component {

  render() {
    return (
      <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 2 }}>

        {/* ----------------------------QUICK ACCESS------------------------------ */}
        <Grid container spacing={2}>
          <Grid item xl={3} lg={2} md={2} sm={2} xs={2}>
            <Item>Quick Access
              {quickAccBar.map((content) => (
                <Grid sx={{
                  padding: 2,
                  '@media (max-width:780px)': {
                    padding: '0 ,0, 0, 0'
                  }
                }}>
                  <Button sx={{
                    fontSize: 15,
                    backgroundColor: "#E26639",
                    width: 130,
                    height: 35,
                    borderRadius: 5,
                    "&:hover": {
                      backgroundColor: "#41D450",
                      opacity: 10,
                    },
                    '@media (max-width:1000px)': {
                      fontSize: 12,
                      width: 100,
                      height: 20,
                    },
                    '@media (max-width:900px)': {
                      fontSize: 10,
                      width: 90,
                      height: 20,
                    },
                    '@media (max-width:800px)': {
                      fontSize: 8,
                      width: 70,
                      height: 20,
                    }
                  }}
                    variant="contained" disableElevation>

                    <Link style={{ textDecoration: "None", color: "white" }} to={`/${content}`}>
                      {content}
                    </Link>
                  </Button>
                </Grid>
              ))}
            </Item>
          </Grid>


          {/* ------------------------------------Questions------------------------------------- */}


          <Grid item xl={7} lg={8} md={8} sm={8} xs={8}>
            <Grid sx={{
              height: 400,

            }}>
              <Paper style={paperStyle}>
                <Grid align='center'>
                  <h2>Post a Question</h2>
                </Grid >
                <TextField multiline rows={6} label='Question' placeholder='Enter Question' type='text' fullWidth required />
                <Button style={buttons} type='submit' variant='contained' color='primary' >Post</Button> 
                <Button style={buttons} type='submit' variant='contained' color='primary'>Post Anonymously</Button>
              </Paper>
            </Grid>
          </Grid>

          {/* --------------------------------TAGS SECTION--------------------------------------------*/}

          <Grid item xl={3} lg={2} md={2} sm={2} xs={2}>
            <Item> Tags {queTags.map((content) => (
              <Grid sx={{ padding: 1 }}>
                <Button sx={{
                  backgroundColor: "#E26639",
                  width: 100,
                  height: 25,
                  borderRadius: 5,
                  "&:hover": {
                    backgroundColor: "#41D450",
                    opacity: 10
                  }
                }}
                  variant="contained" disableElevation>
                  {content}
                </Button>
              </Grid>
            ))}


            </Item>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default postques