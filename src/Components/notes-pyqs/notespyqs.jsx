import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Folder from "./card.jsx";
import { Link } from "react-router-dom";
import "../../App";
import { Button } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid md={6} sm={10} xs={12}>
          <Button
            startIcon={<BookIcon style={{ fontSize: "30px", color: "#fff" }} />}
            href="/Placement"
            sx={{
              backgroundColor: "#04274d",
              "&:hover": {
                backgroundColor: "#118ab2",
                opacity: 10,
              },
              color: "#fff",
              marginTop: "40px",
              marginLeft: "30%",
              padding: "20px",
              width: "60%",
              borderRadius: "22px",
              "@media (max-width:1000px)": {
                marginLeft: "20%",
              },
            }}
          >
            <Typography
              color="#fff"
              sx={{
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: "20px",
                "@media (max-width:1000px)": {
                  fontSize: "16px",
                },
              }}
            >
              Placement Resources
            </Typography>
          </Button>
        </Grid>
        <Grid md={6} sm={10} xs={12}>
          <Button
            startIcon={
              <PeopleAltIcon style={{ fontSize: "30px", color: "#fff" }} />
            }
            href="https://chat.whatsapp.com/ExSdgtdV06y04cJzawmdft"
            sx={{
              backgroundColor: "#04274d",
              "&:hover": {
                backgroundColor: "#118ab2",
                opacity: 10,
              },
              color: "#fff",
              marginTop: "40px",
              marginLeft: "10%",
              padding: "20px",
              width: "50%",
              borderRadius: "22px",
              "@media (max-width:1000px)": {
                marginLeft: "25%",
              },
            }}
          >
            <Typography
              color="#fff"
              sx={{
                fontFamily: "Josefin Sans, sans-serif",
                fontSize: "20px",
                "@media (max-width:1000px)": {
                  fontSize: "16px",
                },
              }}
            >
              1:1 Mentorship
            </Typography>
          </Button>
        </Grid>
        <Grid
          container
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid md={8} sm={10} xs={12}>
            {/* <Button
              startIcon={
                <LinkedInIcon style={{ fontSize: "40px", color: "#fff" }} />
              }
              href="https://members.linkedin.com/en-in/student/linkedin-premium?fbclid=PAAaZD2I5archP-K-DIkcw4qMEDF7riR7LjIt9yQE0SXEd1KZienB8SMDHJEs"
              sx={{
                backgroundColor: "#F55353",
                "&:hover": {
                  backgroundColor: "#00FFAB",
                  opacity: 10,
                  color: "#fff",
                },
                color: "#000",
                marginTop: "40px",
                marginLeft: "25%",
                padding: "20px",
                width: "50%",
                borderRadius: "22px",
                "@media (max-width:1000px)": {
                  marginLeft: "25%",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Josefin Sans, sans-serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  "@media (max-width:1000px)": {
                    fontSize: "16px",
                  },
                }}
              >
                LinkedIn Premium Free
              </Typography>
            </Button> */}
          </Grid>
        </Grid>

        <Grid xl={12} xs={12} md={12}>
          <Typography
            sx={{
              fontSize: "30px",
              textAlign: "center",
              marginTop: "5%",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            SEMESTERS
          </Typography>
        </Grid>

        <Grid
          container
          xs={9}
          md={7}
          xl={6}
          sx={{
            justifyContent: "center",
            // width: "50%",
            marginTop: "3%",
            marginBottom: "5%",
          }}
        >
          {data.map((d) => (
            <Link
              style={{ textDecoration: "None", color: "white" }}
              to={"/" + d.title}
            >
              <Grid item>
                <Folder sem={d.title} />{" "}
              </Grid>
            </Link>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default notespyqs;
