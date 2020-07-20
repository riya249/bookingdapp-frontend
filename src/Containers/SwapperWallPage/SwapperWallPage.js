import React, { Component } from 'react';
import './SwapperWallPage.css';
import Images from '../../Containers/Images/Images';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Responsive from '../../Responsive/Responsive.css';
import Timeline from '../../Containers/Timeline/Timeline';
import Pages from '../../Containers/Pages/Pages';
import FotoPage from '../../Containers/FotoPage/FotoPage';
import Club from '../../Containers/Club/Club';
import Header from '../../Components/Header/Header';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

const routes = [
    {
        path: '/timeline',
        exact: true,
        sidebar: () => <div><Timeline/></div>,
        main: () => <h2></h2>
    },
    {
        path: '/pages',
        sidebar: () => <div><Pages/></div>,
        main: () => <h2></h2>
    },
    {
        path: '/Fotos',
        sidebar: () => <div><FotoPage/></div>,
        main: () => <h2></h2>
    },
    {
        path: '/Club',
        sidebar: () => <div><Club/></div>,
        main: () => <h2></h2>
    },
]

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
                            <Router>
                                <Col sm={6}>
                                    <div className="myPage-container">
                                        <div className="cover-bgd">
                                            <img className="cover-img" src={Images.path.wallpapr} />

                                            <div className="profile-box">
                                                <img className="profile-pg-img" src={Images.path.crttwo} />
                                            </div>
                                            <div className="mypage-option">
                                                <li><Link to="/timeline" className="add-txt space">Timeline</Link></li>
                                                <li><Link to="/Fotos" className="add-txt space">Fotos</Link></li>
                                                <li><Link to="/" className="add-txt space">Peers</Link></li>
                                                <li><Link to="/" className="add-txt space">Circle</Link></li>
                                                <li><Link to="/Club" className="add-txt space">Club</Link></li>
                                                <li><Link to="/pages" className="add-txt space">Pages</Link></li>
                                            </div>
                                        </div>
                                    </div>
                                    {routes.map((route) => (
                                        <Route
                                            key={route.path}
                                            path={route.path}
                                            exact={route.exact}
                                            component={route.sidebar}
                                        />
                                    ))}
                                </Col>
                            </Router>
                        </Row>
                    </div>
                </div>
            </div>

        );

    }
}


export default SwapperWallPage;