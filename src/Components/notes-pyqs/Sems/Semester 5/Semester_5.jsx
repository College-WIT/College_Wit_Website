import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Folder from "../../card";
import { Link } from "react-router-dom";
import "../../../../App";
import Navbar from "../../../Navbar";

const Semester_5 = () => {
  const data = [
    {
      id: 1,
      title: "Database_Management_Systems",
    },
    {
      id: 2,
      title: "Design_&_Analysis_of_Algorithms",
    },
    {
      id: 3,
      title: "Computer_Networks",
    },
    {
      id: 4,
      title: "Mobile_Application_Programming",
    },
    {
      id: 5,
      title: "Computer_Graphics",
    },
    {
      id: 6,
      title: "Design_Patterns",
    },
  ];
  return (
    <div>
      <Navbar />
      <Grid
        container
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid xl={12} xs={12} md={12}>
          <Typography
            sx={{
              fontSize: "30px",
              textAlign: "center",
              marginTop: "1%",
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            Subjects of Semester 5
          </Typography>
        </Grid>

        <Grid
          container
          xs={9}
          md={7}
          xl={6}
          sx={{
            justifyContent: "center",
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
                <Folder sem={d.title} />
              </Grid>
            </Link>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Semester_5;
