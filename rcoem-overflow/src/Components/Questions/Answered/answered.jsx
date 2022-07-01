import React, { Component } from 'react'
import axios from 'axios'
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack';
import { useLocation, useParams } from "react-router-dom";
import { fontSize } from '@mui/system';
import { GoArrowRight } from 'react-icons/go'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const quickAccBar = ["Home", "Questions", "Answered", "Unanswered", "Trending"];
const queTags = ["Tags", "Tags", "Tags", "Tags", "Tags"];

const answered = () => {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#d9d9d9", padding: 2 }}>

{/* ********************Left bar******************************************************* */}

    <Grid container spacing={2}>
         <Grid item xl={3} lg={2} md={2} sm={2} xs={12}>
             <Item sx={{ border: 1 }}>Quick Access
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
                             borderRadius: 10,
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

{/* ************************************ middle section ******************************************************* */} 
         <Grid item xl={7} lg={8} md={8} sm={8} xs={12}>
             <Grid item >
                 <Item sx={{ border: 1 }}>
                    <Typography>Answered </Typography>
                             
                 </Item>
             </Grid>


         </Grid>
         <Grid item xl={3} lg={2} md={2} sm={2} xs={12}>

             <Item sx={{ border: 1 }}>Tags
                 {queTags.map((content) => (
                     <Grid sx={{ padding: 1 }}>
                         <Button sx={{
                             backgroundColor: "#E26639",
                             width: 100,
                             height: 25,
                             borderRadius: 10,
                             "&:hover": {
                                 backgroundColor: "#41D450",
                                 opacity: 10,
                             }
                         }}
                             variant="contained" disableElevation>
                             {content}
                         </Button>
                     </Grid>
                 ))}

                 <Grid sx={{ paddingTop: 10 }}>
                     <Button sx={{
                         backgroundColor: "#20D867",
                         width: 150,
                         height: 60,
                         borderRadius: 5,
                         fontSize: 15,
                         "&:hover": {
                             backgroundColor: "#E26639",
                             opacity: 10,
                         }
                     }} variant="contained" disableElevation>
                         <Link style={{ textDecoration: "None", color: "white" }} to={`/Post-a-question`}>
                             Post a question
                         </Link>
                     </Button>
                 </Grid>
             </Item>
         </Grid>
     </Grid>
 </Box>
);
};

export default answered