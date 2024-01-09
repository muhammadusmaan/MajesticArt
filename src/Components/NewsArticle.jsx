import React, { useState } from 'react';
import Slider from 'react-slick';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.jpg'
import img6 from '../images/6.jpg'
import Video from '../images/video.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowLeftLong, faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";


function NewsArticle() {
    const [slideIndex, setSlideIndex] = useState(0);

    function SampleNextArrow({ onClick }) {
        return (
            <div className='arrow-2 arrow-right-2' onClick={onClick}>
                <FontAwesomeIcon className='box-arrow-right' icon={faArrowRightLong} />
                <small className='arrow-box-right'></small>
                <small className='arrow-box-right-layer'></small>
            </div>

        );
    }
    function SamplePrevArrow({ onClick }) {
        return (
            <div className='arrow-2 arrow-left-2' onClick={onClick}>
                <FontAwesomeIcon className='box-arrow-left' icon={faArrowLeftLong} />
                <small className='arrow-box-left'></small>
                <small className='arrow-box-left-layer'></small>
            </div>
        );
    }

    const images = [{ image: img1 }, { image: img2 }, { image: img3 }, { image: img4 }, { image: img5 }, { image: img6 }];
    const settings = {
        dots: false,
        border: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,


        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            , {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

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
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    };
    return (
        <>
            <div className="container-fluid news-article">
                <div className="row">
                    <div className="news-heading-parent d-flex">
                        <h1 className="news-title">News and Articles</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 painting-content-sec mt-5 order-sm-0">
                            <h4 className="painting-title">Highest Gallery With The Most Important Collections<br />That Surpass 6 Billion USD</h4>
                            <p className="painting-des">Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>
                            <p className="painting-des-2">The management of majestic Arts has been dealing in Renaissance Arts, Medieval Arts, Western Arts,Modern Arts,Postmodern Arts,Indian Arts and Islamic Arts around several
                                countries, including Monaco, Liechtenstein, Switzerland, London, Luxembourg, Germany,Italy, France, USA, Canada, Australia, Austria, and UAE.Also, Majestic Arts Provide famous arts to most of Ellet's and Royal Families of Europe.</p>
                            <div className="col-md-6 mt-5 explore-col">
                                <button type="submit" className="btn btn-explore py-0 px-4">Explore More</button>
                                <small className="btn-news-border"></small>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 order-sm-1 ">
                            <div className="container newsSlider-container">
                                <div className="sliderrs">
                                    <Slider {...settings}>
                                        {
                                            images.map((data, index) => (
                                                <div className={index === slideIndex ? 'slidees slidees-active' : 'slidees'} key={index}>
                                                    <img src={data.image} className='newArticle-img' alt="" />
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                                <hr className="ps-5"></hr>
                                <div className="bottom-border-slider">
                                    <span className="border-bottom"></span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NewsArticle