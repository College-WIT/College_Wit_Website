import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Folder from '../../card'
import { Link } from 'react-router-dom';
import '../../../../App'
import Navbar from '../../../Navbar'

const Semester_3 = () => {
    const data = [
        {
            id: 1,
            title: "Fundamentals_of_Digital_Logic_and_Computer_Arch",
        },
        {
            id: 2,
            title: "Data_Structures_&_Algorithms",
        },
        {
            id: 3,
            title: "Linear_Algebra_and_Statistics",
        },
        {
            id: 4,
            title: "Business_Communication",
        },
        {
            id: 5,
            title: "Cyber_Laws_&_Ethics",
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
                        Subjects of Semester 3
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

export default Semester_3