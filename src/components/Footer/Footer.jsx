import React from 'react';
import PropTypes from 'prop-types';
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


const Footer = props => {
    return (
    <Navbar bg="dark" variant="dark"  expand='sm'>
    <Container className={styles.firstNav}>
    <Navbar.Brand>© 2021 KevDevelops. All rights reserved.</Navbar.Brand>
        </Container>
  </Navbar>
    );
};

Footer.propTypes = {
    
};

export default Footer;