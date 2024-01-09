import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ArtImg from '../../images/art1.jpg'
import ArtImg2 from '../../images/art2.jpg'
import Circle from '../../images/circlelines.png'
import Tri from '../../images/sidelines.png'
import ArtImg3 from '../Services/assets/Layer10.png'
import ArtImg4 from '../Services/assets/Layer9.png'
import ArtImg5 from '../Services/assets/img3.png'
import M from '../Services/assets/M.png'
import SideLogo from '../../images/bg-logo.png'
import { state } from "../Services/serviceData";
import Slider from "react-slick";
import CountUp from "react-countup";
import "../Services/assets/service.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeftLong, faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import CollectionPageTwoNav from '../Collections/CollectionPageTwoNav';

function CollectionPageTwo() {
    function SampleNextArrow({ onClick }) {
        return (
            <div className='arrow-2 arrow-collection  arrow-collection-left' onClick={onClick}>
                <FontAwesomeIcon className='box-arrow-right' icon={faArrowRightLong} />
                <small className='arrow-box-right'></small>
                <small className='arrow-box-right-layer'></small>
            </div>

        );
    }
    function SamplePrevArrow({ onClick }) {
        return (
            <div className='arrow-2 arrow-collection  arrow-collection-right' onClick={onClick}>
                <FontAwesomeIcon className='box-arrow-left' icon={faArrowLeftLong} />
                <small className='arrow-box-left'></small>
                <small className='arrow-box-left-layer'></small>
            </div>
        );
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 4,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 1000,
        // arrows: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,


        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1500,
        });
    }, [])

    return (
        <>
            <div className="container-fluid max-width-container px-0" >
                <CollectionPageTwoNav />
                <div className="container-fluid">
                    <div className="bg-collection-line" data-aos="fade-down-right">
                        <img src={Tri} className="collection-tri img-fluid" data-aos="zoom-in"></img>
                    </div>
                    <div className="row px-lg-5">
                        <div className="col-lg-8 col-md-8 col-sm-12 coll-profile-sec">
                            <ul className="list-unstyled collection-p-ul">
                                <li>
                                    <div className="collection-2-heading">
                                        <h1 className="collection-2-title">Ecce Agnus Dei</h1>
                                        <a href="#" className="collection-2-btn">By: Giovanni di Paolo</a>
                                    </div>
                                </li>
                                <li>
                                    <div className="collection-2-img" data-aos="zoom-in">
                                        <img className="col-profile-img" src={ArtImg5}></img>
                                    </div>
                                </li>
                                <li>
                                    <div className="collection-2-subtitle">
                                        <p className="coll-profile-subtitle">The Renaissance (meaning rebirth) was a movement that took place across Europe during the 14th, 15th and 16th centuries.It was characterized by an interest in nature, greater focus on individualism, interest in the world and concepts that had been taken for granted until then, as well as a greater emphasis on classical learning.</p>
                                    </div>
                                </li>
                            </ul>
                            <div className="coll-vertical-date text-end">
                                <h1 className="vertical-dates">1455/60</h1>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 coll-page2-bg" data-aos="zoom-in">
                            <img className="coll-page2-logo" src={SideLogo}></img>
                        </div>
                    </div>
                    <div className="row col-pro-row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-pro-head1 circle-icon collection-2-4k">
                            <div className="col-pro-grid1" data-aos="zoom-in">
                                <img src={ArtImg3} className=""></img>
                            </div>
                            <div className="img-vertical">
                                <h1 className="img-vertical-dates">1455/60</h1>
                            </div>
                            <div className="col-pro-grid1 col-pro-grid1-custom" data-aos="zoom-in">
                                <img src={ArtImg3} className=""></img>
                            </div>
                            <div className="img-vertical">
                                <h1 className="img-vertical-dates">1455/60</h1>
                            </div>
                            <div className="col-pro-grid1" data-aos="zoom-in">
                                <img src={ArtImg3} className=""></img>
                            </div>
                            <div className="img-vertical">
                                <h1 className="img-vertical-dates">1455/60</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-pro-head1 collection-2-4k collection-page-grid">
                            <div className="col-pro-grid1 col-pro-grid1-custom2" data-aos="zoom-in">
                                <img src={ArtImg5} classNam e=""></img>
                            </div>
                            <div className="img-vertical">
                                <h1 className="img-vertical-dates">1455/60</h1>
                            </div>
                            <div className="col-pro-grid1" data-aos="zoom-in">
                                <img src={ArtImg} className=""></img>
                            </div>
                            <div className="img-vertical">
                                <h1 className="img-vertical-dates">1455/60</h1>
                            </div>
                            <div className="col-pro-grid1 col-pro-grid1-custom3" data-aos="zoom-in">
                                <img src={ArtImg3} className=""></img>
                            </div>
                            <div className="img-vertical">
                                <h1 className="img-vertical-dates img-vertical-dates-3">1455/60</h1>
                            </div>
                        </div>
                        <div className="M d-flex justify-content-end pb-3">
                            <img src={M} className="m-icon" data-aos="zoom-in"></img>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="collection-related-heading">
                            <h1 className="related-title">Related Arts</h1>
                        </div>
                        <div className="service_slider service_slider_cus" data-aos="zoom-in">
                            <Slider {...settings}>
                                {state.services_content.map((item) => (
                                    <div key={item.id} className="slider-item">
                                        <div className="slide-img">
                                            <a href='/CollectionPageThree' className="s-link">
                                                <img
                                                    src={item.image}
                                                    className="slider-image collection-slider-active"
                                                    alt="dsd"
                                                />
                                            </a>
                                            <a href='' className="slider-anchor">
                                                {item.anchor}
                                            </a>
                                            <div className="date-counter">
                                                <CountUp start={0} end={item.date.year} duration={4} />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default CollectionPageTwo;
