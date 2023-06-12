import React, { Component, Fragment } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap';
import RubelImg from '../../asset/image/rubel.JPG'


export default class ClientReview extends Component {
  render() {

    var settings = {
        autoplay:true,
        autoplaySpeed:2000,
        dots: true,
        infinite: true,
        speed: 3000,
        vertical:true,
        verticalSwiping:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
     return (
      <Fragment>
        <Container className='text-center'>
          <h1 className='serviceMainTitle'>CLIENT SAYS</h1>
          <Slider {...settings}>
            <div>
            <Row className='text-center justify-content-center'>
                 <Col lg={6} md={6} sm={12}>
                  <img className='circleImg' src={RubelImg}></img>
                  <h1 className='serviceName'>Web Development</h1>
                  <p className='serviceDescription'>I desing modern user interface and other graphical components for your business and institution graphical components for your business and institution.</p>
                 </Col>
              </Row>
            </div>
            <div>
            <Row className='text-center justify-content-center'>
                 <Col lg={6} md={6} sm={12}>
                  <img className='circleImg' src={RubelImg}></img>
                  <h1 className='serviceName'>Web Development</h1>
                  <p className='serviceDescription'>I desing modern user interface and other graphical components for your business and institution graphical components for your business and institution.</p>
                 </Col>
              </Row>
            </div>
            <div>
              <Row className='text-center justify-content-center'>
                 <Col lg={6} md={6} sm={12}>
                  <img className='circleImg' src={RubelImg}></img>
                  <h1 className='serviceName'>Web Development</h1>
                  <p className='serviceDescription'>I desing modern user interface and other graphical components for your business and institution graphical components for your business and institution.</p>
                 </Col>
              </Row>
            </div>
            
          </Slider>

        </Container>
        
      </Fragment>
    )
  }
}
