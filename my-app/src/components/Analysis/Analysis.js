import React, { Component, Fragment } from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

export default class Analysis extends Component {

  constructor(){
    super();
    this.state={

      data:[
        {Technology:'Java', Projects:100},
        {Technology:'Kotlin', Projects:40},
        {Technology:'Sql', Projects:90},
        {Technology:'Bootstrap', Projects:95},
        {Technology:'Jquery', Projects:60},
        {Technology:'Reat', Projects:90},
        {Technology:'PHP', Projects:100},
        {Technology:'Angular', Projects:65}

      ]
    }
  }

  render() {
    var blue= "rgba(0,115,230,0.8)"
    return (
      <Fragment>

        <Container className='text-center'>
            <h1 className='serviceMainTitle'>Technology Used</h1>
            <Row>
                <Col style={{width:'100%', height:'300px'}} lg={6} md={12}>

                  <ResponsiveContainer>
                  <BarChart width={100} height={300} data={this.state.data}>
                    <XAxis dataKey="Technology"></XAxis>
                    <Tooltip/>
                    <Bar dataKey="Projects" fill={blue}>

                    </Bar>
                  </BarChart>
                  </ResponsiveContainer>

                </Col>

                <Col lg={6} md={12}>
                  <p className='text-justify des'>With the rapid growth of technology, many people are looking to pursue a career in the tech industry. Among the various fields in this industry, web development and mobile development are two of the most popular choices. While web development involves creating websites and web applications, mobile development involves developing applications for mobile devices such as smartphones and tablets. Specifically, Android development is a type of mobile development that focuses on developing applications for the Android operating system.Web Technology refers to the various tools and techniques that are utilized in the process of communication between different types of devices over the Internet. A web browser is used to access web pages. Web browsers can be defined as programs that display text, data, pictures, animation, and video on the Internet. </p>
                
                </Col>


            </Row>
        </Container>

      </Fragment>
    )
  }
}
