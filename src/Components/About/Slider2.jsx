import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import img1 from "../../images/1.jpg";
import img2 from "../../images/2.jpg";
import img3 from "../../images/3.jpg";
import img4 from "../../images/4.jpg";
import img5 from "../../images/5.jpg";
import img6 from "../../images/6.jpg";
import Video from "../../images/video.jpg";
import InspArt from "../../images/insp-art.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeftLong,
	faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function Slider2() {


	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 1500,
		});
	})

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
				<FontAwesomeIcon
					className='insp-arrow-icon insp-arrow-icon-left'
					icon={faArrowLeftLong}
				/>
				<small className='arrow-circle-left'></small>
			</div>
		);
	}

	const images = [{ head: "Mejestic Art", head1: "Company History", text: "The Renassance (meaning rebirth) was a movement that took placeacross Europe during the 14th 15th and 16th centuries", image: img1 }, { head: "Majestic Art", head1: "Company History", text: "The Renassance (meaning rebirth) was a movement that took placeacross Europe during the 14th 15th and 16th centuries", image: img2 }, { head: "Majestic Art", head1: "Company History", text: "The Renassance (meaning rebirth) was a movement that took placeacross Europe during the 14th 15th and 16th centuries", image: img3 }, { head: "Majestic Art", head1: "Company History", text: "The Renassance (meaning rebirth) was a movement that took placeacross Europe during the 14th 15th and 16th centuries", image: img4 }, { head: "Majestic Art", head1: "Company History", text: "The Renassance (meaning rebirth) was a movement that took placeacross Europe during the 14th 15th and 16th centuries", image: img5 }, { head: "Majestic Art", head1: "Company History", text: "The Renassance (meaning rebirth) was a movement that took placeacross Europe during the 14th 15th and 16th centuries", image: img6 }];


	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		beforeChange: (current, next) => setSlideIndex(next),
		centerMode: true,
		centerPadding: '320px',
		adaptiveHeight: false,

		responsive: [

			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2000,
					centerPadding: '360px',
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2000,
					centerPadding: '250px',
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					centerPadding: '200px',
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					centerPadding: '0px',
				},
			},
			{
				breakpoint: 480,
				settings: {
					centerPadding: '0px',
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
				},
			},
		],
	};


	return (
		<>
			<div className='container-fluid'>
				<div className='row mt-5'>
					<div className="aboutslider">
						<Slider {...settings}>
							{
								images.map((img, index) => (
									<>

										<div className={index === slideIndex ? 'aboutslider1 aboutslider1-active' : 'aboutslider1'} key={index}>
											<img src={img.image} alt="" />
										</div>
										<div className="about-slider-content">
											<h1 className='about-heading' >{(index === slideIndex) ? img.head : ""}  </h1>
											<h2 className='about-heading-1' >{(index === slideIndex) ? img.head1 : ""}  </h2>
											<p className='about-paragraph' >{(index === slideIndex) ? img.text : ""}  </p>
										</div>
									</>
								))
							}
						</Slider>
					</div>
				</div>
			</div>

		</>
	);
}
export default Slider2;
