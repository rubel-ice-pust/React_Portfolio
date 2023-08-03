import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import CoursesImg from '../../asset/image/courses.jpg'
import { Link } from 'react-router-dom';
import RestClient from '../../RestAPI/RestClient';
import AppUrl from '../../RestAPI/AppUrl';

export default class Courses extends Component {


    constructor(){
          super();
          this.state={
            myData:[]
          }
        }


        componentDidMount(){
          RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
            this.setState({myData:result})

          });
        }
  render() {


        const myList =this.state.myData;
        const myView= myList.map(myList=>{

    return <Col lg={6} md={12} sm={12} className='p-2'>
      <Row>
        <Col lg={6} md={6} sm={12} >
        <img className='courseImg' src={myList.small_img} />
        </Col>
        <Col lg={6} md={6} sm={12}>
          <h5 className='text-justify courseTitle'>{myList.long_title}</h5>
          <p className='text-justify courseDes'>{myList.short_des}</p>
            <Link className='float-left courseDetails' to='/CourseDetails'>Details</Link>
        </Col>
      </Row>
    
    </Col>
  })
    return (
              <Fragment>

                <Container className='text-center'>
                 <h1 className='serviceMainTitle'>Courses</h1>
                    <Row>
                    
                    {myView}
                       
                    </Row>
                </Container>
              </Fragment>
    )
  }
}
