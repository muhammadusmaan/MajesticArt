import React, { useState, useEffect } from "react";
import bg from "./assets/Layer.png";
import EventImage from "./assets/upcomingEvent.png";
import "./assets/events.css";
import M from "../Services/assets/M.png";
import EventNav from "../Events/EventNav";
import axios from 'axios';
import dateFormat from 'dateformat';


const data = {
  id: "1",
  mainHeading: "Special Event",
  subHeading: "Majestic Art present the different persepective of Art",
  bgImage: bg,
  animatedH1: "Antique Art",
  animatedBelow: "August 23, 2022 | 5:00 - 7:00",
  text: "The Majestic Arts is a Premier Art curator par excellence. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
  eventUpcomingImg: EventImage,
  eventUpcomingText:
    "  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150 ",
};

const Event = (props) => {

  const [eventContent, setEventContent] = useState({});
  const [firstEventContent, setFirstEventContent] = useState();
  const [eventFullContent, setEventFullContent] = useState([]);
  const [contentIndex, setContentIndex] = useState(1);


  const tokenString = localStorage.getItem('LanguageType');
  const userToken = JSON.parse(tokenString);

  async function getEventsData() {
    try {
      await axios.get('https://test-api.majesticarts.com/event')
        .then((res) => {
          console.log("Evrnts data is", res.data)
          setEventFullContent(res.data.data)
          setFirstEventContent(res.data.data[0])
          setEventContent({
            title: res.data.data[0].title,
            description: res.data.data[0].description,
            image: res.data.data[0].image,
            date: res.data.data[0].createdAt
          })
          if (userToken === "it") {
           setFirstEventContent(res.data.data[0].translations[0])
            setEventContent({
              title: res.data.data[0].translations[0].title,
              description: res.data.data[0].translations[0].description,
              image: res.data.data[0].image,
              date: res.data.data[0].createdAt
            })
          }
          else if (userToken === "ar") {
           setFirstEventContent(res.data.data[0].translations[1])
            setEventContent({
              title: res.data.data[0].translations[1].title,
              description: res.data.data[0].translations[1].description,
              image: res.data.data[0].image,
              date: res.data.data[0].createdAt
            })
          }

        })
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(
    () => {
      getEventsData();
    },
    [props])


  return (
    <>
    <div className="container-fluid max-width-container px-0" >
      <EventNav />
      <div className="eventMain">
        <div className="container bg1">
          <div className="headings">
          <h1>{eventContent.title}</h1>
            <h3>{data.subHeading}</h3>
          </div>
          <div className="eventBgImg">
          <img src={eventContent.image} alt="Background Image" />
  </div>
          <div className="fixText">
            <div className="detail">
              <p>
                Located in U.A.E burjKhalifa 150th floor is one of the world's
                greatest Art gallery, housing's collection that spans centuries
                and the globe
              </p>
            </div>
          </div>
        </div>
        <div className="animated mt-3 mt-md-5">
          <div className="container bg2">
          <h1>
              {eventContent.title?.split("").map((itm, key) => (
                <span
                  style={{
                    "animation-delay": `${0.5 * key}s`,
                    "animation-duration": `${
                      eventContent.title.split("").length
                    }s`,
                  }}
                >
                  {itm}
                </span>
              ))}
            </h1>
            <h2>{dateFormat(eventContent.date, "mmmm dd, yyyy | h:MM TT")}</h2>
            <div className="news-event-news-content" dangerouslySetInnerHTML={{ __html: eventContent.description }} />

            <div className="buttons d-md-flex d-block justify-content-md-end text-center">
              <div className="btn1">
                <a
                 onClick={()=>{
             if(contentIndex!=0){
                  localStorage.setItem('SingleListEventData', JSON.stringify(firstEventContent))
                 localStorage.setItem('SingleListEventDataImage', JSON.stringify(eventContent.image))
              }
              }}
                 href="/single-event" className="learnMore">
                  Learn More
                </a>
              </div>
              <div className="btn2 mt-md-0 mt-2">
                <a href="" className="buyTicket">
                  Buy Ticket
                </a>
              </div>
            </div>
          </div>
        </div>

            {
        
        eventFullContent.map((singleEventContent, indx) => {
        if(indx!=0){
          if(userToken==="it"){
        return (
            <>        
              <div key={indx} className="eventUpcoming mt-5">
                <div className="container">
                  <div className="labels">
                    <h1>{singleEventContent.translations[0].title}</h1>
                    <h2>Short Description</h2>
                  </div>
                  <div className="row upcomingAnimation">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                      <img src={singleEventContent.image} alt="Upcoming Event" />
                      <div className="overlay">
                        <div className="start">
                          <div className="row">
                            <div className="col s">
                              <h2>Start</h2>
                            </div>
                            <div className="col">
                              <h2 className="date s2">{dateFormat(singleEventContent.translations[0].createdAt, "dd")}</h2>
                              <h3 className="date s3">{dateFormat(singleEventContent.translations[0].createdAt, "mmmm")}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 mt-md-0 mt-5 m-133">
                      <div dangerouslySetInnerHTML={{ __html: singleEventContent.translations[0].description }} />
                      <div className="buttons">
                        <a key={indx} onClick={()=>{
                          setContentIndex(indx);

                          if(contentIndex===indx){
                            localStorage.setItem('SingleListEventData', JSON.stringify(eventFullContent[indx].translations[0]))
                            localStorage.setItem('SingleListEventDataImage', JSON.stringify(eventFullContent[indx].image))   } 
                      }} href="/single-event"  className="learnMore">
                          Learn More
                        </a>

                        <a href="" className="buyTicket">
                          Buy Ticket
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="upComingAnimation">
                    <h1>
                      {singleEventContent.translations[0].title?.split("").map((itm, key) => (
                        <span
                          style={{
                            "animationDelay": `${0.5 * key}s`,
                            "animationDuration": `${singleEventContent.translations[0].title.split("").length
                              }s`,
                          }} 
                          key={key}
                        >
                          {itm}
                        </span>
                      ))}
                    </h1>
                    <h2>{dateFormat(singleEventContent.translations[0].createdAt, "mmmm dd, yyyy | h:MM TT")}</h2>
                  </div>
                </div>
              </div>
              <hr />
            </>
          )
        }

      else if(userToken==="ar"){
          return (
              <> 
                <div key={indx} className="eventUpcoming mt-5">
                  <div className="container">
                    <div className="labels">
                      <h1>{singleEventContent.translations[1].title}</h1>
                      <h2>Short Description</h2>
                    </div>
                    <div className="row upcomingAnimation">
                      <div className="col-sm-12 col-md-12 col-lg-6">
                        <img src={singleEventContent.image} alt="Upcoming Event" />
                        <div className="overlay">
                          <div className="start">
                            <div className="row">
                              <div className="col s">
                                <h2>Start</h2>
                              </div>
                              <div className="col">
                                <h2 className="date s2">{dateFormat(singleEventContent.translations[1].createdAt, "dd")}</h2>
                                <h3 className="date s3">{dateFormat(singleEventContent.translations[1].createdAt, "mmmm")}</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
  
                      <div className="col-sm-12 col-md-12 col-lg-6 mt-md-0 mt-5 m-133">
                        <div dangerouslySetInnerHTML={{ __html:singleEventContent.translations[1].description }} />
                        <div className="buttons">
                          <a key={indx} onClick={()=>{
                          setContentIndex(indx);
                          if(contentIndex===indx){
                            localStorage.setItem('SingleListEventData', JSON.stringify(eventFullContent[indx].translations[1]))
                            localStorage.setItem('SingleListEventDataImage', JSON.stringify(eventFullContent[indx].image))}
                                
                        }}   href="/single-event" className="learnMore">
                            Learn More
                          </a>
  
                          <a href="" className="buyTicket">
                            Buy Ticket
                          </a>
                        </div>
                      </div>
                    </div>
  
                    <div className="upComingAnimation">
                      <h1>
                        {singleEventContent.translations[1].title?.split("").map((itm, key) => (
                          <span
                            style={{
                              "animationDelay": `${0.5 * key}s`,
                              "animationDuration": `${singleEventContent.translations[1].title.split("").length
                                }s`,
                            }} 
                            key={key}
                          >
                            {itm}
                          </span>
                        ))}
                      </h1>
                      <h2>{dateFormat(singleEventContent.translations[1].createdAt, "mmmm dd, yyyy | h:MM TT")}</h2>
                    </div>
                  </div>
                </div>
                <hr />
              </>
            )
          }
        
          return (
            <>
            
              <div key={indx} className="eventUpcoming mt-5">
                <div className="container">
                  <div className="labels">
                    <h1>{singleEventContent.title}</h1>
                    <h2>Short Description</h2>
                  </div>
                  <div className="row upcomingAnimation">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                      <img src={singleEventContent.image} alt="Upcoming Event" />
                      <div className="overlay">
                        <div className="start">
                          <div className="row">
                            <div className="col s">
                              <h2>Start</h2>
                            </div>
                            <div className="col">
                              <h2 className="date s2">{dateFormat(singleEventContent.createdAt, "dd")}</h2>
                              <h3 className="date s3">{dateFormat(singleEventContent.createdAt, "mmmm")}</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-12 col-lg-6 mt-md-0 mt-5 m-133">
                      <div dangerouslySetInnerHTML={{ __html: singleEventContent.description }} />
                      <div className="buttons">
                        <a key={indx} onClick={()=>{
                          setContentIndex(indx);
                          if(contentIndex===indx){
                            localStorage.setItem('SingleListEventData', JSON.stringify(eventFullContent[indx]))
                            localStorage.setItem('SingleListEventDataImage', JSON.stringify(eventFullContent[indx].image))}      
                        }}  
                         href="/single-event" className="learnMore">
                          Learn More
                        </a>

                        <a href="" className="buyTicket">
                          Buy Ticket
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="upComingAnimation">
                    <h1>
                      {singleEventContent.title?.split("").map((itm, key) => (
                        <span
                          style={{
                            "animationDelay": `${0.5 * key}s`,
                            "animationDuration": `${singleEventContent.title.split("").length
                              }s`,
                          }} 
                          key={key}
                        >
                          {itm}
                        </span>
                      ))}
                    </h1>
                    <h2>{dateFormat(eventContent.date, "mmmm dd, yyyy | h:MM TT")}</h2>
                  </div>
                </div>
              </div>
              <hr />
            </>
          )}
        })}

        <div className="m_tag">
          <img src={M} alt="" />
        </div>
      </div>
      </div>
    </>
  );
};

export default Event;
