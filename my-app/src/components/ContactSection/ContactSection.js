import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import { Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

export default class ContactSection extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
          <Row>
            <Col lg={6} md={6} sm={12}>
                <h1 className='serviceName'>Quick Connect</h1>
             <Form>
                <Form.Group >
                    <Form.Label className='serviceDescription'>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group >
                    <Form.Label className='serviceDescription'>Email Address</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>
                <Form.Group >
                    <Form.Label className='serviceDescription'>Message</Form.Label>
                    <Form.Control as="textarea" rows={3}/>
                </Form.Group>

                <Button className='mt-3' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
            </Col>
            <Col lg={6} md={6} sm={12}>
            <Col lg={3} md={6} sm={12} className='pl-5 text-justify'>
            <h1 className='serviceName '>Discuss Now</h1>
            <p className='serviceDescription'>Bangabandhu Sheikh Mujibur Rahman Hall, PUST</p>
            <p className='serviceDescription'> <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>rubel.pust06@gmail.com</p>
            <p className='serviceDescription'> <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>01795662879</p>
            </Col> 
            
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}
