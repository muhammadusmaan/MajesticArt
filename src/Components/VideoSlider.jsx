import React, { useState } from 'react';
import VideoBg from '../images/video.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay
} from "@fortawesome/free-solid-svg-icons";
import Slider from 'react-slick';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpeg';
import {
    faArrowLeftLong, faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";
import ReactImageVideoLightbox from 'react-image-video-lightbox';

function VideoSlider() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [

        {
            url: "https://qane.com/3d/index.htm",
            type: "video",
            altTag: "Virtual Tour"
        },

    ];

    const handleToggle = () => setIsOpen(!isOpen);
    const [slideIndex, setSlideIndex] = useState(0);
    const images = [{ text: "Modern", image: img1 }, { text: "Medieval", image: img2 }, { text: "Western", image: img3 }, { text: "Renaissance", image: img4 }, { text: "Islamic", image: img5 }, { text: "Indian", image: img6 }, { text: "Postmodern", image: img7 }];
    const [newData, setNewData] = useState({ text: '' });

    const renderWorks = () => {
        return data.map((item, index) => (
            <div key={index} style={{ backgroundImage: `url(${item.url})` }} />
        ));
    };
    function SampleNextArrow({ onClick }) {
        return (
            <div className='arrow-3 arrow-right-3' onClick={onClick}>
                <FontAwesomeIcon className='box2-arrow-right' icon={faArrowRightLong} />
                <small className='arrow-box-right-2'></small>
                <small className='arrow-box-right-layer-2'></small>
            </div>

        );
    }
    function SamplePrevArrow({ onClick }) {
        return (
            <div className='arrow-3 arrow-left-3' onClick={onClick}>
                <FontAwesomeIcon className='box2-arrow-left' icon={faArrowLeftLong} />
                <small className='arrow-box-left-2'></small>
                <small className='arrow-box-left-layer-2'></small>
            </div>
        );
    }


    const settings = {
        border: '0px',
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,

                }
            },
            , {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerPadding: "0px",
                }
            },
        ]
    };

    return (
        <>
            <div className="container-fluid px-0 bg-frame-sec">
                <div className="container-fluid video-frame-sec">
                    <a onClick={() => handleToggle()}>
                        <div className="card video-frame">
                            <div className="card-body frame-body">
                                <img src={VideoBg} className="frame-img" />
                                <div class="card-img-overlay card-img-overlay-virtual-tour d-flex justify-content-center overlay-2"></div>
                            </div>
                            <div className="play-btn">
                                <small className="play-btn-icon">
                                    <FontAwesomeIcon icon={faPlay} className="fa-icon" />
                                </small>
                            </div>
                            <div className="content-overlay">
                                <h3 className="content-heading">Virtual Tour</h3>
                                <p className="content-para">The Majestic Arts is a Premier Art curator par excellence with rich connections to Royalty, Art Institutions and High Net Worth Individuals. The Majestic Arts expertise covers extensive and diverse topics, from Indian, Islamic and Renaissance works, to Medieval and Impressionist Art among others.</p>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1 className="effect-heading">Majestic</h1>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 res-custom">
                            <h1 className="effect-heading-2">Arts</h1>
                        </div>
                        <div className="explore-div">
                            <h2 className="explore-heading">Explore Collection</h2>
                        </div>
                    </div>
                </div>
                <div className='hr-custom'>
                    {/* <hr className="slider-hr"></hr> */}
                    <ul class="progressbar">
                        {images.map((content) => {
                            return (
                                <>
                                    <li className="res-font">{content.text}</li>
                                    {/* {newData ? <li>{newData.text}</li> : <li>{content.text}</li>} */}
                                </>
                            )

                        })}
                    </ul>
                </div>
                <div className="container-fluid cus-margin">
                    <div className="slider-2 px-md-5 px-lg-5">
                        <Slider {...settings}>
                            {images.map((data, index) => {
                                return (
                                    <div className={index === slideIndex ? 'slideee slidee-active' : 'slideee'} key={index}>
                                        <img src={data.image} alt="" className="slide-img" />

                                    </div>
                                )

                            })}

                        </Slider>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-6 d-flex Renaissance">
                            <ul className="list-unstyled px-lg-3 mt-3">
                                <li className=" d-flex justify-content-end"><h3 className="slider-active-heading">Renaissance</h3></li>
                                <li><h2 className="slider-active-number">1400 - 1700</h2></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 d-flex ">
                            <small className="vl"></small>
                            <p className="description px-lg-3 px-md-3 mt-3">The Renaissance (meaning rebirth) was a movement that took place across Europe during the 14th, 15th and 16th centuries.It was characterized by an interest in nature, greater focus on individualism, interest in the world and concepts that had been taken for granted</p>
                        </div>
                        <div className="col mt-5 explore-col">
                            <button type="submit" className="btn btn-explore py-0 px-4">Explore More</button>
                            <small className="btn-border"></small>
                        </div>
                    </div>
                </div>
                <div className="container-fluid same-img-sec">
                    <div className="row">
                        <div className="col d-flex same-img-col" >
                            <div>
                                <div class="card card-rsp-img" style={{ width: '22rem', height: '60vh' }}>
                                    <img class="card-img-top img-card" src={img1} alt="Card image cap" />
                                </div>
                                <ul className="list-unstyled">
                                    <li className="img-bottom-des-1">1455/60</li>
                                    <li className="img-bottom-des-2">Ecce Agnus Dei</li>
                                    <li><a href="!#" className="img-bottom-des-3">By: Giovanni di Paolo</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col d-flex justify-content-center second-col" >
                            <div>
                                <div class="card card-rsp-img" style={{ width: '22rem', height: '60vh' }}>
                                    <img class="card-img-top img-card" src={img1} alt="Card image cap" />
                                </div>
                                <ul className="list-unstyled">
                                    <li className="img-bottom-des-1">1455/60</li>
                                    <li className="img-bottom-des-2">Ecce Agnus Dei</li>
                                    <li><a href="" className="img-bottom-des-3">By: Giovanni di Paolo</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-5 more-renaissance-btn">
                            <a href="" type='submit' className="btn btn-more-collection py-0 px-4 ">More Renaissance Collection</a> <small className="btn-border-2"></small></div>
                    </div>
                </div>
            </div>
            {isOpen ? (
                <ReactImageVideoLightbox
                    data={data}
                    startIndex={0}
                    showResourceCount={true}

                    onCloseCallback={() => handleToggle()}
                />
            ) : null}
        </>
    )
}
export default VideoSlider