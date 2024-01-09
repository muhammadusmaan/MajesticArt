import React, { useRef, useState, useEffect } from "react";
import Carousel from "../Utils/Carousel.js";
import NavbarBg from "../images/bg-logo.png";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
// import img3 from "../images/3.jpeg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faMagnifyingGlass,
  faGreaterThan,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../images/logo.png";
import CircleLines from "../images/circlelines.png";
import axios from 'axios';

function Navbar() {
  const [langType, setLangType]=useState([]);
  const [selectedLang, setSelectedLang]=useState();

  const saveToken = userToken => {
    localStorage.setItem('LanguageType', JSON.stringify(userToken));
};

const tokenString = localStorage.getItem('LanguageType');
const userToken = JSON.parse(tokenString);

async function getLanguageType() {
  try {
      await axios.get('https://test-api.majesticarts.com/language')
          .then((res) => {
            setLangType(res.data.data)
          }) 
  }
  catch (err) {
     console.log(err)
  }
}

useEffect(() => {

  getLanguageType();

},[selectedLang])

  const [isSearch, setIsSearch] = useState(false);

  const openNav = () => {
    if (document.getElementById("mySidenav")) {
      document.getElementById("mySidenav").style.width = "100%";
      document.getElementById("body").style.overflowY = "hidden";
    }
  };
  const closeNav = () => {
    if (document.getElementById("mySidenav")) {
      console.log("sdsd");
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("body").style.overflowY = "unset";

    }
  };

  const openSearchBar = () => {
    if (document.getElementById("mySearchBar")) {
      document.getElementById("mySearchBar").style.width = "100%";
      document.getElementById("body").style.overflowY = "hidden";
    }
  };
  const closeSearchBar = () => {
    if (document.getElementById("mySearchBar")) {
      document.getElementById("mySearchBar").style.width = "0";
      document.getElementById("body").style.overflowY = "unset";

    }
  };


  return (
    <>
      <div className="container-fluid px-0">
        <Carousel>
          <div className="carousel-div">
            <img className="img img-1" src={img1} alt="img1" />
          </div>
          <div className="carousel-div">
            <img className="img img-2" src={img2} alt="img2" />
          </div>
          {/* <div className="carousel-div">
            <img className="img img-3" src={img3} alt="img3" />
          </div> */}
          <div className="carousel-div">
            <img className="img img-4" src={img4} alt="img3" />
          </div>
          <div className="carousel-div">
            <img className="img img-5" src={img5} alt="img3" />
          </div>
          <div className="carousel-div">
            <img className="img img-6" src={img6} alt="img3" />
          </div>
          <div className="carousel-div">
            <img className="img img-7" src={img7} alt="img3" />
          </div>
        </Carousel>

        {/* <div class="card-img-overlay d-flex justify-content-center"></div> */}
        <h1 className="heading-1">Discover</h1>
        <h1 className="heading-2">Arts & Antiques</h1>
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
          <ul className="navbar-ul list-unstyled nav_left_list text-start">
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
                Select Languages :{" "}
              </label>
              <div className="col-sm-10 col-lg-2 col-md-2">
              <select
                className="form-select lang-dropdown"
                id="selectkyc"
                aria-label="selectkyc"
                value={userToken}
              onChange={(e) =>{window.location.reload(); setSelectedLang(e.target.value); saveToken(e.target.value)}} >
            {/* <option  className="fs-5" value=''>Select Language</option> */}
              
            {/* {langType.slice(0).reverse().map((singleType, indx)=>{ */}
                {langType.map((singleType, indx)=>{
                return(
                    <option  className="fs-5" key={indx} value={singleType.code}>{singleType.name}</option>
                )
            })}</select>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="d-flex list-unstyled nav_social_icon  justify-content-center gap-5">
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
          <small className="right-border" />
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
          <ul className="right-navbar ">
            <li className="nav-item">
              <a
                className="nav-link btn text-white btn-bg tour-nav-cus"
                href=""
              >
                Book A Tour
              </a>
            </li>
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


        <div className="search-btn">
          <button
            type="submit"
            className="text-white search-icon open-nav"
            onClick={() => {
              openSearchBar();
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div
          class="sidenav"
          id="mySearchBar"
        >
          <button
            type="submit"
            className="closebtn pe-lg-5 pe-md-5"
            onClick={() => {
              closeSearchBar();
            }}
          >
            ⟵
          </button>
          <div className="circle-lines-parent">
            <img src={CircleLines} className="nav-searchbar-img img-fluid"></img>
          </div>
          <img src={NavbarBg} className="img-fluid navbar-bg-img"></img>

          <h1 className="hello-h ps-5">HELLO,</h1>
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
            <label htmlFor="name" className="col-sm-12 col-md-6 col-lg-6 name-label">Searching ...</label>
            <div className="col-sm-10 col-md-10 col-lg-10">
              <input type="text" Name="name" className="form-control name-field-cus" id="name" placeholder="Enter Your Query" />
            </div>
          </div>
          {/* <form class="d-flex justify-content-center search-from">
            <input
              class="search-input form-control"
              type="search"
              name="search"
              placeholder="What are you searching for?"
            />
            <button
              type="submit"
              class="align-self-center text-white search-btn-2"
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form> */}
          <div className="news-notification-list">
            <h3 className="news-heading text-white">News</h3>
            <ul className="card new-ul news-ul-search-bar border-0">
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

        </div>
      </div>
    </>
  );
}
export default Navbar;
