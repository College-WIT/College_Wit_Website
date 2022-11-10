import React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import "../index.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Typography } from "@mui/material";

const btn = {
  backgroundColor: "#0077b5",
  color: "white",
  fontFamily: "Josefin Sans, sans-serif",
  fontSize: 12,
  width: "200px",
  //   height: "30px",
  //   width: "200px",
  borderRadius: "5px",

  m: 1,
  p: 1,
  "&:hover": {
    backgroundColor: "#F4442E",
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
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            College
            <span
              style={{
                color: "#118ab2",
                fontSize: 40,
                fontWeight: "bold",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              Wit
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              color: "#ffffff",
              fontWeight: "300",
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
              fontFamily: "Josefin Sans, sans-serif",
            }}
          >
            CollegeWIT is a platform for students to ask questions and connect
            with other students to find answers.
          </Typography>

          <Typography sx={{ fontSize: 20, color: "#ffffff" }}>
            <Button href="https://www.linkedin.com/in/college-wit-948635256/" sx={{ fontSize: 20, color: "#ffffff" }}>
              <img
                alt="logo"
                src="https://img.icons8.com/color/48/000000/linkedin.png"
              />
            </Button>
            <Button href="https://github.com/collegewit" sx={{ fontSize: 20, color: "#ffffff" }}>
              <img
                alt="logo"
                src="https://img.icons8.com/color/48/000000/github--v1.png"
              />
            </Button>
            <Button href="mailto:collegewit2022@gmail.com" sx={{ fontSize: 20, color: "#ffffff" }}>
              <img
                alt="logo"
                src="https://img.icons8.com/color/48/000000/gmail.png"
              />
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={7} lg={5} xl={4} sx={{ px: 3 }}>
          <Typography
            sx={{
              fontSize: 25,
              color: "#fff",
              fontFamily: "Josefin Sans, sans-serif",
              my: 2,
            }}
          >
            Designed and Developed by{" "}
          </Typography>
          
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
            href="https://www.linkedin.com/in/bhushan-wanjari-952042213/"
            target="_blank"
            sx={styles}
          >
            <Button size="small" sx={btn}>
              <LinkedInIcon sx={{ marginRight: 1 }} />
              Bhushan Wanjari
            </Button>
          </Link>
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
