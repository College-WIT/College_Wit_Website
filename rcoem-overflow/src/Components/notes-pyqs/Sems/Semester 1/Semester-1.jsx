import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Folder from '../../card'
import { Link } from 'react-router-dom';
import '../../../../App'

const Semester_1 = () => {    
        const data = [
            {
                id: 1,
                title: "Chemistry",
            },
            {
                id: 2,
                title: "Mathematics",
            },
            {
                id: 3,
                title: "PPS - Prog. for Problem Solving",
            },
            {
                id: 4,
                title: " CIDT-Creativity, Innovation and Design Thinking",
            },
            {
                id: 5,
                title: "Workshop",
            },
            {
                id: 6,
                title: "English",
            },
        ];
    return (
        <div>
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
                        Subjects of Semester 1
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
        </div>
    )
}

export default Semester_1