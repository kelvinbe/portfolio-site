import React from 'react';
import PropTypes from 'prop-types';
import styles from './Portfolio.module.css'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import twitter from '../../assets/twitter.jpeg'
import port from '../../assets/profile.png'
import blog from '../../assets/blog.jpg'


import Tilt from 'react-vanilla-tilt'
import { Link } from 'react-router-dom'



const projects = [{ proj: { name: 'Modified Twitter Web App', stack: `React JS ${'  '} Firebase ${' '} MaterialUI HTML5 ${' '} CSS3 ${' '} Javascript`, link: 'https://twitter-api-d8f20.web.app/', img: twitter } }, { proj: { name: 'Portfolio Site', stack: 'React JS Firebase HTML5 CSS3', link: '', img: port } }, { proj: { name: 'New Proj', stack: 'React JS Firebase HTML5 CSS3', link: '', img: blog } }]



function Portfolio(props) {
  return (
    <div className={styles.portfolioArea}>
      <div>
        <Container className={styles.container}>
          <Row className="justify-content-md-center">
            <Col xs={12} md={8} lg={6}>
              <h1> My Latest Projects</h1>
              <p className={styles.title}>
                These are some of the projects that i have worked on personally
              </p>
            </Col>
          </Row>
          <Row>
            {projects.map(project => {
              console.log('project', project?.twitter?.name)
              return (<Col xs={12} md={8} lg={4}>
                <Tilt style={{ backgroundColor: 'none' }}>
                  <Card>
                    <Card.Img variant="top" src={project.proj.img} />
                    <Card.Text>
                      {project?.proj?.name}
                    </Card.Text>
                    <Card.Text>
                      {project?.proj?.stack}
                      <div className={styles.button}>
                        <Button as={Link} to={{ pathname: project.proj.link }} target="_blank" variant="outline-primary">{project?.proj?.name}</Button>{' '}
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