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
import { Link } from 'react-router-dom';
import '../../App'

const notespyqs = () => {
    const data = [
        {
            id: 1,
            title: "Semester-1",
        },
        {
            id: 2,
            title: "Semester-2",
        },
        {
            id: 3,
            title: "Semester-3",
        },
        {
            id: 4,
            title: "Semester-4",
        },
        {
            id: 5,
            title: "Semester-5",
        },
        {
            id: 6,
            title: "Semester-6",
        },
        {
            id: 7,
            title: "Semester-7",
        },
        {
            id: 8,
            title: "Semester-8",
        },
    ];
    return (

        <Grid container sx={{
            justifyContent: "center"

        }}>
            <Grid xl={12} xs={12} md={12}>
                <Typography sx={{
                    fontFamily: "monospace",
                    fontSize: "30px",
                    textAlign: "center",
                    marginTop: "1%",
                }}>
                    Semesters
                </Typography></Grid>

            <Grid container xs={9} md={7} xl={6} sx={{
                justifyContent: "center",
                // width: "50%",
                marginTop: "3%",
                marginBottom: "5%"
            }}>
                {data.map((d) => (
                    <Link style={{ textDecoration: "None", color: "white" }} to={"/" + d.title}>
                        <Grid item ><Folder sem={d.title} /> </Grid>
                    </Link>
                ))}


            </Grid>

        </Grid>
    );
}


export default notespyqs;