import React, { useState, useRef, useEffect } from "react";
import member1 from "../../images/member1.png";
import member2 from "../../images/member2.png";
import member3 from "../../images/member3.png";
import M from "../../images/M.png";
import ReactFullscreenSlideshow from "react-fullscreen-slideshow";
import "./index.css";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeftLong
} from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";


const images = [
  {
    image: member1,
    caption: "Faisal Ali Qane",
    description: "Chief Executive Officer",
  },
  {
    image: member2,
    caption: "Irfan",
    description: "Chief Executive Officer",
  },
  {
    image: member3,
    caption: "Faisal Ali Qane",
    description: "Chief Executive Officer",
  },
];

const Members = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
    });
  })
  const [showSidebar, setShowSidebar] = useState(false);
  const getId = useRef();

  const handleSlideImage = () => {
    // console.log(getId.current, "ref")
    getId.current.id.modal('show')
  }
  const handleSidebar = () => {
    setShowSidebar(!showSidebar)
  }
  return (
    <div style={{ position: "relative" }}>
      <div id='members'>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" /></svg>
              </div>
              {/* <div className="modal-header">
								

							</div> */}
              <div className="modal-body">
                {!showSidebar && (
                  <div
                    className='circular m-2'
                    style={{ position: "absolute", zIndex: 1000 }}
                    onMouseEnter={() => setShowSidebar(!showSidebar)}>
                    <FontAwesomeIcon className="text-white fs-2 description-arrow" icon={faArrowLeftLong} />
                  </div>
                )}
                {showSidebar && (
                  <div className="sidebar" ref={getId} style={{ position: 'absolute', zIndex: 1000 }} onMouseLeave={() => setShowSidebar(!showSidebar)}>
                    <h1 className="name">Name</h1>
                    <p className="description">Description</p>
                  </div>
                )}

                <ReactFullscreenSlideshow images={images} title={"Board Members"} />
              </div>
            </div>
          </div>
        </div>
        {/* <ReactFullscreenSlideshow images={images} title={"Board Members"} cycle={true} currentSlideIndex={0} /> */}

        <div className='row Buy-sell-sec d-flex justify-content-center align-items-center'>
          <div className='col'>
            <div
              className='d-flex justify-content-center'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'>
              <img src={member1} className='member_image' alt='Member' data-aos="zoom-out-up" />
            </div>
            <h1
              className='d-flex justify-content-center faisal_ali_qane'
            // style={{ fontFamily: "Milane", fontSize: "4em" }}
            >
              Faisal Ali Qane
            </h1>
            <p className='d-flex justify-content-center chief_executive_officer'>
              Chief Executive Officer
            </p>
          </div>

          <div className='col'>
            <div className='d-flex justify-content-center px-5'>
              <p className='buy-sell-para' data-aos="zoom-out-up">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like
              </p>
            </div>
          </div>
        </div>
        <div className='Buy-sell-sec'>
          <div className='line' />
        </div>

        <div
          className='row Buy-sell-sec d-flex justify-content-center align-items-center px-0'
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'>
          <div className='col'>
            <div className='d-flex justify-content-center px-5'>
              <p className='buy-sell-para' data-aos="fade-down">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like
              </p>
            </div>
          </div>
          <div className='col'>
            <div className='d-flex justify-content-center'>
              <img src={member2} className='member_image' alt='Member' data-aos="fade-down" />
            </div>
            <h1
              className='d-flex justify-content-center faisal_ali_qane faisal_ali_qane1'
            // style={{ fontFamily: "Milane", fontSize: "4em" }}
            >
              Faisal Ali Qane
            </h1>
            <p className='d-flex justify-content-center chief_executive_officer chief_executive_officer1'>
              Chief Executive Officer
            </p>
          </div>
        </div>
        <div className='Buy-sell-sec'>
          <div className='line' />
        </div>
        <div
          className='row Buy-sell-sec d-flex justify-content-center align-items-center'
          data-bs-toggle='modal'
          data-bs-target='#exampleModal'>
          <div className='col'>
            <div className='d-flex justify-content-center'>
              <img src={member3} alt='Member' className='member_image' data-aos="fade-down" />
            </div>
            <h1
              className='d-flex justify-content-center faisal_ali_qane'
            // style={{ fontFamily: "Milane", fontSize: "4em" }}
            >
              Faisal Ali Qane
            </h1>
            <p className='d-flex justify-content-center chief_executive_officer'>
              Chief Executive Officer
            </p>
          </div>

          <div className='col'>
            <div className='d-flex justify-content-center px-5'>
              <p className='buy-sell-para' data-aos="fade-down">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like
              </p>
            </div>
          </div>
        </div>
        <div className='row Buy-sell-sec d-flex justify-content-end m_logo'>
          <img style={{ width: "234px" }} src={M} alt='Member' data-aos="fade-down" />
        </div>
      </div>
    </div>
  );
};

export default Members;
