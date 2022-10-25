import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Folder from '../../card'
import { Link } from 'react-router-dom';
import '../../../../App'
import Navbar from '../../../Navbar'

const Semester_2 = () => {
    const data = [
        {
            id: 1,
            title: "Fundamentals of Digital Logic and Computer Arch.",
        },
        {
            id: 2,
            title: "Data Structures & Algorithms",
        },
        {
            id: 3,
            title: "Linear Algebra and Statistics",
        },
        {
            id: 4,
            title: "Business Communication",
        },
        {
            id: 5,
            title: "Cyber Laws & Ethics",
        },
    ];
    return (
        <div>
            <Navbar />
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
                        Subjects of Semester 2
                    </Typography></Grid>

                <Grid container xs={9} md={7} xl={6} sx={{
                    justifyContent: "center",
                    // width: "50%",
                    marginTop: "3%",
                    marginBottom: "5%"
                }}>
                    {data.map((d) => (
                        <Link style={{ textDecoration: "None", color: "white" }} to={"/" + d.title}>
                            <Grid item >
                                <Folder sem={d.title} />
                            </Grid>
                        </Link>
                    ))}
                </Grid>

            </Grid>
        </div>
    )
}

export default Semester_2