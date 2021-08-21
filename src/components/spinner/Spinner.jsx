import react from 'react'
import {Spinner} from 'react-bootstrap/'
import styles from './Spinner.module.css'; 





const SpinnerS = () => {

    return (
        <div className={styles.spinner}>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutContainer}>
            <div>
            </div>
            <div>
              <div className={styles.tell}>
                <h1 className={styles.h1}>About Me</h1>
                <p className={styles.description}>
                <Spinner animation='grow' variant='danger'/>
                </p>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}


export default SpinnerS