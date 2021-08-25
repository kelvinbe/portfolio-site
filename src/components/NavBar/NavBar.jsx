import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {animateScroll as scroll} from 'react-scroll'
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import {Col} from 'react-bootstrap';

import Container from 'react-bootstrap/Container';
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import { classes } from 'istanbul-lib-coverage';
import styles from './NavBar.module.css'; 
import {LinkContainer} from 'react-router-bootstrap'
import { useEffect } from 'react';
// import ApplicationDrawer from '../sidebar/SideBar'

const NavBar = props => {
  const [scrollNav, setScrollNav] = useState(false)
  const [show, showSide] = useState(false)


  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])


  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const onShow = () => {
    showSide(s => !s)
  } 


    return (
    <Navbar  bg={scrollNav ? 'dark' : ''} display={show ? 'none':'flex'} variant="dark"  expand='lg' fixed='top' scrollNav={scrollNav}>
    <Container className={styles.firstNav}>
    <Navbar.Brand style ={{cursor: 'pointer'}} onClick={toggleHome}>KevDevelops</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={onShow}/>
    <div>
   {/* {show && <ApplicationDrawer xs={ 12 } md={ 3 } lg={ 2 } style={{backgroundColor: 'black'}} />} */}
   </div>
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" >
      <LinkContainer to="/">
      <Nav.Link className={styles.item}  onSelect={() => scroll.scrollTo('/', {
    smooth: true,
    offset: -80,
    duration: 500,
    spy:true,
    exact:true
})}>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">

      <Nav.Link className={styles.item} onSelect={() => scroll.scrollTo('/about', {
    smooth: true,
    offset: -80,
    duration: 500,
    spy:true,
    exact:true
})}>About</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/portfolio">

      <Nav.Link className={styles.item} onSelect={() => scroll.scrollTo('/portfolio', {
     smooth: true,
     offset: -80,
     duration: 500,
     spy:true,
     exact:true
})}>Portfolio</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/blog">

      <Nav.Link className={styles.item} onSelect={() => scroll.scrollTo('/blog', {
     smooth: true,
     offset: -80,
     duration: 500,
     spy:true,
     exact:true
})}>Blog</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">

      <Nav.Link className={styles.item} onSelect={() => scroll.scrollTo('/contact', {
    smooth: true,
    offset: -80,
    duration: 500,
    spy:true,
    exact:true
})}>Contact</Nav.Link>
      </LinkContainer>
    </Nav>
        <Nav>
          <Nav.Link href="https://www.facebook.com/kevin.ndungu.96" className={styles.iconSpacing} target='_blank'>
          <img src={facebook} alt="" className={styles.icons}/>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/kelvin-beno-a06ab8175" className={styles.iconSpacing} target='_blank'>
          <img src={linkedin} alt="" className={styles.icons}/>
          </Nav.Link>
          <Nav.Link href="https://twitter.com/kelvinbeno1" className={styles.iconSpacing} target='_blank'>
          <img src={twitter} alt="" className={styles.icons}/>
          </Nav.Link>
       
        </Nav>
        </Navbar.Collapse>

        </Container>
  </Navbar>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;