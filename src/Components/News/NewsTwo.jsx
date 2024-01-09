import React, { useState, useEffect } from 'react'
import Circle from '../../images/circlelines.png';
import Tri from '../../images/sidelines.png';
import Layer from '../Events/assets/Layer.png';
import ArtImg from '../../images/art1.jpg';
import ArtImg3 from '../Services/assets/Layer10.png'
import ArtImg4 from '../Services/assets/Layer9.png'
import ArtImg5 from '../Services/assets/img3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShareFromSquare
} from "@fortawesome/free-solid-svg-icons";
import M from '../Services/assets/M.png'
import NewsOneNav from '../News/NewsOneNav'
import AOS from "aos";
import "aos/dist/aos.css";

function NewsTwo(props) {
    const [newsTwoContent, setNewsTwoContent] = useState({});
    const [newsTwoImage, setNewsTwoImage] = useState();
    const tokenString = localStorage.getItem('NewsTwoData'); 
    const userToken = JSON.parse(tokenString);

    useEffect(() => {
        setNewsTwoContent(userToken)
        setNewsTwoImage(userToken.image[0])

    }, [props])

    return (
        <>
        <div className="container-fluid max-width-container px-0" >
            <NewsOneNav />
            <div className="container">
                <div className="row">
                    <div className="bg-News-line">
                        <img src={Circle} className="news-p2-circle img-fluid"></img>
                        <img src={Tri} className="news-p2-tri img-fluid"></img>
                    </div>
                    <div className="col-lg-8 col-md-6 col-sm-12 news-event-detail-sec">
                        <div>
                            <img src={newsTwoImage} className="news-p2-img"></img>
                            <div className="d-flex justify-content-between">
                                <p className="news-p2-counter">5,660,445 views</p>
                                <a href="#" className="news-p2-share">Share &nbsp; <FontAwesomeIcon icon={faShareFromSquare} /></a>
                            </div>
                        </div>
                        <div>
                            <h2 className="news-p2-Heading-1">{newsTwoContent.shortDescription}</h2>
                            <div className="news-p2-plong" dangerouslySetInnerHTML={{ __html:newsTwoContent.description}} />
                          
                        </div>
                        <div>
                            <h2 className="news-p2-Heading-1">{newsTwoContent.shortDescription}</h2>
                            <div className="news-p2-plong" dangerouslySetInnerHTML={{ __html:newsTwoContent.description}} />
                          
                        </div>   
                        <div>
                            <h2 className="news-p2-Heading-1">{newsTwoContent.shortDescription}</h2>
                            <div className="news-p2-plong" dangerouslySetInnerHTML={{ __html:newsTwoContent.description}} />
                          
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 new-p2-playlist ps-md-4 ps-lg-5">
                        <div className="news-events-heading">
                            <h1 className="event-news-title">Event News</h1>
                            <span className="news-p2-border"></span>
                        </div>
                        <div className="d-flex mt-5 news-p-playlist-resp">
                            <img src={ArtImg} className="news-p2-playlist-2"></img>
                            <ul className="list-unstyled px-lg-2">
                                <li className="news-playlist-li-res"><a href="#" className="text-decoration-none p2-playlist-title">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</a></li>
                                <li><a href="#" className="text-decoration-none text-dark"><p className="p2-playlist-subtitle">Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p></a></li>
                            </ul>
                        </div>
                        <div className="d-flex mt-2 news-p-playlist-resp">
                            <img src={ArtImg5} className="news-p2-playlist-2"></img>
                            <ul className="list-unstyled px-lg-2">
                                <li className="news-playlist-li-res"><a href="#" className="text-decoration-none p2-playlist-title">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</a></li>
                                <li><a href="#" className="text-decoration-none text-dark"><p className="p2-playlist-subtitle">Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p></a></li>
                            </ul>
                        </div>
                        <div className="d-flex mt-2 news-p-playlist-resp">
                            <img src={Layer} className="news-p2-playlist-2"></img>
                            <ul className="list-unstyled px-lg-2">
                                <li className="news-playlist-li-res"><a href="#" className="text-decoration-none p2-playlist-title">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</a></li>
                                <li><a href="#" className="text-decoration-none text-dark"><p className="p2-playlist-subtitle">Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p></a></li>
                            </ul>
                        </div>
                        <div className="d-flex mt-2 news-p-playlist-resp">
                            <img src={ArtImg4} className="news-p2-playlist-2"></img>
                            <ul className="list-unstyled px-lg-2">
                                <li className="news-playlist-li-res"><a href="#" className="text-decoration-none p2-playlist-title">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</a></li>
                                <li><a href="#" className="text-decoration-none text-dark"><p className="p2-playlist-subtitle">Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p></a></li>
                            </ul>
                        </div>
                        <div className="d-flex mt-2 news-p-playlist-resp">
                            <img src={ArtImg} className="news-p2-playlist-2"></img>
                            <ul className="list-unstyled px-lg-2">
                                <li className="news-playlist-li-res"><a href="#" className="text-decoration-none p2-playlist-title">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</a></li>
                                <li><a href="#" className="text-decoration-none text-dark"><p className="p2-playlist-subtitle">Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="M d-flex justify-content-end pb-3">
                    <img src={M} className="m-icon"></img>
                    <img src={Circle} className="news-p2-bg-circle img-fluid"></img>
                </div>
            </div>
        </div>
        </>
    )
}
export default NewsTwo