import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        {/*<Nav.Link href="#features">Features</Nav.Link>*/}
                        {/*<Nav.Link href="#pricing">Pricing</Nav.Link>*/}
                        <NavDropdown alignRight title="User" id="collasible-nav-dropdown">
                            <NavDropdown.Item disabled href="/profile">Profile</NavDropdown.Item>
                            <NavDropdown.Item disabled href="/logout">Logout</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/about">About</NavDropdown.Item>
                            <NavDropdown.Item href="/test/hello_world">Test</NavDropdown.Item>
                            <NavDropdown.Item href="/no/such/route">No Such Route</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
