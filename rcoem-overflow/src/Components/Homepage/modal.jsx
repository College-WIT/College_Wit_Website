import React from "react";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Cards = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 500 }}>
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
            successful technical interview?👀💻 Yes! You guessed it right! It's
            Data Structures and Algorithms!💪
            <br />
            Confused where to learn from?? 😵‍💫
            <br />
            Don't worry we got your back! 🤜🤛
            <br />
            GeeksforGeeks is bringing to you a Grand Online Workshop:-
            <br />
            🛣️ Roadmap to Data Structures and Algorithms 👨‍🏫 The esteemed mentor
            : Mr. Abhinav Awasthi.
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
            So what are you waiting for register for this amazing workshop now
            and get your first step taken towards your placement preparation
            journey!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Register Now</Button>
        </CardActions>

        <Link href="/">
          <Button>Close</Button>
        </Link>
      </Card>
    </div>
  );
};

export default Cards;
