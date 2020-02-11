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
                        <section>
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">A/B Test</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Distributed Tracing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Request History</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                            </ul>
                        </section>
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                            </div>
                            <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">asdf</div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">bdfdfaf</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">cdasdfs</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">dsafdfasdf</div>
                        </div>
                        {/* <section id="about">
                            <h3> adsfajsdfoij ABOUT PAGE</h3>
                            <p>lorem ipsum</p>
                        </section> */}

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