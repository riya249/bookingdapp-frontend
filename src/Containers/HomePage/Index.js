import React, { Component } from 'react';
import './Homepage.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Responsive from '../../Responsive/Responsive.css';
import Header from '../../Components/Header/Index';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'


const routes = [
    {
        path: '/',
        exact: true,
        sidebar: () => <div className="ticket-wrap-para">List your event on BookingDapp by simply, clicking on Create an Event button, and mention all the required information of your event like – the Title, Description, Venue, Date, and Seat Map of your event..</div>,
    },
    {
        path: '/section2',
        sidebar: () => <div className="ticket-wrap-para">Once your event is successfully listed, add the number of tickets you are adding for sale, once your event tickets are listed, will connect you with your participants directly, in a P2P mode.</div>,

    },
    {
        path: '/section3',
        sidebar: () => <div className="ticket-wrap-para">Now, that all the process is completed, you can receive the value you deserve by selling your tickets directly, to the purchaser in the Peer-to-Peer mode, without paying huge cuts or multi-layer middlemen charges</div>,

    },
]

class Homepage extends Component {
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
                                <div className="profile-box">
                                    <div className="profile-bgd-box">
                                        <div className="profile-bgd">
                                        </div>
                                        <div className="profile-img"></div>
                                        <div>
                                            <h5 className="user-name">Jessica Does</h5>
                                            <p className="profile-token">Power Token Earned: 0</p>
                                        </div>
                                    </div>
                                    <a>View Profile</a>
                                    <p className="normal-txt">Wallet Address</p>
                                </div>
                                <div>
                                    <div className="swapper-catg1"><a> Circle</a></div>
                                    <div className="swapper-catg1"><a> Club</a></div>
                                    <div className="swapper-catg1"><a> Pages</a></div>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <div class="form-field">
                                    <div class="form-field__control">
                                        <textarea id="exampleTextarea" class="form-field__textarea" placeholder="Ledgerise Your thoughts"></textarea>
                                    </div>
                                    <div className="ledger-bottom">

                                        <li className="mb-lg1"><i class="fa fa-paperclip"></i>ATTACH</li>
                                        <li className="mb-lg1"><i class='fas fa-tag'></i>TAG</li>
                                        <li className="mb-lg1"> <i class='far fa-star'></i>SWAPPERS WALL ORIGINAL</li>
                                        <li className="mb-lg1"><i class="fa fa-send"></i>POST</li>

                                    </div>
                                </div>

                                <div className="ledger-post-container">
                                    <div className="ledger-flex-post">
                                        <img className="small-profile-img" src={Images.path.imgProfile} />
                                        <div>
                                            <h5 className="user-name">Jessica Does</h5>
                                            <p className="small-detatil-txt">70 Views</p>
                                            <p className="small-detatil-txt">Shared to public</p>
                                            <p className="small-detatil-txt">Mar 10,2020  12.05 AM</p>
                                        </div>
                                    </div>
                                    <p className="post-txt">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it </p>
                                    <img className="post-ledgerimg" src={Images.path.eventNine} />
                                    <div className="post-status-container">
                                    <i class='far fa-thumbs-up'></i>
                                    <i class='far fa-thumbs-down'></i>
                                    <i class='fas fa-comment-alt'></i>
                                    <i class='fas fa-share'></i>
                                    </div>
                                </div>

                                <div className="peers-slide-container">
                                    
                                    </div>
                            </Col>
                            <Col sm={3}>
                                <div className="latest-container">
                                    <h4 className="latest-head">Latest News</h4>
                                    <div className="news-section">
                                        <div className="news-dark">It is a long established fact that a reader will be distracted by the readable content </div>
                                        <p className="news-light">Google News 30 minutes ago</p>
                                    </div>

                                    <div className="news-section">
                                        <div className="news-dark">It is a long established fact that a reader will be distracted by the readable content </div>
                                        <p className="news-light">Google News 30 minutes ago</p>
                                    </div>

                                    <div className="news-section">
                                        <div className="news-dark">It is a long established fact that a reader will be distracted by the readable content </div>
                                        <p className="news-light">Google News 30 minutes ago</p>
                                    </div>

                                    <div className="news-section">
                                        <div className="news-dark">It is a long established fact that a reader will be distracted by the readable content </div>
                                        <p className="news-light">Google News 30 minutes ago</p>
                                    </div>

                                    <div className="news-section">
                                        <div className="news-dark">It is a long established fact that a reader will be distracted by the readable content </div>
                                        <p className="news-light">Google News 30 minutes ago</p>
                                    </div>
                                </div>

                                <div className="recommend-container">
                                    <div className="recomm-flex">
                                        <h4 className="Recommends-head">Recommends Ads</h4>
                                        <p className="add-txt">Add New</p>
                                    </div>
                                    <div className="add-box-detail">
                                        <img className="add-img-style" src={Images.path.advertDefault} />
                                        <img className="add-img-style" src={Images.path.advertDefault} />
                                    </div>
                                </div>

                                <div className="recommend-container">
                                    <div className="recomm-flex">
                                        <h4 className="Recommends-head">Shops Near You</h4>
                                        <img className="buzcafeimg" src={Images.path.buzcafePng} />
                                    </div>
                                    <div className="shop-flex-box">
                                    <img className="shops-img" src={Images.path.eventOne} />
                                    <div>
                                    <div className="news-dark">Shop Name</div>
                                    <p className="small-detatil-txt">Category</p>
                                    <p className="small-detatil-txt"><span>Location:</span>xyz hjbsjdbha</p>
                                    <p className="small-detatil-txt"><span>Contact:</span>78965412</p>
                                    </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>

        );

    }
}


export default Homepage;