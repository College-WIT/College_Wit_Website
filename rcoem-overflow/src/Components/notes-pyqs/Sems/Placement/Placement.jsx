import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../../../Navbar";
import Lottie from "react-lottie";
import * as animationData from "../../../../Assets/Placement.json";

const Placement = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = [
    {
      id: 1,
      title: "Google",
      panel: "panel1",
      url: "https://drive.google.com/file/d/12uWVOBS5DQcTLa12wjaCehUWPO6ztz7x/preview",
    },
    {
      id: 2,
      title: "Amazon 1",
      panel: "panel2",
      url: "https://drive.google.com/file/d/1lpDhoZWt2JJxYv3n4FETGMogo2LE4AgO/preview",
    },
    {
      id: 3,
      title: "Amazon 2",
      panel: "panel3",
      url: "https://drive.google.com/file/d/103y5ivvZlZwthFAiOCYtRbqg78HrxsI0/preview",
    },
    {
      id: 4,
      title: "Microsoft 1",
      panel: "panel4",
      url: "https://drive.google.com/file/d/1m-Li_wJDPorakmbAbFU7NsvYbUWXkWbz/preview",
    },
    {
      id: 5,
      title: "Microsoft 2",
      panel: "panel5",
      url: "https://drive.google.com/file/d/1RdHCD4tqiIS1FcgfBBoOFcHdmT8Y7dH9/preview",
    },
    {
      id: 6,
      title: "Apple",
      panel: "panel6",
      url: "https://drive.google.com/file/d/1V_xZEFOlqBiMdFmoB6Fr9hDsK-VJx-mW/preview",
    },
    {
      id: 7,
      title: "Adobe",
      panel: "panel7",
      url: "https://drive.google.com/file/d/1BPqmyRE-8QfQdPTPbMC9NGEOddKizxWr/preview",
    },
    {
      id: 8,
      title: "VMWare",
      panel: "panel8",
      url: "https://drive.google.com/file/d/1iKDJ_S3dPiN1KCq5NwUysqz21mO89imH/preview",
    },
    {
      id: 9,
      title: "Goldman Sachs",
      panel: "panel9",
      url: "https://drive.google.com/file/d/1MdAWTN39fCpwOTz21yyWgPDA5C26a0Dg/preview",
    },
    {
      id: 10,
      title: "Facebook",
      panel: "panel10",
      url: "https://drive.google.com/file/d/1lv5a91F1sHLiNUMp4wEPavLtN8GS-Aol/preview",
    },
    {
      id: 11,
      title: "Flipkart",
      panel: "panel11",
      url: "https://drive.google.com/file/d/1SOaQ4WdzQfRja7hicHXT2BE8GZN9cJ35/preview",
    },
    {
      id: 12,
      title: "Myntra",
      panel: "panel12",
      url: "https://drive.google.com/file/d/1EoSxK2pZ3fnR1SFxxtdjZdmDCcQNB83v/preview",
    },
    {
      id: 13,
      title: "Oracle",
      panel: "panel13",
      url: "https://drive.google.com/file/d/1JsX3MpybJuGflATI0cLtz5eIUziwtrkw/preview",
    },
    {
      id: 14,
      title: "DSA Book",
      panel: "panel14",
      url: "https://drive.google.com/file/d/1UuQ2R7utYaRc0SX_cibniW2GirS1ubXe/preview",
    },
    {
      id: 15,
      title: "Easy Top Interview Questions",
      panel: "panel15",
      url: "https://drive.google.com/file/d/19zDB7njQ51Udn5ugXsj9k6mB9DpfjjcN/preview",
    },
    {
      id: 16,
      title: "Medium Top Interview Questions",
      panel: "panel16",
      url: "https://drive.google.com/file/d/1YhKQk3VpB1BwP5p5B8hOEeXJGyM4du7w/preview",
    },
    {
      id: 17,
      title: "Hard Top Interview Questions",
      panel: "panel17",
      url: "https://drive.google.com/file/d/1aeUU6z_Mf4CfKz9aRUZZMKdRgpthkjXG/preview",
    },
    {
      id: 18,
      title: "Triology",
      panel: "panel18",
      url: "https://drive.google.com/file/d/1L_wX3L61puJnzWUbQlxG1V_tR9TT87wv/preview",
    },
    {
      id: 19,
      title: "Paypal",
      panel: "panel19",
      url: "https://drive.google.com/file/d/1X1JUW_JsNrC14L1nkmoXV0pDOrb7ciWp/preview",
    },
    {
      id: 20,
      title: "Walmart",
      panel: "panel20",
      url: "https://drive.google.com/file/d/1JfqshnNSiDnZuklZlhzofIH_wUj7y9Jx/preview",
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
          <Lottie
            options={defaultOptions}
            height="90%"
            width="90%"
            style={{ margin: "20px" }}
          />{" "}
        </Grid>
        <Grid xs={6} md={8}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              marginTop: "50px",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            Placement Resources
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
                sx={{
                  color: "white",
                  fontWeight: 500,
                  fontSize: "20px",
                  fontFamily: "Josefin Sans, sans-serif",
                }}
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

export default Placement;
