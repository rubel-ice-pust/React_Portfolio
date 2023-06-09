import React, { Component, Fragment} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import graphicLogo from '../../asset/image/graphics.svg'
import mobileLogo from '../../asset/image/mobile.svg'
import webLogo from '../../asset/image/web.svg'



export default class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' >
              <h1 className='serviceMainTitle'> MY SERVICES</h1>
            <Row>

                <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img src={webLogo}/>
                        <h2 className='serviceName'>Web Development</h2>
                        <p className='serviceDescription'>Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming.</p>
                    </div>
                
                </Col>

                <Col lg={4} md={6} sm={12}>
                    <div className='serviceCard text-center'>
                        <img src={mobileLogo}/>
                        <h2 className='serviceName'>Mobile Development</h2>
                        <p className='serviceDescription'>Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application. </p>
                    </div>
                
                </Col>

                <Col lg={4} md={6} sm={12}>
                   <div className='serviceCard text-center'>
                        <img src={graphicLogo}/>
                        <h2 className='serviceName'>Graphics Design</h2>
                        <p className='serviceDescription'>Graphic design is the creation of visual compositions to solve problems and communicate ideas through typography, imagery, color and form.</p>
                    </div>
        
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}
