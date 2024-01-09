import React, { useState, useEffect } from 'react'
import Circle from '../../images/circlelines.png';
import Tri from '../../images/sidelines.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot, faPhoneFlip, faEnvelope, faArrowLeftLong, faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";
import Slider from 'react-slick';
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'
import img4 from '../../images/4.jpg'
import img5 from '../../images/5.jpg'
import img6 from '../../images/6.jpg'
import Burj from "../../images/burjbuilding.png"
import M from '../Services/assets/M.png'
import AOS from "aos";
import "aos/dist/aos.css";
import ContactNav from "../Contact Us/ContactNav"
function Contact() {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1500,
        });
    })

    const [slideIndex, setSlideIndex] = useState(0);
    function SampleNextArrow({ onClick }) {
        return (
            <div className='arrow-2 arrow-right-contact' onClick={onClick}>
                <FontAwesomeIcon className='box-arrow-right' icon={faArrowRightLong} />
                <small className='arrow-box-right'></small>
                <small className='arrow-box-right-layer'></small>
            </div>

        );
    }
    function SamplePrevArrow({ onClick }) {
        return (
            <div className='arrow-2 arrow-left-contact' onClick={onClick}>
                <FontAwesomeIcon className='box-arrow-left' icon={faArrowLeftLong} />
                <small className='arrow-box-left'></small>
                <small className='arrow-box-left-layer'></small>
            </div>
        );
    }
    const images = [img1, img3, img4, img5, img6];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: (current, next) => setSlideIndex(next),
        centerMode: true,
        centerPadding: '2px',
        adaptiveHeight: false,
        marginCenter: '100px',
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
                    centerPadding: '-120px',
                    marginCenter: '0px',


                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    centerPadding: '200px',
                    marginCenter: '0px',


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
            }
        ]
    };

    return (
        <>
            <div className="container-fluid max-width-container px-0" >
                <ContactNav />
                <div className="container-fluid m-0 p-0">
                    <div className="bg-News-line">
                        <img src={Circle} className="news-p2-circle-contact img-fluid" data-aos="fade-up"></img>
                        <img src={Tri} className="news-p2-tri-contact img-fluid" data-aos="fade-up"></img>
                    </div>
                    <div className="container-fluid burj-bg m-0 contact-sec1-cus">
                        <div className="col-10 mx-auto px-lg-5 px-md-5">
                            <div className="row justify-content-center">
                                <div className="col-lg-10 col-md-10 col-sm-12">
                                    <h1 className="text-center contact-p-heading" data-aos="fade-up">Lets Get in Touch</h1>
                                    <div className=' contact-page-form-div-cus'>
                                        <form className='col-lg-10 col-md-10 contact-p-form'>
                                            <div class="form-group col-lg-6 col-md-8 col-sm-12 contact-p-form-cus">
                                                <label htmlFor="name" className="col-sm-12 col-md-6 col-lg-6 name-label-contact name-label" data-aos="fade-up">MY NAME IS</label>
                                                <div className="col-sm-12 col-md-10 col-lg-10">
                                                    <input type="text" Name="name" className="form-control name-field-contact-p" id="name" placeholder="Enter Your Name" data-aos="fade-up" />
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 col-lg-6 col-md-8 col-sm-12 d-flex align-items-center contact-p-form-cus">
                                                <label htmlFor="name" className="col-sm-10 col-md-8 col-lg-8 name-label-contact name-label" data-aos="fade-up">AND MY EMAIL IS</label>
                                                <div className="col-sm-12 col-md-10 col-lg-10">
                                                    <input type="text" Name="name" className="form-control name-field-contact-p" id="name" placeholder="Enter Your Name" data-aos="fade-up" />
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 col-lg-8 col-md-8 col-sm-12 d-flex contact-p-form-cus">
                                                <label htmlFor="name" className="col-sm-10 col-md-10 col-lg-10 name-label-contact name-label" data-aos="fade-up">AND WRITE YOUR OPINION</label>
                                                <div className="col-sm-12 col-md-10 col-lg-10">
                                                    <textarea Name="message" className="form-control name-field-contact-p" id="messageText" rows="1" placeholder="Enter your Message" data-aos="fade-up"></textarea>
                                                </div>
                                            </div>
                                            {/* <div class="form-group mt-3 ">
                                                <textarea class="form-control contact-textarea-cus" id="messageText" rows="5" placeholder="Enter your Message" data-aos="fade-up"></textarea>
                                            </div> */}
                                            <div className="d-flex justify-content-center contact-p-btnparent">
                                                <button type="submit" className="btn contact-p-btn px-5" data-aos="fade-up">Send Message</button>
                                                <span className="contact-p-border" data-aos="fade-up"></span>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="contact-p-from-description">
                                        <p className="contact-p-from-subtitle" data-aos="fade-up">The Majestic Arts is a Premier Art curator par excellence. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row contact-p-row_cus-2">
                        <h1 className="text-center contact-p-info" data-aos="fade-up">Contact Information</h1>
                        <div className="mt-5">
                            <ul className="list-unstyled d-flex justify-content-center contact-p-infoList">
                                <li className="d-block">
                                    <div className="text-center" >
                                        <FontAwesomeIcon className="contact-icon" icon={faLocationDot} data-aos="fade-up" />
                                        <span className="d-flex mt-3 contact-span" data-aos="fade-up">Dubai International Financial<br /> Center, Dubai - UAE</span>
                                    </div>
                                </li>
                                <li className="d-block">
                                    <div className="text-center">
                                        <FontAwesomeIcon className="contact-icon" icon={faPhoneFlip} data-aos="fade-up" />
                                        <span className="d-flex mt-3 contact-span" data-aos="fade-up">+971 876 876 7</span>
                                    </div>
                                </li>
                                <li className="d-block">
                                    <div className="text-center">
                                        <FontAwesomeIcon className="contact-icon" icon={faEnvelope} data-aos="fade-up" />
                                        <span className="d-flex mt-3 contact-span" data-aos="fade-up">info@majesticart.com</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="container-fluid contact-p-row_cus-3 p-lg-0 p-md-0">
                        <div className="row">
                            <h1 className="contact-p-burj" data-aos="fade-up">Burj khalifa</h1>
                            <div className="col-lg-4 col-md-6 col-sm-12 burj-building-left burj-bg pb-5">
                                <p className="contact-p-uae-dubai" data-aos="fade-up">U.A.E Dubai</p>
                                <p className="contact-p-uae-subtitle" data-aos="fade-up">It is a long established fact that a reader will
                                    be distracted by the readable content of a page
                                    when looking at its layout. The point of using
                                    Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed to using
                                    'Content here, content here', making it look like </p>
                                <div className="contact-p-location">
                                    <button type="submit" className="btn contact-p-loc-btn px-4" data-aos="fade-up">Go for Location</button>
                                    <span className="contact-p-loc-border" data-aos="fade-up"></span>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-6 col-sm-12 burj-buildings-cus burj-bg">
                                <img src={Burj} className="img-fluid burj-buildings-img" data-aos="fade-up"></img>
                            </div>
                        </div>
                    </div>

                    <div className="row large-cus" data-aos="fade-up">
                        <h1 className='contact-slider-heading' data-aos="fade-up">Mejistic Art Gallary</h1>
                        <div className="large" data-aos="fade-up">
                            <Slider {...settings}>
                                {
                                    images.map((img, index) => (
                                        <div className={index === slideIndex ? 'largeimg largeimg-active' : 'largeimg'} key={index}>
                                            <img src={img} alt="" />
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>

                    <div className="M d-flex justify-content-end m-contact-p" >
                        <img src={M} className="contact-m-icon"></img>
                        <img src={Circle} className="news-bg-circle-contact img-fluid"></img>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact