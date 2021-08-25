import React from 'react';
import mee from '../../assets/me.jpg'
import styles from './me.module.css'

function Me(props) {
    return (
        <div className={styles.beno}>
            <img src={mee} alt="" />
        </div>
    );
}

export default Me;