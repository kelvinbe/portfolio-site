import React from 'react';
import PropTypes from 'prop-types';
import styles from './Blog.module.css'
import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import mat from '../../assets/material.jpeg'
import apex from '../../assets/apex.png'
import secure from '../../assets/secure.png'
import Tilt from 'react-vanilla-tilt'
import { Link } from 'react-router-dom'



const projects = [{ proj: { name: 'Overriding Material UI Text Field', stack: `Learn how to overide MUI Text Field`, link: 'https://kevdev.hashnode.dev/overriding-material-ui-text-field', img: mat } }, { proj: { name: 'Flask and Docker', stack: 'Learn get started with Docker and Flask', link: 'https://kevdev.hashnode.dev/getting-started-with-flask-and-docker', img: apex } }, { proj: { name: 'Secure Code', stack: 'Writing secure code', link: '', img: secure } }]

function Blog(props) {
  return (
    <div className={styles.portfolioArea}>
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg='12'>
              <h1>Latest News</h1>
              <p className={styles.title}>
                Check out my latest blogs on coding,
                latest technologies and best practises
                and put forward by the vast tech community
              </p>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={12}>
            {projects.map(project => {
              console.log('project', project?.twitter?.name)
              return (<Col lg={4} md={6} sm={6} >
                <Tilt style={{ backgroundColor: 'none' }}>
                  <Card>
                    <Card.Img variant="top" src={project.proj.img} />
                    <Card.Text>
                      {project?.proj?.name}
                    </Card.Text>
                    <Card.Text>
                      {project?.proj?.stack}
                      <div className={styles.button}>
                        <Button as={Link} to={{ pathname: project.proj.link }} target="_blank" variant="outline-primary">READ MORE</Button>{' '}
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

export default Blog;

Blog.propTypes = {

};