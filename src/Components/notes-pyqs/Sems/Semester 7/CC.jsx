import React from 'react'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../../../Navbar";
import Lottie from "react-lottie";
import * as animationData from "../../../../Assets/BookLottie.json";

const CC = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const data = [
        {
            id: 1,
            title: "Textbook",
            panel: "panel1",
            url: " ",
        },
        {
            id: 2,
            title: "PYQ 2019",
            panel: "panel2",
            url: "https://drive.google.com/file/d/1ehz16cQpry73WwQmVAFJVXw8HqFW0vQH/preview",
        },
        {
            id: 3,
            title: "PYQ 2019",
            panel: "panel3",
            url: "https://drive.google.com/file/d/1hRSxoWTW9LEHFfTlmcdNyZDXcDP5xslE/preview",
        },
        {
            id: 4,
            title: "PYQ 2017",
            panel: "panel4",
            url: "https://drive.google.com/file/d/1KOHnTB7_bxgMT_qXAp-NHwheYiyBqy1M/preview",
        },
        {
            id: 5,
            title: "PYQ 2018",
            panel: "panel5",
            url: "https://drive.google.com/file/d/1Iw0Fw4_EXrkPdJb843HHNYiU5NzIHFYT/preview",
        },
        {
            id: 6,
            title: "PYQ 2019",
            panel: "panel6",
            url: "https://drive.google.com/file/d/1ahy7ad1BzICb2ZO4QoqCCozPDBx77oP4/preview",
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
                        Cloud Computing PYQs
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
    )
}

export default CC