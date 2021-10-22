import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import iglogo from "../../assets/igad.jpg"
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
    return (
        <>

            <MDBFooter color="unique-color-dark" className="page-footer font-small pt-0">
                <div style={{ backgroundColor: "rgb(204, 48, 55)" }}>
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow className="py-4 d-flex align-items-center">
                            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 white-text">
                                    Get connected with us on social networks!
                                </h6>
                            </MDBCol>
                            <MDBCol md="6" lg="7" className="text-center text-md-right">
                                <Link to="/" className="fb-ic ml-0">
                                    <i className="fab fa-facebook-f white-text mr-lg-4"> </i>
                                </Link>
                                <Link to="/" className="tw-ic">
                                    <i className="fab fa-twitter white-text mr-lg-4"> </i>
                                </Link>
                                <Link to="/" className="gplus-ic">
                                    <i className="fab fa-google-plus-g white-text mr-lg-4"> </i>
                                </Link>
                                <Link to="/" className="li-ic">
                                    <i className="fab fa-linkedin-in white-text mr-lg-4"> </i>
                                </Link>
                                <Link to="/" className="ins-ic">
                                    <i className="fab fa-instagram white-text mr-lg-4"> </i>
                                </Link>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Company name</strong>
                            </h6>
                            {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} /> */}
                            {/* <p>
                                Here you can use rows and columns here to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                            </p> */}
                            <img src={iglogo} className="App2logo" alt=" IGADlogo" style={{ width: "50%" }} />
                        </MDBCol>
                        <MDBCol md="2" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Products</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <Link  to="/https://ipocomcorpo.web.app">OurWork</Link>
                            </p>
                            <p>
                                <Link  to="/https://ipocomcorpo.web.app">OurStory</Link>
                            </p>
                            <p>
                                <Link  to="/https://ipocomcorpo.web.app">Partners</Link>
                            </p>
                            <p>
                                <Link  to="/https://ipocomcorpo.web.app">Staff</Link>
                            </p>
                        </MDBCol>
                        <MDBCol md="3" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Useful links</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <Link  to="/https://ipocomcorpo.web.app">Become an Advocate</Link>
                            </p>
                            <p>
                                <Link  to="/https://ipocomcorpo.web.app">Become an Affiliate</Link>
                            </p>
                            <p>
                                <Link  to="/https://ipocomcorpo.web.app">Work With Us</Link>
                            </p>
                            <p>
                                <Link  to="/https://ipocomcorpo.web.app">Help</Link>
                            </p>
                        </MDBCol>
                        <MDBCol md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Contact</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
                            <p>
                                <i className="fa fa-home mr-3" /> Addis Ababa, Ethiopia
                            </p>
                            <p>
                                <i className="fa fa-envelope mr-3" /> ipocomputers@gmail.com
                            </p>
                            <p>
                                <i className="fa fa-phone mr-3" /> + 251-96-477-56-46
                            </p>
                            <p>
                                <i className="fa fa-print mr-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3" style={{ backgroundColor: "rgba(6,51,51,0.83)" }}>
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Poweredby: <Link to="/https://ipocomcorpo.web.app"> IPOCompCorp </Link>
                    </MDBContainer>
                </div>
            </MDBFooter>
        </>
    );
}


export default Footer
