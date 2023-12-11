import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../../../Navbar";
import Lottie from "react-lottie";
import * as animationData from "../../../../Assets/BookLottie.json";
import axios from 'axios';
import Loading from "../Loading";

const modifyData = (data) => {
    return data.map((item, index) => {
        // Modify URL if it matches the specified format
        const modifiedURL = item.URL.includes("drive.google.com/file/d/") ?
            item.URL.replace(/\/view\?usp=drivesdk$/, "/preview") :
            item.URL;

        return {
            ...item,
            id: index + 1,
            title: "PYQ",
            panel: "panel" + (index + 1),
            URL: modifiedURL,
        };
    });
};


const OOPS = () => {
    const [expanded, setExpanded] = useState(false);
    const [allData, setAllData] = useState();
    const [OOPS_Data, setOOPSData] = useState();
    const [loading, setLoading] = useState(true);

    const getMyPostData = async () => {
        try {
            const res = await axios.get("https://script.google.com/macros/s/AKfycbzwkPSx-o2fZ--e1ZpiXum1FSRVzdMnUTtoCWnsqpgVyITWz6zrn2PyHRupkjBmqkhVpg/exec");
            setAllData(res.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate loader delay
            getMyPostData();
            setLoading(false);
        };

        fetchData();
    }, []);

    function filterBySubstring(dataArray, substring) {
        return dataArray.filter(item => item["Full Path"].includes(substring));
    }

    useEffect(() => {
        if (allData) {
            const modifiedData = modifyData(allData);
            setOOPSData(filterBySubstring(modifiedData, "OOPS"));
        }
    }, [allData]);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

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
            {loading ? (
                <Loading />
            ) : (
                <div>
                    <Navbar />
                    <Grid container>
                        <Grid xs={6} md={2}>
                            <Lottie options={defaultOptions} height="90%" width="90%" style={{ marginTop: '20px' }} />                </Grid>
                        <Grid xs={6} md={8}>
                            <Typography
                                variant="h3"
                                sx={{
                                    textAlign: "center",
                                    marginTop: "50px",
                                }}
                            >
                                Object Oriented Programming Notes and PYQ
                            </Typography>
                        </Grid>
                    </Grid>
                    <div style={{ padding: "30px" }}>
                        {OOPS_Data?.map((d) => (
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
                                        {d.Name}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <iframe
                                        title="doc"
                                        src={d.URL}
                                        width="640"
                                        height="480"
                                        style={{ position: "relative", left: "20%" }}
                                    ></iframe>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </div>
                </div>
            )}
        </div>

    );
};

export default OOPS;
