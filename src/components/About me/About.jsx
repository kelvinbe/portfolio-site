import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import kev from '../../assets/cody.gif'
import {Skills, Experience, Education} from './info';
import { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap'


function ControlledTabs() {
  const [key, setKey] = useState('skills');

  return (
    <Container fluid className={styles.container}>
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      className={styles.tabs}

    >
      <Tab eventKey="skills" title="Main Skills" className={styles.tabs}>
    <Skills/>

      </Tab>
      <Tab eventKey="experience" title="Experience" className={styles.tabs}>
       <Experience />
      </Tab>
      <Tab eventKey="education" title="Education & Certification" className={styles.tabs}>
      <Education />
      </Tab>
    </Tabs>
    </Container>
  );
}


const About = props => {
  return (
        <Container fluid className={styles.aboutArea}>
          <Row>
          <Col xs={12} md={8} lg={6} style={{paddingRight: '80px'}}>
            <img src={kev} alt="" className={styles.kevImage} />
          </Col>
          <Col xs={12} md={8} lg={6}>
            <div className={styles.aboutInner}>
              <h1 className={styles.h1}>About Me</h1>
              <p className={styles.description}>
                I am a software developer with a love for
                developing software that helps solve
                problems. I believe in hard work and in being a
                team player which helps achieve the overall
                goal of the client.
              </p>
            </div>
              {ControlledTabs()}
          </Col>
          </Row>
        </Container>
  );
};

About.propTypes = {

};

export default About;