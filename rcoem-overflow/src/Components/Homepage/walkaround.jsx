import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Grid from '@mui/material/Grid';
import "../../index.css";
import { Typography } from '@mui/material';
import pic1 from '../../Assets/questions.png'
import pic2 from '../../Assets/leaderboard.png'
import pic3 from '../../Assets/Notespyqs.png'
const Walkaround = () => {
  return (
    <div >

      <Grid container justifyContent="center" >
        <Typography sx={{
          fontSize: 60,
          color: '#000000',
          fontFamily: "'urw-din',sans-serif",
          marginTop: "50px",
          marginBottom: "50px"
        }}>Website Walkaround
        </Typography>
      </Grid>


      <Carousel sx={{
        boxShadow: "5px 10px 10px 5px grey",
      }}>
        <Carousel.Item interval={1000}>
          <div>
            <img className='slider'
              src={pic1}
              alt="First slide" />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <div><img className='slider'
            src={pic2}
            alt="First slide"
          /></div>
        </Carousel.Item>
        <Carousel.Item>
          <div><img className='slider'
            src={pic3}
            alt="First slide"
          /></div>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}

export default Walkaround;