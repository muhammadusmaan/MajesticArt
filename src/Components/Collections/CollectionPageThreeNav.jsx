import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBarsStaggered,
    faMagnifyingGlass,
    faGreaterThan, faArrowLeftLong, faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../images/logo.png";
import MemberNavBg from "../../images/nav1.jpg"
import NavbarBg from "../../images/bg-logo.png";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import img7 from "../../images/7.jpeg";
import CircleLines from "../../images/circlelines.png";
import CollectionPage3NavBg from "../../images/nav3.jpg"

function CollectionPageThreeNav() {
    const [isSearch, setIsSearch] = useState(false);

    const openNav = () => {
        if (document.getElementById("mySidenav")) {
            document.getElementById("mySidenav").style.width = "100%";
            document.getElementById("body").style.overflowY = "hidden";
        }
    };
    const closeNav = () => {
        if (document.getElementById("mySidenav")) {
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("body").style.overflowY = "unset";

        }
    };
    return (
        <>
            <div className="container-fluid px-0">
                <div>
                    <img className="img-fluid about-bg-nav" src={CollectionPage3NavBg}></img>
                </div>
                {/* <div class="card-img-overlay card-img-overlay-aboutNav d-flex justify-content-center"></div> */}
                <h1 className="About-nav-heading">Every canvas is a Journey <br></br> all its own</h1>
                <div className="arrow-down-aboutNav">
                    <a href="#" className='arrow-2-aboutnav arrow-right-2-aboutnav'>
                        <span className='arrow-down-about'>⟵</span>
                        <small className='arrow-box-right-about-nav'></small>
                        <small className='arrow-box-right-layer-aboutnav'></small>
                    </a>
                </div>
                <div id="mySidenav" className="sidenav">
                    <button
                        type="submit"
                        className="closebtn pe-lg-5 pe-md-5"
                        onClick={() => {
                            closeNav();
                        }}
                    >
                        ⟵
                    </button>
                    <ul className="navbar-ul nav_left_list list-unstyled text-start">
                        <li>
                            <a className="nav-btn-fs" href="/">
                                Home &nbsp;{" "}
                                <FontAwesomeIcon
                                    className="greater-icon"
                                    icon={faGreaterThan}
                                />
                            </a>
                        </li>
                        <li>
                            <a className="nav-btn-fs" href="/about">
                                About &nbsp;{""}
                                <FontAwesomeIcon
                                    className="greater-icon"
                                    icon={faGreaterThan}
                                />
                            </a>
                        </li>
                        <li>
                            <a className="nav-btn-fs" href="/board-members">
                                Board Members &nbsp;{" "}
                                <FontAwesomeIcon
                                    className="greater-icon"
                                    icon={faGreaterThan}
                                />
                            </a>
                        </li>
                        <li>
                            <a className="nav-btn-fs" href="/CollectionMain">
                                Collection &nbsp;{" "}
                                <FontAwesomeIcon
                                    className="greater-icon"
                                    icon={faGreaterThan}
                                />
                            </a>
                        </li>
                        <li>
                            <a className="nav-btn-fs" href="/service">
                                Services &nbsp;{" "}
                                <FontAwesomeIcon
                                    className="greater-icon"
                                    icon={faGreaterThan}
                                />
                            </a>
                        </li>
                        <li>
                            <a className="nav-btn-fs" href="/events">
                                Events &nbsp;{" "}
                                <FontAwesomeIcon
                                    className="greater-icon"
                                    icon={faGreaterThan}
                                />
                            </a>
                        </li>
                        <li>
                            <a className="nav-btn-fs" href="/NewsOne">
                                News &nbsp;{" "}
                                <FontAwesomeIcon
                                    className="greater-icon"
                                    icon={faGreaterThan}
                                />
                            </a>
                        </li>
                        <li>
                            <a className="nav-btn-fs" href="/Contact">
                                Contact &nbsp;{" "}
                                <FontAwesomeIcon
                                    className="greater-icon"
                                    icon={faGreaterThan}
                                />
                            </a>
                        </li>
                        <img src={NavbarBg} className="img-fluid navbar-bg-img"></img>
                    </ul>
                    <div className="news-notification-list">
                        <h3 className="news-heading text-white">News</h3>
                        <ul className="card news-ul border-0">
                            <li className="d-flex gap-3 notification-list">
                                <img src={img6} className="news-img"></img>
                                <p className="news-notification text-white">
                                    lorem Ipsum lorem ipsum dolor sit amet
                                    <br />
                                    lorem Ipsum lorem ipsum dolor sit amet
                                </p>
                            </li>
                            <li className="d-flex gap-3  notification-list">
                                <img src={img6} className="news-img"></img>
                                <p className="news-notification text-white">
                                    lorem Ipsum lorem ipsum dolor sit amet
                                    <br />
                                    lorem Ipsum lorem ipsum dolor sit amet
                                </p>
                            </li>
                            <li className="d-flex gap-3  notification-list">
                                <img src={img6} className="news-img"></img>
                                <p className="news-notification text-white">
                                    lorem Ipsum lorem ipsum dolor sit amet
                                    <br />
                                    lorem Ipsum lorem ipsum dolor sit amet
                                </p>
                            </li>
                            <li className="d-flex gap-3  notification-list">
                                <img src={img6} className="news-img"></img>
                                <p className="news-notification text-white">
                                    lorem Ipsum lorem ipsum dolor sit amet
                                    <br />
                                    lorem Ipsum lorem ipsum dolor sit amet
                                </p>
                            </li>
                            <li className="d-flex gap-3  notification-list">
                                <img src={img6} className="news-img"></img>
                                <p className="news-notification text-white">
                                    lorem Ipsum lorem ipsum dolor sit amet
                                    <br />
                                    lorem Ipsum lorem ipsum dolor sit amet
                                </p>
                            </li>
                            <li className="d-flex gap-3  notification-list">
                                <img src={img6} className="news-img"></img>
                                <p className="news-notification text-white">
                                    lorem Ipsum lorem ipsum dolor sit amet
                                    <br />
                                    lorem Ipsum lorem ipsum dolor sit amet
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="row lang-converter">
                        <div className="col-lg-6 d-flex lang-select">
                            <label className="col-sm-10 col-lg-4 col-md-4 text-white lang-label">
                                Select Language :{" "}
                            </label>
                            <div className="col-sm-10 col-lg-2 col-md-2">
                                <select
                                    className="form-select lang-dropdown"
                                    id="selectkyc"
                                    aria-label="selectkyc"
                                >
                                    <option value="NIC" className="fs-5">
                                        English
                                    </option>
                                    <option value="Passport" className="fs-5">
                                        Arabic
                                    </option>
                                    <option value="DrivingLicense" className="fs-5">
                                        Urdu
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="d-flex list-unstyled justify-content-center gap-5">
                                <li className="nav-item">
                                    <a className="nav-link social-nav text-white p-0" href="">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link social-nav text-white p-0" href="">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link social-nav text-white p-0" href="">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        type="submit"
                                        className="nav-link social-nav text-white p-0"
                                        href=""
                                    >
                                        <FontAwesomeIcon icon={faLinkedin} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="circle-lines-parent">
                            <img src={CircleLines} className="nav-circle-img img-fluid"></img>
                        </div>
                    </div>
                </div>
                <span
                    className="open-nav"
                    onClick={() => {
                        openNav();
                    }}
                >
                    <FontAwesomeIcon className="bar-icon" icon={faBarsStaggered} />
                </span>
                <div className="border-div">
                    <small className="right-border-cus" />
                </div>
                <div className="logo-img">
                    <a className="navbar-brand" href="/">
                        <img
                            src={Logo}
                            width="60%"
                            height="60%"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </a>
                </div>

                <div>
                    <ul className="right-navbar nav_social_icon about-right-nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a type="submit" className="nav-link text-white" href="">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default CollectionPageThreeNav