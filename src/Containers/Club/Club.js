import React, { Component } from 'react';
import './Club.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'



class Club extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className="search-container">
                    <div className="sub-search-flex">
                        <h5 className="myPage-txt">My Pages</h5>
                        <form action="/action_page.php">
                            <input type="search" id="gsearch" className="search-field" name="gsearch" placeholder="Search Pages" />
                            <i class="fa fa-search icon-style"></i>
                        </form>
                    </div>
                    <button className="myPage-btn"> &#x271B; Create</button>
                </div>
                <div className="section-one">
                    <Row>
                        <Col sm={4}>
                            <div className="sec-page-box">
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                <div className="sec-page">
                                    <img className="profile-sec-img" src={Images.path.crttwo} />
                                </div>
                                <h4 className="pg-sec-txt">Photographer</h4>
                                <p className="sec-txt">854 Members</p>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div className="sec-page-box">
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                <div className="sec-page">
                                    <img className="profile-sec-img" src={Images.path.crttwo} />
                                </div>
                                <h4 className="pg-sec-txt">Photographer</h4>
                                <p className="sec-txt">854 Members</p>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div className="sec-page-box">
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                <div className="sec-page">
                                    <img className="profile-sec-img" src={Images.path.crttwo} />
                                </div>
                                <h4 className="pg-sec-txt">Photographer</h4>
                                <p className="sec-txt">854 Members</p>

                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="section-two">
                    <h5 className="myPage-txt">Suggested pages for you</h5>
                    <Row>
                        <Col sm={4}>
                            <div className="sec-page-box">
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                <div className="sec-page">
                                    <img className="profile-sec-img" src={Images.path.crttwo} />
                                </div>
                                <h4 className="pg-sec-txt">Photographer</h4>
                                <p className="sec-txt">854 Members</p>
                                <div className="center-sec-like">
                                    <a className="like-sec-txt">Like</a>
                                </div>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div className="sec-page-box">
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                <div className="sec-page">
                                    <img className="profile-sec-img" src={Images.path.crttwo} />
                                </div>
                                <h4 className="pg-sec-txt">Photographer</h4>
                                <p className="sec-txt">854 Members</p>
                                <div className="center-sec-like">
                                    <a className="like-sec-txt">Like</a>
                                </div>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div className="sec-page-box">
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                <div className="sec-page">
                                    <img className="profile-sec-img" src={Images.path.crttwo} />
                                </div>
                                <h4 className="pg-sec-txt">Photographer</h4>
                                <p className="sec-txt">854 Members</p>
                                <div className="center-sec-like">
                                    <a className="like-sec-txt">Like</a>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4}>
                            <div className="sec-page-box">
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                <div className="sec-page">
                                    <img className="profile-sec-img" src={Images.path.crttwo} />
                                </div>
                                <h4 className="pg-sec-txt">Photographer</h4>
                                <p className="sec-txt">854 Members</p>
                                <div className="center-sec-like">
                                    <a className="like-sec-txt">Like</a>
                                </div>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div className="sec-page-box">
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                <div className="sec-page">
                                    <img className="profile-sec-img" src={Images.path.crttwo} />
                                </div>
                                <h4 className="pg-sec-txt">Photographer</h4>
                                <p className="sec-txt">854 Members</p>
                                <div className="center-sec-like">
                                    <a className="like-sec-txt">Like</a>
                                </div>
                            </div>
                        </Col>

                        <Col sm={4}>
                            <div className="sec-page-box">
                                <img className="cover-sec-img" src={Images.path.eventFour} />
                                <div className="sec-page">
                                    <img className="profile-sec-img" src={Images.path.crttwo} />
                                </div>
                                <h4 className="pg-sec-txt">Photographer</h4>
                                <p className="sec-txt">854 Members</p>
                                <div className="center-sec-like">
                                    <a className="like-sec-txt">Like</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );

    }
}


export default Club;