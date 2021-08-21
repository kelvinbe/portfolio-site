import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {animateScroll as scroll} from 'react-scroll'
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import { classes } from 'istanbul-lib-coverage';
import styles from './NavBar.module.css'; 
import {LinkContainer} from 'react-router-bootstrap'
import { useEffect } from 'react';

const NavBar = props => {
  const [scrollNav, setScrollNav] = useState(false)


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


    return (
    <Navbar bg={scrollNav ? 'dark' : ''} variant="dark"  expand='sm' fixed='top' scrollNav={scrollNav}>
    <Container className={styles.firstNav}>
    <Navbar.Brand style ={{cursor: 'pointer'}} onClick={toggleHome}>KevDevelops</Navbar.Brand>
    <Nav className="me-auto" >
      <LinkContainer to="/home">
      <Nav.Link className={styles.item}  onSelect={() => scroll.scrollTo('/home', {
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
        </Container>
  </Navbar>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;