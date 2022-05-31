import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './walkaround.css'


const walkaround = () => {
  return (
    <div >
      <Carousel>
        <Carousel.Item interval={1000}>
        <div><img className='slider'
            src="https://th.bing.com/th/id/OIP.A7TAchvvuFkDLPaAkEfkeQHaD4?pid=ImgDet&rs=1"
            alt="First slide"/></div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
        <div><img className='slider'
            src="https://th.bing.com/th/id/OIP.A7TAchvvuFkDLPaAkEfkeQHaD4?pid=ImgDet&rs=1"
            alt="First slide"
          /></div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
         <div><img className='slider'
            src="https://th.bing.com/th/id/OIP.A7TAchvvuFkDLPaAkEfkeQHaD4?pid=ImgDet&rs=1"
            alt="First slide"
          /></div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default walkaround