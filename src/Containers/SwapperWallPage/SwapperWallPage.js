import React, { Component } from 'react';
import './SwapperWallPage.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Responsive from '../../Responsive/Responsive.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../Components/Header/Header';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'



class SwapperWallPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div className='booking-hero-bgd'>
                    <Header />
                    <div className='wrapper-container-home'>
                        <Row>
                            <Col sm={4}>
                                <div className="main-page-box">
                                    <div className="like-pg-txt">
                                        Liked Pages
                                    </div>
                                    <div className="page-list">
                                        <img className="page-img" src={Images.path.advertDefault} />
                                        <a className="pg1">Page Name</a>
                                    </div>

                                    <div className="page-list">
                                        <img className="page-img" src={Images.path.advertDefault} />
                                        <a className="pg1">Page Name</a>
                                    </div>

                                    <div className="page-list">
                                        <img className="page-img" src={Images.path.advertDefault} />
                                        <a className="pg1">Page Name</a>
                                    </div>

                                    <div className="page-list">
                                        <img className="page-img" src={Images.path.advertDefault} />
                                        <a className="pg1">Page Name</a>
                                    </div>
                                </div>

                            </Col>
                            <Col sm={6}>
                                <div className="myPage-container">
                                    <div className="cover-bgd">
                                        <img className="cover-img" src={Images.path.wallpapr} />

                                        <div className="profile-box">
                                            <img className="profile-pg-img" src={Images.path.crttwo} />
                                        </div>
                                        <div className="mypage-option">
                                            <li className="add-txt space">Timeline</li>
                                            <li className="add-txt space">Fotos</li>
                                            <li className="add-txt space">Peers</li>
                                            <li className="add-txt space">Circle</li>
                                            <li className="add-txt space">Club</li>
                                            <li className="add-txt space">Pages</li>
                                        </div>
                                    </div>
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
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>

        );

    }
}


export default SwapperWallPage;