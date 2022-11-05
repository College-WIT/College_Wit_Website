import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Grid from "@mui/material/Grid";
import "../../index.css";
import { Typography } from "@mui/material";
import pic1 from "../../Assets/questions.png";
import pic2 from "../../Assets/leaderboard.png";
import pic3 from "../../Assets/Notespyqs.png";
const Walkaround = () => {
  return (
    <div>
      <Grid container justifyContent="center">
        <Typography
          sx={{
            fontSize: 40,
            color: "black",
            fontFamily: "'urw-din',sans-serif",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "Josefin Sans, sans-serif",
            py: 5,
          }}
        >
          Website Walkaround
        </Typography>
      </Grid>

      <Grid container justifyContent="center">
        <Carousel
          style={{
            width: "80%",
            height: "80%",
            marginBottom: "50px",
            padding: "10px",
            backgroundColor: "#04274d",
          }}
        >
          <Carousel.Item>
            <Grid container justifyContent="center">
              <img
                src={pic1}
                alt="First slide"
                style={{ height: "500px", width: "80%" }}
              />
            </Grid>
          </Carousel.Item>
          <Carousel.Item>
            <Grid container justifyContent="center">
              <img
                src={pic2}
                alt="Second slide"
                style={{ height: "500px", width: "80%" }}
              />
            </Grid>
          </Carousel.Item>
          <Carousel.Item>
            <Grid container justifyContent="center">
              <img
                src={pic3}
                alt="Third slide"
                style={{ height: "500px", width: "80%" }}
              />
            </Grid>
          </Carousel.Item>
        </Carousel>
      </Grid>
    </div>
  );
};

//         </Carousel>
//       </Grid>
//     </div>
//   );
// };

{
  /* <Carousel
        sx={{
          boxShadow: "5px 10px 10px 5px grey",
        }}
      >
        <Carousel.Item interval={1000}>
          <div>
            <img className="slider" src={pic1} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div>
            <img className="slider" src={pic2} alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img className="slider" src={pic3} alt="First slide" />
          </div>
        </Carousel.Item>
      </Carousel> */
}
//       </Grid>
//     </div>
//   );
// };

export default Walkaround;
