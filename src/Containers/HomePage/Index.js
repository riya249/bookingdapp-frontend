import React, { Component } from 'react';
import './Homepage.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Responsive from '../../Responsive/Responsive.css';
import Carousel from 'react-bootstrap/Carousel';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Modal from 'react-bootstrap/Modal';
import Header from '../../Components/Header/Header';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'


class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    handleClose = () => {
        this.setState({
            showModal: false,
        })
    }

    render() {
        return (
            <div>
                <div className='booking-hero-bgd'>
                    <Header />
                    <div className='wrapper-container-home'>
                        <Row>
                            <Col sm={4}>
                            <Sidebar/>
                            </Col>
                            <Col sm={4}>
                                <div class="form-field post-form-bg">
                                    <div class="form-field__control">
                                        <textarea id="exampleTextarea" class="form-field__textarea" placeholder="Ledgerise Your thoughts"></textarea>
                                    </div>
                                    <div className="ledger-bottom">
                                    <div className="post-btm-flex"><i class="fa fa-paperclip clip-icon"></i><li className="mb-lg1">ATTACH</li></div>
                                    <div className="post-btm-flex"><li className="mb-lg1"><i class='fas fa-tag tag-icon'></i>TAG</li></div>
                                    <div className="post-btm-flex"><li className="mb-lg1"> <i class='far fa-star star-icon'></i>SWAPPERS WALL ORIGINAL</li></div>
                                    <div className="post-btm-flex"><li className="mb-lg1">POST <i class="fa fa-send send-icon"></i></li></div>
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

                                    <p className="peer-name-txt">Peers you may know</p>
                                    <Row>
                                        <Col sm={4} >
                                            <div className="peer-card">
                                                <img className="peerimg" src={Images.path.eventFive} />
                                                <div className="peer-box">
                                                    <div className="peer-name-txt">Sara Jhonson</div>
                                                    <p className="small-detatil-txt"> 14 Mutual Peers</p>
                                                    <button className="add-peer-btn">Add Peers</button>
                                                </div>
                                            </div>
                                        </Col>

                                        <Col sm={4}>
                                            <div className="peer-card">
                                                <img className="peerimg" src={Images.path.eventFive} />
                                                <div className="peer-box">
                                                    <div className="peer-name-txt">Sara Jhonson</div>
                                                    <p className="small-detatil-txt"> 14 Mutual Peers</p>
                                                    <button className="add-peer-btn">Add Peers</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="peer-card">
                                                <img className="peerimg" src={Images.path.eventFive} />
                                                <div className="peer-box">
                                                    <div className="peer-name-txt">Sara Jhonson</div>
                                                    <p className="small-detatil-txt"> 14 Mutual Peers</p>
                                                    <button className="add-peer-btn">Add Peers</button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
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
                                            <div>
                                                <a>View Shop</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                {/* Bootstrap Modal */}
                <Modal size="lg" show={this.state.showModal} onHide={this.handleClose} className="date-modal-container" >
                    <Modal.Header closeButton>
                        <div className="senEs-header-flex">
                            <div>
                                <img className="buzcafeimg" src={Images.path.eraicon} />
                                <h5>Send Era Swap</h5>
                            </div>
                            <img className="header-swall" src={Images.path.swal} />
                        </div>
                    </Modal.Header>
                    <Modal.Body >
                      <h4>HOW MUCH DO YOU WANT TO SEND ? </h4>
                      <div className="es-amount"></div>
                        <p>Sending ES 0x9CC14A288BB5cb9Ec0e85b606Cb6585BB7ca6a8E</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" className='delete-btn' onClick={() => this.setState({ showDeleteModal: false })}>
                            Send
                        </Button>
                        <Button variant="primary" className='delete-btn' onClick={() => this.setState({ showDeleteModal: false })}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Bootstrap Modal */}

            </div>

        );

    }
}


export default Homepage;