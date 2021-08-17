import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import kev from '../../assets/kev.jpg'
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
        <Tab eventKey="skills"   title="Main Skills" className={styles.tabs}>
     <p className={styles.descriptionOnTabs}>
     UI/UX Designs - <span className={styles.innerText}>Implementation from figma or any other design tool</span>
      </p>   
      <p className={styles.descriptionOnTabs}>
     React JS - <span className={styles.innerText}>Buliding Beautiful Scalable User Interface using React Framework </span>
      </p> 
      <p className={styles.descriptionOnTabs}>
     Django - <span className={styles.innerText}>Buliding Scalable API using Django and Python</span>
      </p>
         
        </Tab>
        <Tab eventKey="experience" title="Experience" className={styles.tabs}>
        <p className={styles.descriptionOnTabs}>
     Jr Developer at Orteo Payment Systems Limited - <span className={styles.innerText}>2019 - 2020</span>
      </p>   
      <p className={styles.descriptionOnTabs}>
      Software Developer Internship at The Silver Logic - <span className={styles.innerText}>2020 - 2021</span>
      </p> 
        </Tab>
        <Tab eventKey="education" title="Education & Certification" className={styles.tabs}>
        <p className={styles.descriptionOnTabs}>
      Andela Bootcamp - <span className={styles.innerText}>2019</span>
      </p> 
        <p className={styles.descriptionOnTabs}>
        Bachelors Of Business and Information Technology - <span className={styles.innerText}>St Pauls University Nairobi, 2016</span>
      </p> 

      <p className={styles.descriptionOnTabs}>
      Diploma in Information Technology - <span className={styles.innerText}>St Pauls University Nairobi, 2015</span>
      </p> 
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
                    <img src={kev} alt="" className={styles.kevImage}/>
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