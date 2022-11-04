import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Item from "@mui/material/ListItem";
import { BiLinkExternal } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { BiMale, BiFemale } from "react-icons/bi";
import logo from "../Assets/NavLogo.png";
import "../index.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Divider, Typography } from "@mui/material";

const btn = {
  backgroundColor: "#0077b5",
  color: "white",
  fontFamily: "'urw-din',sans-serif",
  fontSize: 12,
  width: "200px",
  //   height: "30px",
  //   width: "200px",
  borderRadius: "5px",

  m: 1,
  p: 1,
  "&:hover": {
    backgroundColor: "#000000",
    color: "white",
  },
};

const styles = {
  textDecoration: "none",
};

export default function Footer() {
  return (
    <footer>
      <Grid
        container
        justifyContent="center"
        sx={{
          background: "black",
          color: "white",
          height: "auto",
          width: "100%",
          position: "relative",
          bottom: "0",
          py: 5,
        }}
      >
        {" "}
        {/* xs={12} sm={10} md={8} lg={5} xl={4} sx={{ px: 6 }} */}
        <Grid item xs={12} sm={10} md={8} lg={6} sx={{ px: 1 }}>
          <Typography
            sx={{
              fontSize: 40,
              color: "#ffffff",
              fontFamily: "'urw-din',sans-serif",
            }}
          >
            College
            <span
              style={{
                color: "#457b9d",
                fontSize: 40,
                fontWeight: "bold",
                fontFamily: "'urw-din',sans-serif",
              }}
            >
              WIT
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: 20,
              color: "#ffffff",
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
            }}
          >
            CollegeWIT is a platform for students to ask questions and connect
            with other students to find answers.
          </Typography>

          <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
            <Button sx={{ fontSize: 20, color: "#ffffff" }}>
              <img src="https://img.icons8.com/color/48/000000/linkedin.png" />
            </Button>
            <Button sx={{ fontSize: 20, color: "#ffffff" }}>
              <img src="https://img.icons8.com/color/48/000000/github--v1.png" />
            </Button>
            <Button sx={{ fontSize: 20, color: "#ffffff" }}>
              <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={7} lg={5} xl={4} sx={{ px: 3 }}>
          <Typography
            sx={{
              fontSize: 25,
              color: "#457b9d",
              fontFamily: "'urw-din',sans-serif",
              my: 2,
            }}
          >
            Designed and Developed by{" "}
          </Typography>

          <Link
            href=" 
              https://www.linkedin.com/in/prathamesh-rajbhoj-2bb157200/"
            target="_blank"
            sx={styles}
          >
            <Button size="small" sx={btn}>
              <LinkedInIcon sx={{ marginRight: 1 }} />
              Pratham Rajbhoj
            </Button>
          </Link>

          <Link
            href=" 
              https://www.linkedin.com/in/kush-munot/"
            target="_blank"
            sx={styles}
          >
            <Button size="small" sx={btn}>
              <LinkedInIcon sx={{ marginRight: 1 }} />
              Kush Munot
            </Button>
          </Link>

          <Link
            href=" https://www.linkedin.com/in/anjallliii/"
            target="_blank"
            sx={styles}
          >
            <Button size="small" sx={btn}>
              <LinkedInIcon sx={{ marginRight: 1 }} />
              Anjali Kushwaha
            </Button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/bhushan-wanjari-952042213/"
            target="_blank"
            sx={styles}
          >
            <Button size="small" sx={btn}>
              <LinkedInIcon sx={{ marginRight: 1 }} />
              Bhushan Wanjari
            </Button>
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
}
//           </Typography>

//           {/* <Typography variant="h6" component="div" gutterBottom>
//             <IoIosPeople /> Designed By
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             <BiMale /> Pratham Rajbhog
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             <BiMale /> Bhusan Wanjari
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             <BiMale /> Kush Munot
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             <BiFemale /> Anjali Kushwaha
//           </Typography> */}
//         </Grid>
//       </Grid>
//     </footer>
//   );
// }
