import React, { Component } from 'react';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'



class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                                <div className="profile-box">
                                    <div className="profile-bgd-box">
                                        <div className="profile-bgd">
                                            <img className="cover-side-img" src={Images.path.wallpapr} />
                                        </div>
                                        <div className="user-box-container">
                                            <img className="profile-img" src={Images.path.userfr} />
                                            <div className="user-left">
                                                <h5 className="user-name">Jessica Does</h5>
                                                <p className="profile-token">Power Token Earned: 0</p>
                                                <a className="like-sec-txt">View Profile</a>
                                                <p className="normal-txt">Wallet Address</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="swapper-catg1"><i class='fas fa-users'></i><a className="circle-side-txt"> Circle</a></div>
                                    <div className="swapper-catg1"><i class="fa fa-handshake-o"></i><a className="circle-side-txt"> Club</a></div>
                                    <div className="swapper-catg1"><i class="fa fa-object-group"></i><a className="circle-side-txt"> Pages</a></div>
                                </div>
                         
            </div>
        );

    }
}


export default Sidebar;