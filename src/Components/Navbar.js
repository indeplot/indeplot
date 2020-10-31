import React from 'react';
import logo from '../Assets/Images/logo.svg';
import * as ReactBootStrap from 'react-bootstrap';
import {
	Link
} from "react-router-dom";
export default function Navbar() {
	return (
		<ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<ReactBootStrap.Navbar.Brand href="/">
				<img src={logo} alt="logo_icon" style={{ width: '60px' }} />
			</ReactBootStrap.Navbar.Brand>
			<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
				<ReactBootStrap.Nav className="mr-auto">
					<ReactBootStrap.Nav.Link>
						<Link to="/">Home</Link>
					</ReactBootStrap.Nav.Link>
					<ReactBootStrap.Nav.Link>
						<Link to="/">News</Link>
					</ReactBootStrap.Nav.Link>
					<ReactBootStrap.Nav.Link>
						<Link to="/contributors">Contributors</Link>
					</ReactBootStrap.Nav.Link>
				</ReactBootStrap.Nav>
				<ReactBootStrap.Nav>
					<ReactBootStrap.Form inline>
						<ReactBootStrap.FormControl type="text" placeholder="Search" className="mr-sm-2 mb-3 mb-md-0" />
						<ReactBootStrap.Button variant="outline-primary">Search</ReactBootStrap.Button>
					</ReactBootStrap.Form>
				</ReactBootStrap.Nav>
			</ReactBootStrap.Navbar.Collapse>
		</ReactBootStrap.Navbar>
	);
}
