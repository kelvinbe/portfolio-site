import React from 'react';
import styles from './About.module.css'




export function Skills(props) {
    return (
        <div className={styles.infoWidth}>
        <p className={styles.descriptionOnTabs}>
          UI/UX Designs - <span className={styles.innerText}>Implementation from figma or any other design tool</span>
        </p>
        <p className={styles.descriptionOnTabs}>
          React JS - <span className={styles.innerText}>Buliding Beautiful Scalable User Interface using React Framework </span>
        </p>
        <p className={styles.descriptionOnTabs}>
          Django - <span className={styles.innerText}>Buliding Scalable API using Django and Python</span>
        </p>
            
        </div>
    );
}

export function Experience(props) {
    return (
        <div className={styles.infoWidth}>
        <p className={styles.descriptionOnTabs}>
          Jr Developer at Orteo Payment Systems Limited - <span className={styles.innerText}>2019 - 2020</span>
        </p>
        <p className={styles.descriptionOnTabs}>
          Software Developer Internship at The Silver Logic - <span className={styles.innerText}>2020 - 2021</span>
        </p>
            
        </div>
    );
}


export function Education(props) {
    return (
        <div className={styles.infoWidth}>
         <p className={styles.descriptionOnTabs}>
          Andela Bootcamp - <span className={styles.innerText}>2019</span>
        </p>
        <p className={styles.descriptionOnTabs}>
          Bachelors Of Business and Information Technology - <span className={styles.innerText}>St Pauls University Nairobi, 2016</span>
        </p>

        <p className={styles.descriptionOnTabs}>
          Diploma in Information Technology - <span className={styles.innerText}>St Pauls University Nairobi, 2015</span>
        </p>
            
        </div>
    );
}





