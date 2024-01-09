import React,{useState} from 'react'
import Logo from '../images/logo.png';
import FooterHeading from '../Utils/FooterHeading.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBarsStaggered, faMagnifyingGlass, faGreaterThan
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF, faTwitter, faInstagram, faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import FooterSvg from "../images/footersvg.svg"
import axios from 'axios';

function Footer() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const Data = {
        email: email
    }

    async function onFormSubmit(e) {
        e.preventDefault()
        try {
                await axios.post('https://test-api.majesticarts.com/newsletter/subscribe', Data  ,
                 { headers: { "Accept": 'application/json' } })
                    .then((res) => {
                        
                          console.log(res.data.message)
                          setName(""); 
                          setEmail("");
                        
                    })
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="container-fluid footer-bg max-width-container ">
                <div className="col-10 mx-auto px-cus">
                    <div className="row">
                        <div className='col-lg-2 col-md-2 footer-sec-A'>
                            <div className="">
                                <a className="navbar-brand" href="">
                                    <img src={Logo} width="100%" height="100%" className="d-inline-block align-top" alt="logo" /></a>
                            </div>
                        </div>
                        <div className="col-lg-10 col-md-10 footer-sec-B">
                            <h1 className="hello-h ps-5">HELLO,</h1>
                            <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                                <label htmlFor="name" className="col-sm-12 col-md-6 col-lg-6 name-label">MY NAME IS</label>
                                <div className="col-sm-10 col-md-10 col-lg-10">
                                <input onChange={e => { setName(e.target.value)}}
                                     type="text" value={name} Name="name" className="form-control name-field-cus" id="name" placeholder="Enter Your Name" />
                                 </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                                <label htmlFor="name" className="col-sm-10 col-md-8 col-lg-8 name-label">AND MY EMAIL IS</label>
                                <div className="col-sm-10 col-md-10 col-lg-10">
                                <input onChange={e => { setEmail(e.target.value)}}
                                     type="email" value={email} Name="name" className="form-control name-field-cus" id="name" placeholder="Enter Your Email" />
                                 </div>
                            </div>
                            <div className="footer-button">
                                <a onClick={onFormSubmit}  className="btn btn-footer-submit">SUBMIT
                                    <img src={FooterSvg} className="footer-svg"></img>
                                </a>
                            </div>
                        </div>
                        {/* <div className="wrapper-3">
                            <FooterHeading text="SUBSCRIBE DAILY NEWSLETTER" arc={350} radius={80} />
                        </div> */}

                    </div>
                    <div className="row footer-links-sec">
                        <div className="col-lg-3 col-md-3 text-decoration-none">
                            <div><h3 className="useful-cus">USEFUL LINKS</h3></div>
                            <ul className="list-unstyled">
                                <li className="pb-1"><a href='' className="useful-link">About Majestic Arts</a></li>
                                <li className="pb-1"><a href='' className="useful-link">About Board Members</a></li>
                                <li className="pb-1"><a href='' className="useful-link">Majestic Arts Collection</a></li>
                                <li className="pb-1"><a href='' className="useful-link">Events</a></li>
                                <li className="pb-1"><a href='' className="useful-link">Artists</a></li>
                                <li className="pb-1"><a href='' className="useful-link">Book A Tour</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div><h3 className="corporate-cus">CORPORATE</h3></div>
                            <ul className="list-unstyled">
                                <li className="pb-1"><a href='' className="corp-link">Press</a></li>
                                <li className="pb-1"><a href='' className="corp-link">News</a></li>
                                <li className="pb-1"><a href='' className="corp-link">Privacy Policy</a></li>
                                <li className="pb-1"><a href='' className="corp-link">Careers and</a></li>
                                <li className="pb-1"><a href='' className="corp-link">Announcements</a></li>
                                <li className="pb-1"><a href='' className="corp-link">Book An Appointment</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div><h3 className="supp-cus">SUPPORT</h3></div>
                            <ul className="list-unstyled">
                                <li className="pb-1"><a href='' className="supp-link">Contact Us</a></li>
                                <li className="pb-1"><a href='' className="supp-link">Locations</a></li>
                                <li className="pb-1"><a href='' className="supp-link">FAQ</a></li>
                                <li className="pb-1"><a href='' className="supp-link">Sitemap</a></li>
                                <li className="pb-1"><a href='' className="supp-link">Customer services</a></li>
                                <li className="pb-1"><a href='' className="supp-link">Buyer Protection</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <div><h3 className="services-cus">SERVICES</h3></div>
                            <ul className="list-unstyled">
                                <li className="pb-1"><a href='' className="services-link">Scientific Authentication</a></li>
                                <li className="pb-1"><a href='' className="services-link">Evaluation of Arts</a></li>
                                <li className="pb-1"><a href='' className="services-link">Restoration of Pieces</a></li>
                                <li className="pb-1"><a href='' className="services-link">Locating masterpieces</a></li>
                                <li className="pb-1"><a href='' className="services-link">Facilitating the Sale</a></li>
                                <li className="pb-1"><a href='' className="services-link">Buyer Advising</a></li>
                            </ul>
                        </div>
                        <div className="upper-button d-flex">
                            <a href="#" className="btn btn-upper">
                            <svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/></svg>                            </a>
                        </div>
                        <hr className="hr-cus"></hr>
                        <div className="d-flex justify-content-between last-sec">
                            <p className="text-white">&copy; 2022 Majestic Arts. All rights reserved</p>
                            <div className="">
                                <ul className="d-flex list-unstyled justify-content-center gap-5">
                                    <li className="nav-item">
                                        <a className="nav-link social-nav text-white p-0" href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link social-nav text-white p-0" href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link social-nav text-white p-0" href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                    </li>
                                    <li className="nav-item">
                                        <a type="submit" className="nav-link social-nav text-white p-0" href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Footer