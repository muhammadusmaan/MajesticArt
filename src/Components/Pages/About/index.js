import React from "react";
import Introduction from "../../About/Introduction";
import AboutNavBar from '../../About/AboutNavBar'
import Slider2 from "../../About/Slider2";
import "./index.css";
const About = () => {
	return (
		<React.Fragment>
			{/* <div style={{ position: "relative" }}> */}
			<div id='about'>
				<div className="container-fluid max-width-container px-0" >
					<div>
						<AboutNavBar />
					</div>
					<div>
						<Introduction />
					</div>
					<div>
						<Slider2 />
					</div>
				</div>
			</div>
			{/* </div> */}
		</React.Fragment>
	);
};

export default About;
