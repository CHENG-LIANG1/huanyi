import React from 'react'
import { Container, Card, Row, Col, Badge} from 'react-bootstrap'
import "./home.css"
import weiboPic from "./weibo.png"

function Home(){

    return(
        <div>

            <Container fluid className="cards">
                <Row>
                    <Col>
                        <Card className="card" border="dark">
                            <Card.Img className="logox" variant="top" src="https://img9.doubanio.com/icon/ul188231394-13.jpg" />
                            <Card.Body>
                            <Card.Link className="link" href="https://www.douban.com/people/188231394/" target={"_blank"}>
                                <Card.Title className="title">甜甜怡</Card.Title>
                            </Card.Link>
                            <Card.Title className="title"><Badge pill bg="success">豆瓣</Badge></Card.Title>
                            <Card.Subtitle className="subtitle">Douban ID: 188231394</Card.Subtitle>
                            <Card.Subtitle className="subtitle">江苏 南通</Card.Subtitle>
                                
                            </Card.Body>
                            <Card.Footer className="footer">
                                加入时间：2018年12月4日
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <Card.Img className="logox" variant="top" src={weiboPic}/>
                            <Card.Body>

                            <Card.Link className="link" href="https://weibo.com/n/BlueberRyan" target={"_blank"}>
                                            <Card.Title className="title">BlueberRyan </Card.Title>
                                        </Card.Link>
                                        <Card.Title className="title"><Badge pill bg="warning">微博</Badge></Card.Title>
                                        <Card.Subtitle className="subtitle">喜欢的从来不是类型 是感觉</Card.Subtitle>
                                        <Card.Subtitle className="subtitle">江苏 南通</Card.Subtitle>
                               
                            </Card.Body>
                            <Card.Footer className="footer">
                                加入时间：2010年11月1日
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card">
                            <Card.Img className="logox" variant="top" src="http://p1.music.126.net/iKrJixa75VIi46jijqSDAQ==/109951163568759618.jpg?param=180y180" />
                            <Card.Body>
                            <Card.Link className="link" href="https://music.163.com/#/user/home?id=515869930" target={"_blank"}>
                                            <Card.Title className="title">BlueberRyan</Card.Title>
                                        </Card.Link>
                                        <Card.Title className="title"><Badge pill bg="danger">网易云</Badge></Card.Title>
                                        <Card.Subtitle className="subtitle">95后 巨蟹座</Card.Subtitle>
                                        <Card.Subtitle className="subtitle">江苏 南通</Card.Subtitle>
                            
                            </Card.Body>
                            <Card.Footer className="footer">
                                加入时间：2017年6月
                            </Card.Footer>
                        </Card>
                    </Col>

                </Row>

            </Container>

        </div>
    )

}

export default Home