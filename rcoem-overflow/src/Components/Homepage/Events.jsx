import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const Events = () => {
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
          <Card>
            <CardMedia
              component="img"
              height="100%"
              image="https://i.imgur.com/0aW7mSw.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Josefin Sans, sans-serif" }}
              >
                Roadmap to DSA Workshop
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Josefin Sans, sans-serif" }}
              >
                Do you know what is the one of the most important factor in a
                successful technical interview?👀💻 Yes! You guessed it right!
                It's Data Structures and Algorithms!💪
                <br />
                Confused where to learn from?? 😵‍💫
                <br />
                Don't worry we got your back! 🤜🤛
                <br />
                GeeksforGeeks is bringing to you a Grand Online Workshop:-
                <br />
                🛣️ Roadmap to Data Structures and Algorithms 👨‍🏫 The esteemed
                mentor : Mr. Abhinav Awasthi.
                <br />
                🔺DSA Mentor at GeeksforGeeks.
                <br />
                🔺ICPC Regionalist
                <br />
                🔺5 ⭐ on Codechef!
                <br />
                🔺5K+ Subs on Youtube (CP with Abhinav)
                <br />
                <br />
                🗓️ Date - 8th November at 6 pm
                <br />
                📌 No prerequisites required to attend the workshop.
                <br />
                So what are you waiting for register for this amazing workshop
                now and get your first step taken towards your placement
                preparation journey!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Register Now</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Card>
            <CardMedia
              component="img"
              height="100%"
              image="https://i.imgur.com/LFWnlJB.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Josefin Sans, sans-serif" }}
              >
                Auto Run Season 1
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Josefin Sans, sans-serif" }}
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
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Register Now</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Card>
            <CardMedia
              component="img"
              height="100%"
              image="https://i.imgur.com/LJlNB8h.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontFamily: "Josefin Sans, sans-serif" }}
              >
                Git-For-Geeks
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ fontFamily: "Josefin Sans, sans-serif" }}
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
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Register Now</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Events;
