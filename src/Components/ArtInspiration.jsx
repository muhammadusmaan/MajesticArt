import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import Video from '../images/video.jpg'
import InspArt from '../images/insp-art.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeftLong, faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";
import ArcTitle from '../Utils/ArcTitle.js';
import comic01 from "../images/img3.jpeg";
import comic02 from "../images/img4.jpeg";
import comic03 from "../images/img7.jpeg";
import CircleLines from "../images/circlelines.png"

function ArtInspiration() {
    const [slideIndex, setSlideIndex] = useState(0);

    function SampleNextArrow({ onClick }) {
        return (
            <div className='arrow arrow-right' onClick={onClick}>
                <FontAwesomeIcon className='insp-arrow-icon' icon={faArrowRightLong} />
                <small className='arrow-circle-right'></small>
            </div>

        );
    }
    function SamplePrevArrow({ onClick }) {
        return (
            <div className='arrow arrow-left' onClick={onClick}>
                <FontAwesomeIcon className='insp-arrow-icon insp-arrow-icon-left' icon={faArrowLeftLong} />
                <small className='arrow-circle-left'></small>
            </div>
        );
    }

    const images = [{ image: img1 }, { image: img2 }, { image: img3 }, { image: img4 }, { image: img5 }, { image: img6 }];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplaySpeed: 3000,

                }
            }
        ]
    };


    const [index, setIndex] = useState(0);
    const mod = (n, m) => {
        let result = n % m;

        // Return a positive value
        return result >= 0 ? result : result + m;
    };

    const cards = [
        {
            id: "1",
            image: comic01,
        },
        {
            id: "2",
            image: comic02,
        },
        {
            id: "3",
            image: comic03,
        },
    ];
    useEffect(() => {
        setTimeout(() => {
            setIndex((index + 1) % cards.length);
            console.log(index);
        }, 5000);
    }, [index]);

    return (
        <>
            <div className="container-fluid bg-inspiration">
                <div className="row">
                    <div className="text-center art-insp-div">
                        <h1 className="inspiration-heading">Art Inspiration of</h1>
                        <h1 className="century-heading">12th Century</h1>
                    </div>
                    <div className="text-center mt-5">
                        <h1 className="insp-explore-heading">Explore Collection</h1>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="slider">
                                <Slider {...settings}>
                                    {
                                        images.map((img, index) => (
                                            <>
                                                {/* <div>

                                                    {(index === slideIndex) ? img.text : ""}
                                                </div> */}
                                                <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={index}>
                                                    <img src={img.image} alt="" className="inspiration-slider" />
                                                </div>
                                            </>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className="col">
                            <div className="vertical-text text-end">
                                <h1 className="vertical-heading">ART INSPIRATION</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row Buy-sell-sec">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="d-flex justify-content-end">
                                <img src={InspArt} className="img-fluid buy-sell-img"></img>
                            </div>
                            <div className="d-flex justify-content-end buy-sel-parent">
                                <h1 className="buy-sel-heading">BUY & SELL WITH US</h1>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="d-flex justify-content-center px-lg-5 px-md-5">
                                <p className="buy-sell-para">The Renaissance (meaning rebirth) was a movement that took place across Europe during the 14th, 15th and 16th centuries.It was characterized by an interest in nature, greater focus on individualism, interest in the world and concepts that had been taken for granted until then, as well as a greater emphasis on classical learning.</p>
                            </div>
                        </div>
                    </div>
                    <div className="circle-lines-parent">
                        <img src={CircleLines} className="circle-line-img img-fluid"></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ArtInspiration