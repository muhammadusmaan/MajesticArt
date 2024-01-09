import React, { useEffect,useState } from "react";
import Slider from "react-slick";
import S1 from "./assets/slider1.jpg";
import S2 from "./assets/slider2.jpg";
import S3 from "./assets/slider3.jpg";
import "./assets/events.css";
import slick from "slick-carousel";
import EventNav from "../Events/EventNav"
import Aos from "aos";
import "aos/dist/aos.css";
import dateFormat from 'dateformat';

const SingleEvent = (props) => {
  const state = {
    eventContent: {
      title: "Special Event",
      subtitle: "Majestic Art present the different perspecive of Art",
      slides: [
        { id: 1, image: S1 },
        { id: 2, image: S2 },
        { id: 3, image: S3 },
      ],
      eventTitle: "Antique Art Exhibition",
      date: "August 23, 2022",
      time: "5:00-7:00",
      d1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      d2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      d3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      location: "Burjkhalifa 150th floor Majestic Art Galllery",
      guests: [
        { id: 1, name: "Kaleem-u-llah jan" },
        { id: 2, name: "Bilal Fareed dogar" },
        { id: 3, name: "Abrar Amin Choudry" },
        { id: 4, name: "Major Karan Bhatti" },
      ],
    },
  };
  const data = state.eventContent;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    autoplay: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          variableWidth: false,
          slidesToShow: 1,
          className: "center",
          centerMode: true,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const tokenStringLang = localStorage.getItem('LanguageType');
  const userTokenLang = JSON.parse(tokenStringLang);

const [singleEventContent, setSingleEventContent]=useState({});
const [singleEventContentImage, setSingleEventContentImage]=useState([]);


  useEffect(() => {
    Aos.init({ duration: 2000 });
   
    const tokenString = localStorage.getItem('SingleListEventData');
    const userToken = JSON.parse(tokenString);
    setSingleEventContent(userToken);
    console.log("Single Event ka data:",userToken);
 
    const tokenStringImage = localStorage.getItem('SingleListEventDataImage');
const userTokenImage = JSON.parse(tokenStringImage);
    setSingleEventContentImage([userTokenImage]);
    console.log("Single Event ki image:",userTokenImage);

  }, [props]);

  return (
    <>
    <div className="container-fluid max-width-container px-0" >
        <EventNav />
        <div className="single-event">
          {/* Event Section Heading */}

          {/* Event Slider */}
          <div className="single-event-slider">
            <div className="sec-heading text-center">
              <h1>{data.title}</h1>
              <h3>{data.subtitle}</h3>
            </div>
            <Slider {...settings}>
          {singleEventContentImage.map((item, ids) => (
            <div key={ids} style={{ width: 1100 }}>
              <div className="slider-img mx-5">
                <img src={item} alt={`slider${ids}`} />
              </div>
            </div>
          ))}
        </Slider>
          </div>
          {/* Event Content */}
          <div className="bg-img mt-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="event-content">
                  <h2>
                  {singleEventContent.title?.split("").map((itm, key) => (
                    <span
                      key={key}
                      style={{
                        animationDelay: `${0.5 * key}s`,
                        animationDuration: `${
                          singleEventContent.title.split("").length
                        }s`,
                      }}
                    >
                      {itm}
                    </span>
                  ))}
                </h2>
                <h5>
                {dateFormat(singleEventContent.createdAt, "mmmm dd, yyyy | h:MM TT")}
                </h5>
                    <div className="descriptions mt-5">
                    <div dangerouslySetInnerHTML={{ __html: singleEventContent.description }} />
                <div dangerouslySetInnerHTML={{ __html: singleEventContent.description }} />
                  
                    </div>
                    <div className="location">
                      <h2>Location</h2>
                      <h5>{singleEventContent.location}</h5>

                    </div>
                    <div className="guests-list">
                      <div className="list-box">
                        <ul>
                          <li>Name of Guest</li>
                          {singleEventContent.organisedBy?.split(",").map((item, ind) => (
                        <li key={ind} data-aos="fade-left"
                        style={{
                          animationDelay: `${0.5 * ind}s`,
                          animationDuration: `${
                            item.split("").length
                          }s`,
                        }}>
                              {item}
                        </li>
                      ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buy-btn text-center">
            <a href="">Buy Ticket</a>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleEvent;
