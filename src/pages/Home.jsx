// Estas importaciones es para generar columnas y filas - Contenedores
import Container from 'react-bootstrap/Container'; //Contenedores
import Row from 'react-bootstrap/Row';  //Filas
import Col from 'react-bootstrap/Col'; //Columnas

// Botones y Cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import React from 'react'

function Home() {
  return (
    <div>
      <Container>
          <Row xs={1} md={2} lg={3} className="p-5">
            {/* Columna 1 */}
            <Col>
              <Card >
                  <Card.Img variant="top" src="https://picsum.photos/200/300" />
                  <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>
            </Col>
            {/*  Columna 2*/}
            <Col>
              <Card >
                  <Card.Img variant="top" src="https://picsum.photos/200/300" />
                  <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>
            </Col>
            {/* Columna 3 */}
            <Col>
              <Card >
                  <Card.Img variant="top" src="https://picsum.photos/200/300" />
                  <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
              </Card>
            </Col>
          
          </Row>
      </Container>
    </div>
  )
}

export default Home

/* TEORIA */
// xs={1} = Nos ayuda a poner las columnas y los espacios

/* Breakpoint	Class infix	Dimensions
X-Small	None	<576px
Small	sm	≥576px
Medium	md	≥768px
Large	lg	≥992px
Extra large	xl	≥1200px
Extra extra large	xxl	≥1400px */