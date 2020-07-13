import React, { Component } from 'react';
import './FotoPage.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'



class FotoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                    <div className='wrapper-container-home'>
                        <div className="search-container">
                            <div className="sub-search-flex">
                                <h5 className="myPage-txt">Fotos</h5>
                            </div>
                            <button className="myPage-btn">Add Fotos</button>
                        </div>
                        <Container>
                            <Row>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                            </Row>

                            <Row>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                                <Col sm={3}>
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
        );

    }
}


export default FotoPage;