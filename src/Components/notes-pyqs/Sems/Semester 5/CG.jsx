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

const CG = () => {
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
            title: "PYQ Online Set 1",
            panel: "panel2",
            url: "https://drive.google.com/file/d/1bv1a6Srxe8NhpGcZYCF-Fl0ivtZ_mWbl/preview",
        },
        {
            id: 3,
            title: "PYQ Online Set 2",
            panel: "panel3",
            url: "https://drive.google.com/file/d/1Pj5waUJ-Mxeh10Z8bHGVus2dV9wQ-0cF/preview",
        },
        {
            id: 4,
            title: "PYQ Online Set 3",
            panel: "panel4",
            url: "https://drive.google.com/file/d/1e-uLapIeqfsBks74vmUhV1iqukBmCNw-/preview",
        },
        {
            id: 5,
            title: "PYQ Online Set 4",
            panel: "panel5",
            url: "https://drive.google.com/file/d/1miYiLuduuFzmcpUkuL5OreJfZAaI3cuN/preview",
        },
        {
            id: 6,
            title: "PYQ 2019",
            panel: "panel6",
            url: "https://drive.google.com/file/d/1J_DDkQA5XTuUECyUqzQRA8kecpzCyOAl/preview",
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
                        Computer Graphics Notes and PYQ
                    </Typography>
                </Grid>
            </Grid>

            
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

export default CG;
