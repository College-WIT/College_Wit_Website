import axios from 'axios';
import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import folder from '../../Assets/folder3.svg'
import { Box, Container } from '@mui/system';
import Folder from './card.jsx'
import subject from './subject';
import { Link } from 'react-router-dom';
import '../../App'


class Notespyqs extends Component {


    render() {
        return (

            <Grid >
                <Typography sx={{
                    fontFamily: "monospace",
                    fontSize: "30px",
                    textAlign: "center",
                    marginTop: "1%",
                }}>Semesters</Typography>


                <Grid container sx={{
                    justifyContent: "center",
                    paddingLeft: "20%",
                    paddingRight: "20%",
                    marginTop: "3%",
                    marginBottom: "5%"
                }}>

                    <Link style={{ textDecoration: "None", color: "white" }} to={`/subjects`}>
                    <Grid item><Folder /> </Grid>
                    </Link>
                    
                    <Grid item><Folder /></Grid>
                    <Grid item><Folder /></Grid>
                    <Grid item><Folder /></Grid>
                    <Grid item><Folder /></Grid>
                    <Grid item><Folder /></Grid>
                    <Grid item><Folder /></Grid>
                    <Grid item><Folder /></Grid>


                </Grid>

            </Grid>
        );
    }
}

export default Notespyqs;