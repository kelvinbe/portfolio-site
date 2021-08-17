import React from 'react';
import PropTypes from 'prop-types';
import styles from './Portfolio.module.css'
import {Row, Col, Container, Card} from 'react-bootstrap/'
import twitter from '../../assets/twitter.jpeg'

const projects = ['twitter', 'portfolio', 'secondIdea']


function Portfolio(props) {
    return (
        <div className={styles.portfolioArea}>
            <div>
            <Container>
  <Row className="justify-content-md-center">
    <Col lg='12'>   
        <h1> My Latest Projects</h1>
        <p className={styles.title}>
        These are some of the projects that i have worked on personally
        </p>
    </Col>
  </Row>
  <Row xs={1} md={2} lg={12}>
{projects.map(project => {
return (<Col lg={4} md={6} sm={6} >
<Card>
<Card.Img variant="top" src={twitter} />
</Card>
</Col>)
  })
  }
  </Row>
</Container>
            </div>
        </div>
    );
}

export default Portfolio;

Portfolio.propTypes = {
    
};