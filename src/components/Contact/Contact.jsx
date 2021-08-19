import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css'
import {Form, Button } from 'react-bootstrap';
import kev from '../../assets/kev.jpg'



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
    <div className={styles.aboutArea}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContainer}>
        <div>
            <div className={styles.aboutInner}>
              <h1 className={styles.h1}>Hire Me.</h1>
              <p className={styles.description}>
                I am available for freelance work. Connect with me via email: <span style={{color: 'white'}}>kelvinbeno526@gmail.com</span>
              </p>
            </div>
            <div>
              {FormDisplay()}
            </div>
          </div>
          <div>
            <img src={kev} alt="" className={styles.kevImage} />
          </div>

        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {

};

export default Contact;