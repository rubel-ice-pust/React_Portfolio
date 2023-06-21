import React, { Component,Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { BigPlayButton, Player } from 'video-react';

export default class CourseDetails extends Component {
  render() {
    return (
        <Fragment>

        <Container fluid="true" className="topPageBanner p-0">

        <div className='topPageOverlay'>
            <Container className='topPageContentCourse'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                      <h3 className='courseFullTitle'>Full Dynamic Website with Admin Panel</h3>
                      <h5 className='courseSubTitle'>Total Lecture=30</h5>
                      <h5 className='courseSubTitle'>Total Students=30</h5>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                     <p className='courseDes text-justify'>I am a highly talented, experienced, professional and cooperative software engineer, I am working in programming and web world for more than 4 years .I assure you a wide range of quality IT services. Web development, mobile app development and UI design the major filed i am expert in. Moreover i have teaching passion. I makes video tutorial to share my knowledge. My over all skill makes me a complete software developer, so you can hire me for your projects</p>
                    </Col>
                </Row>
            </Container>
            </div>
            </Container>

            <Container className='mt-5'>
            

                <Row>
                    <Col lg={6} md={6} sm={12}>
                    
                    <h1 className='serviceName'>Skill Your Get</h1>
                     <ul className='serviceDescription'> 
                        <li>These websites are very flexible.</li>
                        <li>In these websites the content can be quickly changed on the user’s computer without new page request to the web browser.</li>
                        <li>In these websites the owner have the ability to simply update and add new content to the site.</li>
                        <li>These websites are featured with content management system, e-commerce system and intranet or extranet facilities.</li>
                        <li>Most of the dynamic web content, is assembled on the web using server-scripting languages.</li>
                        <li>It provides a user-friendly interactive interface for users.</li>
                     </ul>
                      <Button variant="primary">More Info</Button>
                      </Col>
                    <Col lg={6} md={6} sm={12}>
                    <Player>
                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        <BigPlayButton position='center'/>
                    </Player>
                    </Col>
                </Row>
            </Container>



      
      </Fragment>
    )
  }
}
