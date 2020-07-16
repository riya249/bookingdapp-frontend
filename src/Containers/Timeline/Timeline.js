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
                        <Container>
                         <Row>
                             <Col sm={4}>
                                
                             </Col>
                             <Col sm={8}>
                                 
                             </Col>
                             </Row>
                        </Container>
                    </div>
                </div>
        );

    }
}


export default FotoPage;