import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import "./assets/service.css";
import { state } from "./serviceData";
import ServiceNav from "../Services/ServiceNav"
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
import dateFormat from 'dateformat';

const Services = (props) => {
  const [showContent, setShowContent] = useState(1);

  // const sliderRef = useRef();
  const [serviceContent, setServiceContent] = useState({ title: '', description: '', image: '', date:'' });
  const [serviceArrayContent, setServiceArrayContent] = useState([]);
  const [serviceFullContent, setServiceFullContent] = useState([]);
  const [contentIndex, setContentIndex] = useState(0);

  const tokenString = localStorage.getItem('LanguageType');
  const userToken = JSON.parse(tokenString);

  async function getServicesData() {
    try {
      await axios.get('https://test-api.majesticarts.com/service')
        .then((res) => {
          console.log("Services data is", res.data)
          setServiceArrayContent(res.data.data);
          setServiceFullContent(res.data)
          setServiceContent({
            title: res.data.data[contentIndex].name,
            description: res.data.data[contentIndex].description,
            image: res.data.data[contentIndex].image,
            date: res.data.data[contentIndex].createdAt
          })
          if (userToken === "ar") {
            setServiceContent({
              title: res.data.data[contentIndex].translations[0].name,
              description: res.data.data[contentIndex].translations[0].description,
              image: res.data.data[contentIndex].image,
              date: res.data.data[contentIndex].createdAt
            })
          }
          else if (userToken === "it") {
            setServiceContent({
              title: res.data.data[contentIndex].translations[1].name,
              description: res.data.data[contentIndex].translations[1].description,
              image: res.data.data[contentIndex].image,
              date: res.data.data[contentIndex].createdAt
            })
          }
        })
    }
    catch (err) {
      console.log(err)
    }
  }

  const FuncServiceContent=(indx)=>{ 

    setServiceContent({
      title: serviceFullContent.data[indx].name,
      description: serviceFullContent.data[indx].description,
      image: serviceFullContent.data[indx].image,
      date: serviceFullContent.data[indx].createdAt

  })
    if (userToken === "ar") {
        setServiceContent({
        title:serviceFullContent.data[indx].translations[0].name,
        description: serviceFullContent.data[indx].translations[0].description,
        image: serviceFullContent.data[indx].image,
        date: serviceFullContent.data[indx].createdAt

        })
    }
    else if (userToken === "it") {
        setServiceContent({
            title: serviceFullContent.data[indx].translations[1].name,
            description:serviceFullContent.data[indx].translations[1].description,
            image: serviceFullContent.data[indx].image,
      date: serviceFullContent.data[indx].createdAt
        })
    }
   
}

const truncateText = (str) => {
  return str.length > 10 ? str.substring(0, 350) +"...": str;
}

  useEffect(
    () => {
      getServicesData();
    },
    [props])

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 4,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const displayContent = (id) => {
    setShowContent(id);
    // sliderRef.current.slickGoTo(id);
  };
  return (
    <>
    <div className="container-fluid max-width-container px-0" >
        <ServiceNav />
        <div className="services">
          <div className="row">
            <div className="col-12">
            <div className="services_list text-center">
            <ul>
              {serviceArrayContent.map((singleServiceArrayContent, indx) => {
                if(userToken==='ar'){
                  return (
                    <li key={indx} style={{ cursor: "pointer" }} >
                      <button
                        className={indx === contentIndex ? "active" : ""}
                        onClick={() => { setContentIndex(indx); 
                        FuncServiceContent(indx)}}
                      >
                        {singleServiceArrayContent.translations[0].name}
                      </button>
                    </li>
                  )
                }
               else if(userToken==='it'){
                  return (
                    <li key={indx} style={{ cursor: "pointer" }} >
                      <button
                        className={indx === contentIndex ? "active" : ""}
                        onClick={() => { setContentIndex(indx); 
                        FuncServiceContent(indx)}}
                      >
                        {singleServiceArrayContent.translations[1].name}
                      </button>
                    </li>
                  )
                }
                return (
                  <li key={indx} style={{ cursor: "pointer" }} >
                    <button
                      className={indx === contentIndex ? "active" : ""}
                      onClick={() => { setContentIndex(indx); 
                      FuncServiceContent(indx)}}
                    >
                      {singleServiceArrayContent.name}
                    </button>
                  </li>
                )

              })}

              {/* {state.services_list.map((item) => (
                <li key={item.id}>
                  <button
                    className={showContent === item.id ? "active" : ""}
                    onClick={() => displayContent(item.id)}
                  >
                    {item.name}
                  </button>
                </li>
              ))} */}
            </ul>
          </div>
          <div className="services_content">
            {/* {state.services_content.map((item) => ( */}
              {/* <div
                className={`single_service ${showContent === item.id ? "d-block" : "d-none"
                  }`}
                key={item.id}
              > */}

              <div
                className="single_service">
                <h1 className="text-center service-heading mb-5">
                  {serviceContent.title}
                </h1>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 service-left">
                      <div className="service-img">

                        <a>
                          {/* <img src={item.image} alt={item.name} /> */}
                          <img src={serviceContent.image} />
                        </a>
                      </div>
                      <div className="author">
                        {
                            userToken==="ar"?<h4>
                             { serviceContent.title}
                            </h4>
                            :
                            <h4>
                            {serviceContent.title?.split("").map((itm, key) => {   
                           return(
                                <span
                                  style={{
                                    "animationDelay": `${0.5 * key}s`,
                                    "animationDuration": `${serviceContent.title?.split("").length
                                      }s`,
                                  }}
                                >
                                  {itm}
                                </span>
                              )
                                
                            }
                  
                           )}
                          </h4>
                             
                        }
                       
                        {/* <h6>
                          {item.artBy.split("").map((itm, key) => (
                            <span
                              style={{
                                "animation-delay": `${0.5 * key}s`,
                                "animation-duration": `${item.artName.split("").length
                                  }s`,
                              }}
                            >
                              {itm}
                            </span>
                          ))}
                        </h6> */}
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                      <div className="service-detail">
                        <div className="rotate">
                          <h4>
                          {dateFormat(serviceContent.createdAt, "yyyy")}/{dateFormat(serviceContent.createdAt, "dd")}
                          </h4>
                        </div>
                        <div className="news-event-news-content" dangerouslySetInnerHTML={{ __html: truncateText(serviceContent.description) }} />

                        <a href={`/service-detail/1`}
                        onClick={()=>{
                          localStorage.setItem('ServiceData', JSON.stringify(serviceContent)) }}
                        >Learn More</a>
                        <div className="line"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* ))} */}
          </div>
              <div className="service_slider">
                <Slider {...settings}>
                  {state.services_content.map((item) => (
                    <div key={item.id} className="slider-item">
                      <div className="slide-img-service">
                        <a href={`/service-detail/${item.id}`} className="s-link">
                          <img
                            src={item.image}
                            className="slider-image"
                            alt="dsd"
                          />
                        </a>
                        <p className="slider-date">
                          {item.date.year}/{item.date.day}
                        </p>
                        <div className="date-counter">
                          <CountUp start={0} end={item.date.year} duration={4} />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
