import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css'
import {Form, Button } from 'react-bootstrap';
import kev from '../../assets/worky.jpg'
import { Container, Row, Col } from 'react-bootstrap';



function FormDisplay() {

  return (
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="text" placeholder="Subject" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Your Message"  />
  </Form.Group>
  <Button style={{display: 'flex'}} variant="primary" type="submit">
    Submit
  </Button>
</Form>
  );
}


const Contact = props => {
  return (
    <Container fluid className={styles.aboutArea}>

        <Row  className={styles.aboutContainer}>
        <Col xs={12} md={8} lg={6} style={{paddingRight: '80px'}}>
            <img src={kev} alt="" className={styles.kevImage} />
          </Col>
        <Col xs={12} md={8} lg={6}>
            <div className={styles.aboutInner}>
              <h1 className={styles.h1}>Hire Me.</h1>
              <p className={styles.description}>
                I am available for freelance work. Connect with me via email: <span style={{color: 'white'}}>kelvinbeno526@gmail.com</span>
              </p>
            </div>
              {FormDisplay()}
          </Col>
          
      </Row>
    </Container>
  );
};

Contact.propTypes = {

};

export default Contact;