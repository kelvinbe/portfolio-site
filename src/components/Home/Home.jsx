import * as React from 'react';
import dark from '../../assets/dark.jpg'
import beno from '../../assets/beno.png'
import styles from './Home.module.css'

const  Home = (props) => {
  return (
      <div className={styles.parent}>
        <img src={dark} alt="" className={styles.image}/>
        <div className={styles.benoContainer}>
        <img src={beno} alt="" className={styles.beno}/>
        </div>
        <div className={styles.wording}>
            <span>WELCOME TO MY WORLD</span>
            <h1 className={styles.greetings}>Hi I'm Kelvin Beno</h1>
            <div className={styles.sliderWrapper}>

            <div className={styles.slider}>
                <div className={styles.sliderText1}>JS Developer.</div>
                <div className={styles.sliderText2}>Content Writer.</div>
                <div className={styles.sliderText3}>React JS enthusiast.</div>
            </div>
            </div>
            <h1 className={styles.greetings}>based in KENYA.</h1>


        </div>
    </div>

  );
};



export default Home