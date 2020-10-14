import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Footer from './Footer';

class HomePage extends React.Component {
    render() {
        return (
           <div>
                <Row>
                    <Col>This is is the Home Page and This coding style should be followed</Col>
                </Row>
                 <Footer/>
                 </div>
        )
    }
}


export default HomePage;
