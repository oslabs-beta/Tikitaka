import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

export default class Sidebar extends React.Component<any, any>{
    public render(): JSX.Element{
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed-left" fixed="top">
                <Navbar.Brand href="#home">TIKITAKA</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto"  >
                        <Nav.Link href="#overview">Overview</Nav.Link>
                        <Nav.Link href="about.html">About</Nav.Link>
                        <Nav.Link href="">Builds</Nav.Link>
                        <Nav.Link href="">Resources</Nav.Link>
                        <Nav.Link href="">Storage</Nav.Link>
                        <Nav.Link href="">Monitoring</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}