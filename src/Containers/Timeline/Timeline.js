import React, { Component } from 'react';
import './Timeline.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'



class Timeline extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <div>
                    <Row>
                        <Col sm={4}>
                            <div className="side-foto-box">
                                <div className="flex-fotos">
                                    <p className="ft-bld">Fotos</p>
                                    <p className="view-bld">View All</p>
                                </div>
                                <div>
                                    <Row className="foto-spacing">
                                        <div><img className="foto-sm-style" src={Images.path.eventNine} /></div>
                                        <div><img className="foto-sm-style" src={Images.path.eventNine} /></div>
                                        <div><img className="foto-sm-style" src={Images.path.eventNine} /></div>
                                    </Row>
                                    <Row className="foto-spacing">
                                        <div><img className="foto-sm-style" src={Images.path.eventNine} /></div>
                                        <div><img className="foto-sm-style" src={Images.path.eventNine} /></div>
                                        <div><img className="foto-sm-style" src={Images.path.eventNine} /></div>
                                    </Row>

                                    <Row className="foto-spacing">
                                        <div><img className="foto-sm-style" src={Images.path.eventNine} /></div>
                                        <div><img className="foto-sm-style" src={Images.path.eventNine} /></div>
                                        <div><img className="foto-sm-style" src={Images.path.eventNine} /></div>
                                    </Row>
                                </div>
                            </div>

                            <div className="side-foto-box">
                                <div className="flex-fotos">
                                    <p className="ft-bld">Peers</p>
                                    <p className="view-bld">View All</p>
                                </div>
                                <div className="peers-container">
                                    <Row className="peer-spacing">
                                        <div><img className="foto-sm-style" src={Images.path.usertwo} /> <p className="peer-sd-name">Abraham Dons</p> </div>
                                        <div><img className="foto-sm-style" src={Images.path.eventNine} /> <p className="peer-sd-name">Abraham Dons</p></div>
                                        <div><img className="foto-sm-style" src={Images.path.eventOne} /> <p className="peer-sd-name">Abraham Dons</p></div>
                                    </Row>
                                    <Row className="peer-spacing">
                                        <div><img className="foto-sm-style" src={Images.path.eventNine} /> <p className="peer-sd-name">Abraham Dons</p></div>
                                        <div><img className="foto-sm-style" src={Images.path.usertwo} /> <p className="peer-sd-name">Abraham Dons</p></div>
                                        <div><img className="foto-sm-style" src={Images.path.eventOne} /> <p className="peer-sd-name">Abraham Dons</p></div>
                                    </Row>

                                    <Row className="peer-spacing">
                                        <div><img className="foto-sm-style" src={Images.path.eventNine} /> <p className="peer-sd-name">Abraham Dons</p></div>
                                        <div><img className="foto-sm-style" src={Images.path.usertwo} /><p className="peer-sd-name">Abraham Dons</p></div>
                                        <div><img className="foto-sm-style" src={Images.path.eventOne} /><p className="peer-sd-name">Abraham Dons</p></div>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col sm={8}>
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
                        </Col>
                    </Row>
                </div>
            </div>
        );

    }
}


export default Timeline;