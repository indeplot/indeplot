import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/Images/logo.svg';
import facebook from '../Assets/Images/facebook.svg';
import twitter from '../Assets/Images/twitter.svg';
import instagram from '../Assets/Images/instagram.svg';
import youtube from '../Assets/Images/youtube.svg';
import {
    Link
} from "react-router-dom";
export default function Footer() {
    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">


                <div className="container-fluid">
                    <div className="row">
                        {/* Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>About Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Story</a></li>
                                <li><a href="/">Clients</a></li>
                                <li><a href="/">Testimonials</a></li>
                                <li><Link to="/contributors">Contributors</Link></li>
                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Services</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">Marketing</a></li>
                                <li><a href="/">Consulting</a></li>
                                <li><a href="/">Development</a></li>
                                <li><a href="/">Design</a></li>
                            </ul>
                        </div>
                        {/* Column 3 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact Us</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">United Kingdom</a></li>
                                <li><a href="/">Japan</a></li>
                                <li><a href="/">Nigeria</a></li>
                                <li><a href="/">China</a></li>
                            </ul>
                        </div>
                        {/* Column 4 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Social</h4>
                            <ul className="list-unstyled">
                                <li><a href="/">  <img src={facebook} alt="facebook" className="icons" /> Facebook</a></li>
                                <li><a href="/"> <img src={twitter} alt="twitter" className="icons" />  Twitter</a></li>
                                <li><a href="/"> <img src={instagram} alt="instagram" className="icons" /> Instagram</a></li>
                                <li><a href="/"> <img src={youtube} alt="youtube" className="icons" />  YouTube</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy; {new Date().getFullYear()} <img height={50} src={logo} alt="logo" /> Indeplot - All Rights Reserved
</p>
                        {/* <img height={50} src={logo} alt="logo"/> */}
                    </div>
                </div>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`


h4{
    padding-bottom: 1rem;
}

.footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);

}
.footer-bottom{
    padding-top: 3rem;
    padding-bottom: 2rem;
}

ul li a {

    color: var(--mainSilverGrey);
}


ul li a: hover{
    color: var(--mainLightGrey);
}

ul li{
    padding-bottom: 10px;
}


.icons{
    height: 20px;
    padding-right: 5px;
    color: var( --mainWhite);
}
`;

