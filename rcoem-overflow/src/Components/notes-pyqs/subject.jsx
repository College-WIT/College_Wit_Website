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

class subject extends Component {

    render() {
        return (

            <Grid container sx={{
               
                justifyContent:"center",
                paddingLeft: "20%",
                paddingRight:"20%",
                marginTop:"5%",
                marginBottom:"5%"
            }}>
                <Grid item><Folder/></Grid>
                <Grid item><Folder/></Grid>
                <Grid item><Folder/></Grid>
                <Grid item><Folder/></Grid>
                <Grid item><Folder/></Grid>
                <Grid item><Folder/></Grid>
                <Grid item><Folder/></Grid>
                <Grid item><Folder/></Grid>
                
                    
            </Grid>


        );
    }
}

export default subject;