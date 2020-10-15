import React from 'react';
import {Row,Col } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';

class HomePage extends React.Component {
    render() {
        return (
           <div>
               <Navbar/>
                <Row>
                    <Col>This is is the Home Page and This coding style should be followed</Col>
                </Row>
                 <Footer/>
                 </div>
        )
    }
}


export default HomePage;
