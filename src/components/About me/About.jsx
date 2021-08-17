import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import kev from '../../assets/kev.jpg'
import {Skills, Experience, Education} from './info';
import { useState } from 'react';


function ControlledTabs() {
  const [key, setKey] = useState('skills');

  return (
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
  );
}


const About = props => {
  return (
    <div className={styles.aboutArea}>
      <div className={styles.aboutWrapper}>
        <div className={styles.aboutContainer}>
          <div>
            <img src={kev} alt="" className={styles.kevImage} />
          </div>
          <div>
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
            <div>
              {ControlledTabs()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {

};

export default About;