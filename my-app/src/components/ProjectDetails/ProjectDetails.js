import React, { Component, Fragment} from 'react'
import { Container,Row,Button, Col } from 'react-bootstrap'
import FruiteImg from '../../asset/image/frut.jpg'


export default class ProjectDetails extends Component {
  render() {
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
              <Col  lg={6} md={6} sm={12}>
               <img src={FruiteImg} />

               </Col>
              <Col lg={6} md={6} sm={12}>
                <h2 className='serviceName'>Foll Bazzar</h2>
                <p className='serviceDescription'>E-Commerce, also known as e-Business, or electronic business, is simply the sale and purchase of services and goods over an electronic medium, like the Internet.</p>
                 <ul>
                    <li className='serviceDescription'>Suits every budget</li>
                    <li className='serviceDescription'>Hundreds of extensions (plugins)</li>
                    <li className='serviceDescription'>Can sell all kinds of goods (virtual, physical, downloadable, services, etc.)</li>
                    <li className='serviceDescription'>Works with almost all payment gateways</li>
                    <li className='serviceDescription'>Open source can be customized to suit our needs</li>
                    <li className='serviceDescription'>Big community of developers, marketers, and experts</li>
                 </ul>
                
                <Button variant="primary">More Info</Button>
              </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
