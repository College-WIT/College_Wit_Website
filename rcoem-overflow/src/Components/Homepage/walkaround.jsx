import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Grid from '@mui/material/Grid';
import "../../index.css";

const Walkaround = () => {
  return (
    <div >
    
    <Grid container justifyContent="center" sx={{ padding: 5,fontFamily: 'monospace' }}>
      <h1>Website Walkaround</h1>
    </Grid>
    
      <Carousel>
        <Carousel.Item interval={1000}>
        <div><img className='slider'
            src="https://th.bing.com/th/id/OIP.A7TAchvvuFkDLPaAkEfkeQHaD4?pid=ImgDet&rs=1"
            alt="First slide"/></div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Ipsum mollit reprehenderit enim ea incididunt incididunt incididunt. Officia aliqua magna magna exercitation. In proident id sint et velit dolor mollit ea nostrud quis Lorem deserunt sunt. Et nostrud amet adipisicing irure proident eu labore ullamco Lorem reprehenderit ullamco. Nostrud eu fugiat ut laboris.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
        <div><img className='slider'
            src="https://th.bing.com/th/id/OIP.A7TAchvvuFkDLPaAkEfkeQHaD4?pid=ImgDet&rs=1"
            alt="First slide"
          /></div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>In nostrud nostrud laboris fugiat ipsum. Qui ut ex ad irure qui dolore amet occaecat consequat cupidatat. Do consequat est non aliquip elit ea adipisicing ad mollit reprehenderit qui. Duis quis nulla cupidatat Lorem irure excepteur laborum. Commodo voluptate sunt magna eu do aliquip.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <div><img className='slider'
            src="https://th.bing.com/th/id/OIP.A7TAchvvuFkDLPaAkEfkeQHaD4?pid=ImgDet&rs=1"
            alt="First slide"
          /></div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Do ipsum in eiusmod sint irure ea deserunt eu cupidatat. Cupidatat minim et adipisicing eiusmod magna ut cupidatat deserunt proident enim adipisicing. Nostrud proident cillum magna fugiat ipsum magna commodo incididunt voluptate. Elit consectetur aute mollit ad tempor dolore ut elit eu do aliquip reprehenderit laborum labore. Adipisicing enim nostrud aliquip ullamco aliquip quis in.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
   
    </div>
  )
}

export default Walkaround