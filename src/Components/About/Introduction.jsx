import React, { useState, useEffect } from "react";
import Intro from "../../images/intro.png";
import Tower from "../../images/tower.png";
import logo from "../../images/Majestic Arts Logo.png";
import Shape from "../../images/lineShape.png";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutNavBar from "../About/AboutNavBar"

const Introduction = () => {
	const data = {
		id: '1',
		animation1: "150th",
		animation2: "Floor",
		animation3: "Introduction"
	}

	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 1500,
		});
	})
	return (
		<div>
			<div className='row Buy-sell-sec5 d-flex justify-content-center align-items-center'>
				<div className='col'>
					<div className='d-flex justify-content-center'>
						<img src={Intro} className='member_image' alt='Member' data-aos="zoom-in" />
					</div>
					<h1 className='d-flex justify-content-center intro'>
						{data.animation3.split("").map((itm, key) => (
							<span
								style={{
									"animation-delay": `${0.5 * key}s`,
									"animation-duration": `${data.animation3.split("").length
										}s`,
								}}
							>
								{itm}
							</span>
						))}
					</h1>
					<div className='d-flex justify-content-center container '>
						<p className='intro-para' data-aos="zoom-in">
							The Majestic Arts is a Premier Art curator par excellence with
							rich connections to Royalty, Art Institutions and High Net Worth
							Individuals. The Majestic Arts expertise covers extensive and
							diverse topics, from Indian, Islamic and Renaissance works, to
							Medieval and Impressionist Art among others. Majestic Arts
							provides a platform for buying and selling art paintings, engaging
							in market discussions regarding specific art pieces,and has
							already facilitated sales of artworks that are cumulatively worth
							in excess of $6 billion. The Majestic Arts gallery in Dubai offers
							an impressive collection.
						</p>
					</div>
				</div>
			</div>
			<div
				style={{
					background: "#ebdfc8",
					paddingBottom: "15px",
					position: "relative",
				}}>
				<div className='container'>
					<div className='row Buy-sell-sec d-flex justify-content-center align-items-center'>
						<div className='col'>
							<img src={Shape} alt='Member' className='shape' data-aos="zoom-in" />
							<img src={logo} alt='Member' style={{ width: "200px" }} className='logo-about-p' data-aos="zoom-in" />
							<p className='buy-sell-para mt-5' data-aos="zoom-in">
								It is a long established fact that a reader will be distracted
								by the readable content of a page when looking at its layout.
								The point of using Lorem Ipsum is that it has a more-or-less
								normal distribution of letters, as opposed to using 'Content
								here, content here', making it look like
							</p>
							<div className='mt-5 explore-col-about'>
								<button
									type='submit'
									className='btn btn-explore-about fs-4 py-0 px-4'>
									Go For Location
								</button>
								<div className='btn-border1'></div>
							</div>
						</div>
						<div className='col tower-cus'>
							<div className='d-flex justify-content-center'>
								<img
									src={Tower}
									className='member_image'
									alt='Member'
									style={{ marginTop: "-50px" }}
									data-aos="zoom-in"
								/>
							</div>
							<p className='fifty'>
								{data.animation1.split("").map((itm, key) => (
									<span
										style={{
											"animation-delay": `${0.5 * key}s`,
											"animation-duration": `${data.animation1.split("").length
												}s`,
										}}
									>
										{itm}
									</span>
								))}
							</p>
							<p className='floor'>
								{data.animation2.split("").map((itm, key) => (
									<span
										style={{
											"animation-delay": `${0.5 * key}s`,
											"animation-duration": `${data.animation2.split("").length
												}s`,
										}}
									>
										{itm}
									</span>
								))}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
