import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CoursesImg from '../../asset/image/courses.jpg'
import { Link } from 'react-router-dom';

export default class AllCourses extends Component {
  render() {
    return (
        <Fragment>

        <Container className='text-center mt-5'>
            <Row>
                <Col lg={6} md={12} sm={12} className='p-2'>
                  <Row>
                    <Col lg={6} md={6} sm={12} >
                    <img className='courseImg' src={CoursesImg} />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                      <h5 className='text-justify courseTitle'>Web Development</h5>
                      <p className='text-justify courseDes'>I build native and cross platform mobile app for business app for your business.</p>
                        <Link className='float-left courseDetails' to='/CourseDetails'>Details</Link>
                    </Col>
                  </Row>
                
                </Col>
                <Col lg={6} md={12} sm={12} className='p-2'>
                <Row>
                    <Col lg={6} md={6} sm={12} >
                    <img className='courseImg' src={CoursesImg} />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                    <h5 className='text-justify courseTitle'>Web Development</h5>
                      <p className='text-justify courseDes'>I build native and cross platform mobile app for business app for your business.</p>
                      <Link className='float-left courseDetails' to='/CourseDetails'>Details</Link>
                    </Col>
                  </Row>
                </Col>
                 
                 
                <Col lg={6} md={12} sm={12} className='p-2'>
                <Row>
                    <Col lg={6} md={6} sm={12} >
                    <img className='courseImg' src={CoursesImg} />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                    <h5 className='text-justify courseTitle'>Web Development</h5>
                      <p className='text-justify courseDes'>I build native and cross platform mobile app for business app for your business.</p>
                      <Link className='float-left courseDetails' to='/CourseDetails'>Details</Link>                    </Col>
                  </Row>
                </Col>
                <Col lg={6} md={12} sm={12} className='p-2'>
                <Row>
                    <Col lg={6} md={6} sm={12} >
                    <img className='courseImg' src={CoursesImg} />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                    <h5 className='text-justify courseTitle'>Web Development</h5>
                      <p className='text-justify courseDes'>I build native and cross platform mobile app for business app for your business.</p>
                      <Link className='float-left courseDetails' to='/CourseDetails'>Details</Link>                    </Col>
                  </Row>
                </Col>
                <Col lg={6} md={12} sm={12} className='p-2'>
                <Row>
                    <Col lg={6} md={6} sm={12} >
                    <img className='courseImg' src={CoursesImg} />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                    <h5 className='text-justify courseTitle'>Web Development</h5>
                      <p className='text-justify courseDes'>I build native and cross platform mobile app for business app for your business.</p>
                      <Link className='float-left courseDetails' to='/CourseDetails'>Details</Link>                  
                    </Col>
                  </Row>
                </Col>
                <Col lg={6} md={12} sm={12} className='p-2'>
                <Row>
                    <Col lg={6} md={6} sm={12} >
                    <img className='courseImg' src={CoursesImg} />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                    <h5 className='text-justify courseTitle'>Web Development</h5>
                      <p className='text-justify courseDes'>I build native and cross platform mobile app for business app for your business.</p>
                      <Link className='float-left courseDetails' to='/CourseDetails'>Details</Link>
                    </Col>
                  </Row>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
