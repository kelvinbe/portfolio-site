import React from 'react';
import PropTypes from 'prop-types';
import styles from './Portfolio.module.css'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import twitter from '../../assets/twitter.jpeg'
import Tilt from 'react-vanilla-tilt'

const projects = [{ proj: { name: 'Modified Twitter App', stack: `React JS ${'  '} Firebase ${' '} HTML5 ${' '} CSS3 ${' '} Javascript` } }, { proj: { name: 'Portfolio Site', stack: 'React JS Firebase HTML5 CSS3' } }, { proj: { name: 'New Proj', stack: 'React JS Firebase HTML5 CSS3' } }]


const visitSite = () => {
  return `https://twitter-api-d8f20.web.app/`
}

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
              console.log('project', project?.twitter?.name)
              return (<Col lg={4} md={6} sm={6} >
                <Tilt style={{ backgroundColor: 'none' }}>
                  <Card>

                    <Card.Img variant="top" src={twitter} />
                    <Card.Text>
                      {project?.proj?.name}
                    </Card.Text>
                    <Card.Text>
                      {project?.proj?.stack}
                      <div className={styles.button}>
                        <Button variant="outline-primary">{project?.proj?.name}</Button>{' '}
                      </div>
                    </Card.Text>
                  </Card>

                </Tilt>
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