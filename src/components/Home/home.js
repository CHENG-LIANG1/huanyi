import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import "./home.css"
import weiboPic from "./weibo.png"

function Home(){

    return(
        <div>
            <Container fluid className="cards">
                <Row>
                    <Col>
                        <Card className="card" border="dark">
                            <Card.Header className="header">豆瓣</Card.Header>
                            <Card.Img className="logox" variant="top" src="https://img9.doubanio.com/icon/ul188231394-13.jpg" />
                            <Card.Body>
                            <Card.Link href="https://www.douban.com/people/188231394/" target={"_blank"}>
                                <Card.Title className="title">甜甜怡</Card.Title>
                            </Card.Link>

                            <Card.Subtitle className="subtitle">Douban ID: 188231394</Card.Subtitle>
                            <Card.Subtitle className="subtitle">江苏 南通</Card.Subtitle>
                                
                            </Card.Body>
                            <Card.Footer>
                                加入时间：2018年12月4日
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                        <Card.Header className="header">微博</Card.Header>
                            <Card.Img className="logox" variant="top" src={weiboPic}/>
                            <Card.Body>

                            <Card.Link href="https://weibo.com/n/BlueberRyan" target={"_blank"}>
                                            <Card.Title className="title">BlueberRyan</Card.Title>
                                        </Card.Link>
                                        <Card.Subtitle className="subtitle">喜欢的从来不是类型 是感觉</Card.Subtitle>
                                        <Card.Subtitle className="subtitle">江苏 南通</Card.Subtitle>
                               
                            </Card.Body>
                            <Card.Footer>
                                加入时间：2010年11月1日
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                        <Card.Header className="header">豆瓣</Card.Header>
                            <Card.Img className="logox" variant="top" src="https://img9.doubanio.com/icon/ul188231394-13.jpg" />
                            <Card.Body>
                            <Card.Link href="https://www.douban.com/people/188231394/" target={"_blank"}>
                                            <Card.Title className="title">甜甜怡</Card.Title>
                                        </Card.Link>

                                        <Card.Subtitle className="subtitle">Douban ID: 188231394</Card.Subtitle>
                                        <Card.Subtitle className="subtitle">江苏 南通</Card.Subtitle>
                            
                            </Card.Body>
                            <Card.Footer>
                                加入时间：2018年12月4日
                            </Card.Footer>
                        </Card>
                    </Col>

                </Row>

            </Container>

        </div>
    )

}

export default Home