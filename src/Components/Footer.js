import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/Images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
	return (
		<FooterContainer className="main-footer">
			<div className="footer-middle pl-2 pr-2">
				<div className="container-fluid">
					<div className="row">
						{/* Column 1 */}
						<div className="col-md-3 col-sm-6">
							<h4>About Us</h4>
							<ul className="list-unstyled">
								<li><a href="/">Story</a></li>
								<li><a href="/">Clients</a></li>
								<li><a href="/">Testimonials</a></li>
								<li></li>
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
								<li><a className="icons" href="/"><FontAwesomeIcon icon={faFacebookF} /> Facebook</a></li>
								<li><a className="icons" href="/"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
								<li><a className="icons" href="/"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
								<li><a className="icons" href="/"><FontAwesomeIcon icon={faYoutube} />  YouTube</a></li>
							</ul>
						</div>
					</div>
					{/* Footer Bottom */}
					<hr></hr>
					<div className="footer-bottom p-1">
						<p className="text-xs-center">
							&copy; {new Date().getFullYear()} <img height={50} src={logo} alt="logo" /> Indeplot - All Rights Reserved </p>
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
	position: relative;
	text-decoration: none;
}

ul li a:hover {
	transition:0.2s;
    color: var(--mainWhite);
}

ul li a::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 0.5px;
	bottom: 0;
	left: 0;
	background-color: var(--mainWhite);
	visibility: hidden;
	transform: scaleX(0);
	transition: all 0.2s ease-in-out 0s;
}

ul li a:hover::before {
	visibility: visible;
	transform: scaleX(1);
}

ul li{
    padding-bottom: 10px;
}

.icons{
    height: 20px;
    padding-right: 5px;
    color: var( --mainLightGrey);
}

h4 {
	width:fit-content;
	background: -webkit-linear-gradient(to right,#fc9a81 0%, #f56794 35%, #48e5eb 100%);
	background: linear-gradient(to right,#fc9a81 0%, #f56794 35%, #48e5eb 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;  
}
`;

