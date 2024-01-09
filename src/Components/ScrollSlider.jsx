import React, { useRef, useEffect } from 'react';
import Slider from "react-slick";
import SliderImg from "../images/slider.jpg"
import Bg from "../images/bg-logo.png"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollSlider() {
    gsap.registerPlugin(ScrollTrigger);
    const circleRef = useRef(null);

    useEffect(() => {
        gsap.to(".slick-track", {
            x: 2000,
            duration: 5,
            ease: 'none',
            scrollTrigger: {
                trigger: ".slick-track",
                // markers: true,
                start: "top center+=100",
                end: "bottom 100px",
                scrub: 0.5,
            }
        });
    }, []);



    var settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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
            }
        ]
    };
    return (
        <>
            <div className="container-fluid bg-section-2">
                <small className="circle"></small>
                <div className="bg-logo"><img src={Bg} className="side-icon" /></div>
                <h1 className="text-center heading-sec-2">The Majestic Arts</h1>

                <Slider {...settings} id="contents" ref={circleRef} >
                    <div className="left-side-one"  >
                        <img src={SliderImg} className="s-img-1" />
                    </div>
                    <div className="equal-div-1">
                        <img src={SliderImg} className="s-img-1" />
                    </div>
                    <div className="equal-div-2">
                        <img src={SliderImg} className="s-img-1" />
                    </div>
                    <div className="right-side-one">
                        <img src={SliderImg} className="s-img-1" />
                    </div>
                    <div className="extra-side-one">
                        <img src={SliderImg} className="s-img-1" />
                    </div>
                </Slider>
                <h6 className="text-center heading-sec-3">A Premier Art Curator Par Excelience</h6>
                <div className="para-center mt-5 pb-5">
                    <p className="para-sec-2">The Majestic Arts is a Premier Art curator par excellence with rich connections to Royalty, Art Institutions and High Net Worth Individuals. The Majestic Arts expertise covers extensive and diverse topics, from Indian, Islamic and Renaissance works, to Medieval and Impressionist Art among others. Majestic Arts provides a platform for buying and selling art paintings, engaging in market discussions regarding specific art pieces,and has already facilitated sales of artworks that are cumulatively worth in excess of $6 billion. The Majestic Arts gallery in Dubai offers an impressive collection.</p>
                </div>
            </div>


        </>
    )
}
export default ScrollSlider
