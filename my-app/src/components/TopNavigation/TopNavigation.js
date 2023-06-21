import React, { Component, Fragment } from 'react'
import { Container, Nav, NavLink, Navbar} from 'react-bootstrap'
import whiteLogo from '../../asset/image/navlogo.svg'
import blueLogo from '../../asset/image/navlogoScroll.svg'
import '../../asset/css/custom.css'
import '../../asset/css/bootstrap.min.css'
import { Link} from 'react-router-dom'

export default class TopNavigation extends Component {

    constructor(props){
        super();
        this.state={
            navBarTitle:"navTitle",
            navVariant:"dark",
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navBarItem:"navItem",
            pageTitle:props.title
        }
    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll',navBarLogo:[blueLogo], navBarBack:'navBackgroundScroll',navBarItem:'navItemScroll'})

        }
        else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:'navTitle',navBarLogo:[whiteLogo],navBarBack:'navBackground',navBarItem:'navItem'})

        }
    }

    componentDidMount(){
        window.addEventListener('scroll',this.onScroll)
    }

  render() {
    return (
      <Fragment>
        <title>{this.state.pageTitle}</title>
        <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed='top' collapseOnSelect expand="lg">
       <Container>
        <Navbar.Brand className='pl-0'><Link className={this.state.navBarTitle} to="/"><img src={this.state.navBarLogo}/>RUBEL HOSSAIN</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          {/* <Nav>
          <Nav.Link>   <NavLink className={this.state.navBarItem}  to='/'>HOME </NavLink>  </Nav.Link>
          <Nav.Link>   <NavLink className={this.state.navBarItem}  to='/service'>SERVICES </NavLink>  </Nav.Link>
          <Nav.Link>   <NavLink className={this.state.navBarItem}  to='/course'>COURSES </NavLink>  </Nav.Link>
          <Nav.Link>   <NavLink className={this.state.navBarItem}  to='/portfolio'>PORTFOLIO </NavLink>  </Nav.Link>
          <Nav.Link>   <NavLink className={this.state.navBarItem}  to='/contact'>CONTACT </NavLink>  </Nav.Link>
          <Nav.Link>   <NavLink className={this.state.navBarItem}  to='/about'>ABOUT </NavLink>  </Nav.Link>

           
          </Nav> */}
                        <Nav>
                          <Nav.Link>   <Link exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/">HOME</Link> </Nav.Link>
                          <Nav.Link>   <Link exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/service">SERVICES</Link> </Nav.Link>
                          <Nav.Link>   <Link exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/course">COURSES</Link> </Nav.Link>
                          <Nav.Link>   <Link exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</Link> </Nav.Link>
                          <Nav.Link>   <Link exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/contact">CONTACT</Link> </Nav.Link>
                          <Nav.Link>   <Link exact activeStyle={{color:'#00a8ee'}} className={this.state.navBarItem} to="/about">ABOUT</Link> </Nav.Link>
                        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </Fragment>
    )
  }
}
