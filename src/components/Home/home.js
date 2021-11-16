import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import "./home.css"

function Home(){

    return(
        <div>
            <Container fluid className="cards">
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://img9.doubanio.com/icon/ul188231394-13.jpg" />
                            <Card.Body>
                                <Row>
                                    <Col>
                                    <Card.Img className="dblogo" src="https://cdn-icons.flaticon.com/png/512/3669/premium/3669367.png?token=exp=1637036125~hmac=a9ba7be7f21479427103022b9685e252"></Card.Img>
                                    </Col>

                                    <Col>
                                    <Row>
                                        <Card.Link>
                                            <Card.Title>甜甜怡</Card.Title>
                                        </Card.Link>
                                    </Row>

                                    <Row>
                                        <Card.Subtitle className="subtitle">Douban ID: 188231394</Card.Subtitle>
                                    </Row>

                                    <Row>
                                        <Card.Subtitle className="subtitle">江苏 南通</Card.Subtitle>
                                    </Row>

                                    
                                    </Col>

                                </Row>


              
                            </Card.Body>
                            <Card.Footer>
                                加入时间：2018年12月4日
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card>
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>

        </div>
    )

}

export default Home