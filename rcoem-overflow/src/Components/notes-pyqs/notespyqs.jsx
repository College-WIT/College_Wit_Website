import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Folder from './card.jsx'
import { Link } from 'react-router-dom';
import '../../App'
import { Button } from '@mui/material';


const notespyqs = () => {
    const data = [
        {
            id: 1,
            title: "Semester_1",
        },
        {
            id: 2,
            title: "Semester_2",
        },
        {
            id: 3,
            title: "Semester_3",
        },
        {
            id: 4,
            title: "Semester_4",
        },
        {
            id: 5,
            title: "Semester_5",
        },
        {
            id: 6,
            title: "Semester_6",
        },
        {
            id: 7,
            title: "Semester_7",
        },
        {
            id: 8,
            title: "Semester_8",
        },
    ];
    return (
        <div>

            <Grid container sx={{
                justifyContent: "center"
            }}>
                <Grid md={6} sm={10} xs={12}>
                    <Button href="/Placement" sx={{
                        backgroundColor: "#E26639",
                        "&:hover": {
                            backgroundColor: "#41D450",
                            opacity: 10,
                        },
                        color: "#fff",
                        marginTop: "40px",
                        marginLeft:"30%",
                        padding: "20px",
                        width: "50%",
                        borderRadius: "22px"
                    }}>
                        <Typography variant="h6" color="#fff">Placement Resources</Typography>

                    </Button>
                </Grid>
                <Grid md={6} sm={10} xs={12}>
                    <Button href='https://chat.whatsapp.com/ExSdgtdV06y04cJzawmdft'
                        sx={{
                            backgroundColor: "#E26639",
                            "&:hover": {
                                backgroundColor: "#41D450",
                                opacity: 10,
                            }, color: "#fff", 
                            marginTop: "40px", 
                            marginLeft:"10%",
                            padding: "20px", 
                            width: "50%", 
                            borderRadius: "22px"
                        }}>
                        <Typography variant="h6" color="#fff">1:1 Mentorship</Typography>
                    </Button>
                </Grid>

                <Grid xl={12} xs={12} md={12}>
                    <Typography sx={{
                        fontFamily: "monospace",
                        fontSize: "30px",
                        textAlign: "center",
                        marginTop: "5%",
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
        </div>
    );
}


export default notespyqs;