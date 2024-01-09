import React, { useState, useEffect } from 'react'
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
import "../Services/assets/service.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeftLong, faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'
import img4 from '../../images/4.jpg'
import img5 from '../../images/5.jpg'
import img6 from '../../images/6.jpg'
import CollectionPageThreeNav from '../Collections/CollectionPageThreeNav'
function CollectionPageThree() {
    const [slideIndex, setSlideIndex] = useState(0);


    function SampleNextArrow({ onClick }) {
        return (
            <div className='arrow-2 arrow-collection-3 arrow-collection-left-3' onClick={onClick}>
                <FontAwesomeIcon className='box-arrow-right' icon={faArrowRightLong} />
                <small className='arrow-box-right'></small>
                <small className='arrow-box-right-layer'></small>
            </div>

        );
    }
    function SamplePrevArrow({ onClick }) {
        return (
            <div className='arrow-2  arrow-collection-3  arrow-collection-right-3' onClick={onClick}>
                <FontAwesomeIcon className='box-arrow-left' icon={faArrowLeftLong} />
                <small className='arrow-box-left'></small>
                <small className='arrow-box-left-layer'></small>
            </div>
        );
    }
    const images = [{ text: "Ecce Agnus Dei", image: img1 }, { text: "Ecce Agnus Dei", image: img2 }, { text: "Ecce Agnus Dei", image: img3 }, { text: "Ecce Agnus Dei", image: img4 }, { text: "Ecce Agnus Dei", image: img5 }, { text: "Ecce Agnus Dei", image: img6 }];

    const settings = {
        dots: false,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        // autoplay: true,
        autoplaySpeed: 1000,
        beforeChange: (current, next) => setSlideIndex(next),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,


        responsive: [
            {
                breakpoint: 1140,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    dots: false,
                    centerPadding: "150px",
                },
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                    centerPadding: "80px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
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
                <CollectionPageThreeNav />
                <div className="container-fluid">
                    <div className="bg-collection-line">
                        <img src={Tri} className="collection-tri-2 img-fluid"></img>
                    </div>
                    <div className="row px-lg-5">
                        <div className="col-lg-8 col-md-8 col-sm-12 coll-profile-sec">
                            <ul className="list-unstyled">
                                <li>
                                    <div className="collection-3-img" data-aos="zoom-out-up">
                                        <img className="col-profile-img-3" src={ArtImg5}></img>
                                    </div>
                                </li>
                                <li>
                                    <div className="collection-related-heading">
                                        <h1 className="author-title">Howard Terpening</h1>
                                    </div>
                                </li>
                            </ul>
                            <div className="coll-vertical-date">
                                <h1 className="vertical-dates-3">1927-1998</h1>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 coll-page2-bg" >
                            <img className="coll-page3-logo" src={SideLogo} data-aos="zoom-out-up"></img>
                        </div>
                        <div className="bg-collection-line">
                            <img src={Circle} className="collection-circle-3 img-fluid" data-aos="zoom-in"></img>
                        </div>
                    </div>
                    <div className='row author-row'>
                        <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                            <div className="author-description">
                                <p className="author-content text-muted ">The Renaissance (meaning rebirth) was a movement that took place across Europe during the 14th, 15th and 16th centuries.It was characterized by an interest in nature, greater focus on individualism, interest in the world and concepts that had been taken for granted until then, as well as a greater emphasis on classical learning.</p>
                            </div>

                        </div>
                    </div>
                    <div className="row author-row-2 mt-5">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <div className="slider-author-heading">
                                <h3 className="slider-author-name">Howard Terpening Art Collection</h3>
                            </div>
                            <div className="artcollection" data-aos="zoom-out-up">
                                <Slider {...settings}>
                                    {
                                        images.map((img, index) => (
                                            <>
                                                <div className={index === slideIndex ? 'artcolection artcolection-active' : 'artcolection'} key={index}>
                                                    <img src={img.image} alt="" />
                                                </div>
                                                <div >
                                                    <h3 className='art-collection-title'>{(index === slideIndex) ? img.text : ""} </h3></div>
                                            </>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className="M d-flex justify-content-end pb-3">
                            <img src={M} className="m-icon" data-aos="zoom-in"></img>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default CollectionPageThree