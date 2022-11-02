import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../../../Navbar";
import Lottie from "react-lottie";
import * as animationData from "../../../../Assets/BookLottie.json";

const FDLCA = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const data = [
        {
            id: 1,
            title: "PYQ",
            panel: "panel1",
            url: "https://drive.google.com/file/d/1YlbvVLvnfYj6FcBN7lgBrPvAQCNu63IK/preview",
        },
        {
            id: 2,
            title: "PYQ 2022",
            panel: "panel2",
            url: "https://drive.google.com/file/d/1oB3R1K6ziVZ2qo8d9tgy2OZ2lGBV4zO7/preview",
        },
        {
            id: 3,
            title: "PYQ 2021",
            panel: "panel3",
            url: "https://drive.google.com/file/d/1ebtJix1GUvq-eZ1w--1PPn8UQBVIWR2F/preview",
        },
        {
            id: 4,
            title: "PYQ 2020",
            panel: "panel4",
            url: "https://drive.google.com/file/d/1okApCpc1y2EyAY4MSPbZJaEBKvlLWajg/preview",
        },
        {
            id: 5,
            title: "PYQ 2019",
            panel: "panel5",
            url: "https://drive.google.com/file/d/1g5vTe8NcP_PbpKlCBRid2Alm7yoy7D4x/preview",
        },
        {
            id: 7,
            title: "PYQ 2018",
            panel: "panel7",
            url: "https://drive.google.com/file/d/1uTtOMiuOsClmwZGml4_L-vQFIKVEqnRZ/preview",
        },
        {
            id: 8,
            title: "PYQ 2017",
            panel: "panel8",
            url: "https://drive.google.com/file/d/1gxbeGK2gf-6AZNivrmlhhooZ6qUogSbI/preview",
        },
        {
            id: 9,
            title: "PYQ 2016",
            panel: "panel9",
            url: "https://drive.google.com/file/d/1CetMzgyuao7kje3EkxCYS1j1YDvW3-1Q/preview",
        },
        {
            id: 10,
            title: "PYQ 2015",
            panel: "panel10",
            url: "https://drive.google.com/file/d/1Caz1HXi2RP3WgabodJk-1-4fJsEQn7bE/preview",
        },
        {
            id: 11,
            title: "PYQ 2014",
            panel: "panel11",
            url: "https://drive.google.com/file/d/1V84WZ0m88dxRICLJHw4atjErv1mCqbVQ/preview",
        },
    ];

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            <Navbar />
            <Grid container>
                <Grid xs={6} md={2}>
                    <Lottie options={defaultOptions} height="90%" width="90%" style={{ marginTop: '20px' }} />
                </Grid>
                <Grid xs={6} md={8}>
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: "center",
                            marginTop: "50px",
                        }}
                    >
                        Fundamentals of Digital Logic and Computer Architecture Notes and PYQ
                    </Typography>
                </Grid>
            </Grid>

            {/* <Grid container spacing={2} columns={10} sx={{
                marginTop: '50px'
            }}>
                {data.map((d) => (
                    <Grid item xs={8} sx={{ marginLeft: '10%' }}>
                        <a href={d.url}>
                            <Stack variant='contained' sx={{
                                height: '50px',
                                backgroundColor: '#E26639',
                                borderRadius: '10px',
                                textTransform: 'none',
                                fontSize: '20px',
                                color: '#fff',
                                fontWeight: 500,
                            }}>
                                {d.title}
                            </Stack>
                        </a>
                    </Grid>
                ))} 

            </Grid>*/}
            <div style={{ padding: "30px" }}>
                {data.map((d) => (
                    <Accordion
                        sx={{ backgroundColor: "#444444", margin: "5px" }}
                        expanded={expanded === `${d.panel}`}
                        onChange={handleChange(`${d.panel}`)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="warning" />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography
                                sx={{ color: "white", fontWeight: 700, fontSize: "18px" }}
                            >
                                {d.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <iframe
                                title="doc"
                                src={d.url}
                                width="640"
                                height="480"
                                style={{ position: "relative", left: "20%" }}
                            ></iframe>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

export default FDLCA;
