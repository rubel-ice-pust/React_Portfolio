import React, { Component, Fragment } from 'react'
import {Container, Row,Col,Button} from "react-bootstrap";
// import '../../asset/css/custom.css'
// import '../../asset/css/bootstrap.min.css'
import axios from 'axios';
export default class TopBanner extends Component {


// componentDidMount(){


//       axios.get('http://127.0.0.1:8000/HomeTopTitle')
//         .then(function (response) {
//           // handle success
//           console.log(response.data);
//         })
//         .catch(function (error) {
//           // handle error
//           console.log(error);
//         })


// }


  render() {
    return (
        <Fragment>
            <Container fluid="true" className="topFixedBanner p-0">

                <div className='topBannerOverlay'>
                    <Container className='topContent'>
                        <Row>
                            <Col className='text-center'>
                              <h1 className='topTitle'>SOFTWARE ENGINEER</h1>
                              <h4 className='topSubTitle'>Mobile & Web Application</h4>
                              <Button variant="primary">More Info</Button>
                            </Col>
                        </Row>

                    </Container>

                </div>

           
            </Container>


        </Fragment>
    )
  }
}

