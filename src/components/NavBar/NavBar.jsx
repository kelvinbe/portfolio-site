import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import { classes } from 'istanbul-lib-coverage';
import styles from './NavBar.module.css'; 



const NavBar = props => {
    return (
    <Navbar bg="dark" variant="dark"  expand='sm'>
    <Container className={styles.firstNav}>
    <Navbar.Brand href="#home">KevDevelops</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link  className={styles.item} href="#home">Home</Nav.Link>
      <Nav.Link className={styles.item} href="#about">About</Nav.Link>
      <Nav.Link className={styles.item} href="#service">Service</Nav.Link>
      <Nav.Link className={styles.item} href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link className={styles.item} href="#blog">Blog</Nav.Link>
      <Nav.Link className={styles.item} href="#contact">Contact</Nav.Link>
    </Nav>
        <Nav>
          <Nav.Link href="#home" className={styles.iconSpacing} >
          <img src={facebook} alt="" className={styles.icons}/>
          </Nav.Link>
          <Nav.Link href="#home" className={styles.iconSpacing}>
          <img src={linkedin} alt="" className={styles.icons}/>
          </Nav.Link>
          <Nav.Link href="#home" className={styles.iconSpacing}>
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