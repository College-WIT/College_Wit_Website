import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Cards from "./modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  width: "auto",
  p: 1,
  border: "1px solid #000",
};
const cards = {
  boxShadow: 24,
  border: "1px solid #000",
  borderRadius: 1,
  borderColor: "grey.500",
  maxHeight: 700,
};
const btn = {
  backgroundColor: "#001d3d",
  color: "white",
  p: 1,
  "&:hover": {
    backgroundColor: "white",
    color: "#001d3d",
  },
};

const Events = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        px: "5%",
        py: "2%",
        my: "2%",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Josefin Sans, sans-serif",
          fontWeight: 500,
          fontSize: 40,
          paddingBottom: 3,
        }}
      >
        College Events
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={4} lg={4}>
          <Button onClick={handleOpen}>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Cards />
              </Box>
            </Modal>
            <Card sx={cards}>
              <CardMedia
                component="img"
                height="60%"
                image="https://i.imgur.com/0aW7mSw.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontFamily: "Josefin Sans, sans-serif", fontSize: 20 }}
                >
                  DSA Workshop
                </Typography>
              </CardContent>
              <CardActions>
                <Grid container justifyContent="center">
                  <Button size="small" sx={btn}>
                    Register Now
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Button onClick={handleOpen}>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Cards />
              </Box>
            </Modal>
            <Card sx={cards}>
              <CardMedia
                component="img"
                height="80%"
                image="https://i.imgur.com/LFWnlJB.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontFamily: "Josefin Sans, sans-serif", fontSize: 20 }}
                >
                  Auto Run Season 1
                </Typography>
                {/* <Typography
                variant="body2"
                color="text.secondary"
              sx={{ fontFamily: "Josefin Sans, sans-serif", fontSize: 20 }}
              >
                Big Hello Team Rio 😊👋
                <br />
                Kindly tighten your seat belts and act now! 🤝👇🏻
                <br />
                Your coding contest link is active- https://bit.ly/TeamRIO✅
                <br />
                Get moving..!😎👍🏻
                <br />
                👉Also Spread the news in your respective campus.....float IT. 🫧
                <br />
                ▪Sanjivani College of Engineering
                <br />
                ▪Poornima College of Engineering, Jaipur
                <br />
                ▪Amity University, Noida
                <br />
                ▪KIET Group of Institutions, Ghaziabad
                <br />
                ▪Birla Vishwakarma Mahavidylaya, Gujarat
                <br />
                ▪Galgotias Cllege of Engineering & Technology
                <br />
                ▪GLA University, Mathura
                <br />
                ▪M.H. Saboo Siddik College Of Engineering
                <br />
                ▪SAGE University, Indore
                <br />
                ▪Shri Ramdeobaba College of Engineering & Management, Nagpur
                <br />
                ▪Jain University, Bangalore
                <br />
                Best Regards
                <br />
                GeeksforGeeks 💚
                <br />
              </Typography> */}
              </CardContent>
              <CardActions>
                <Grid container justifyContent="center">
                  <Button size="small" sx={btn}>
                    Register Now
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Button>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Button onClick={handleOpen}>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Cards />
              </Box>
            </Modal>
            <Card sx={cards}>
              <CardMedia
                component="img"
                height="80%"
                image="https://i.imgur.com/LJlNB8h.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{ fontFamily: "Josefin Sans, sans-serif", fontSize: 20 }}
                >
                  Git-For-Geeks
                </Typography>
                {/* <Typography
                variant="body2"
                color="text.secondary"
              sx={{ fontFamily: "Josefin Sans, sans-serif", fontSize: 20 }}
              >
                💥Hello Techies!
                <br />
                GeeksforGeeks RCOEM chapter invites you to its very first
                offline event!✨
                <br />
                🔸GIT-FOR-GEEKS🔸
                <br />
                Hop Onboard! The ship is about to leave for the exploration of
                the Open Source World!🚢
                <br />
                Meet your captain! Mr. Vedant Khairnar
                <br />
                ♦ Organizer at GDG Cloud Nagpur
                <br />
                ♦ Developer Advocate at CatalogicSW
                <br />
                ♦ And of course a GEEK! 🤓
                <br />
                VOYAGE SCHEDULE: 🔹The amazing journey begins on 15th OCTOBER
                2022 <br />
                🔹Boarding from MBA Auditorium!
                <br />
                🔹Departure time - 2:30 pm <br />
                🔹2 hour session
                <br />
                PERKS: 🔸Hands-on experience on Git, GitHub and Open Source
                <br />
                🔸Learn from an Industry Experts
                <br />
                🔸Real-time contribution experience
                <br />
                SOUVENIRS: 🎁 Goodies and Swags <br />
                🎁 Participation certificates
                <br />
                Registration link:
                <br />
                https://forms.gle/EUmASUYKvSie3pLX7
                <br />
                Social media handles of GfG RCOEM : https://linktr.ee/gfgrcoem
                <br />
                ✨You are invited to this GEEK-y and fun-filled ride!
                <br />
                Limited seats! Hurry up!
              </Typography> */}
              </CardContent>
              <CardActions>
                <Grid container justifyContent="center">
                  <Button size="small" sx={btn}>
                    Register Now
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Events;
