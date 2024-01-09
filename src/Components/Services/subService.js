import React,{useState, useEffect}  from "react";
import buttonImage from "./assets/Rectangle 31 copy.png";
import M from "./assets/M.png";
import { state } from "./serviceData";
import { useParams } from "react-router-dom";
import ServiceNav from "../Services/ServiceNav"
import "aos/dist/aos.css";
import dateFormat from 'dateformat';

const SubService = (props) => {
  const params = useParams();

  const paramId = parseInt(params.id);
  const data = state.services_content.find((item) => item.id === paramId);
  const [subserviceContent, setSubserviceContent] = useState({});
  const tokenString = localStorage.getItem('ServiceData'); 
  const userToken = JSON.parse(tokenString);

  const tokenStringLanguage = localStorage.getItem('LanguageType');
  const languageToken = JSON.parse(tokenStringLanguage);

  useEffect(() => {        
    setSubserviceContent(userToken)
}, [props])


  return (
    <>
     <div className="container-fluid max-width-container px-0" >
        <ServiceNav />
        <div className="subService mt-5">
          <div className="sub">
            <h1 className="text-center service-heading mb-5">{subserviceContent?.title}</h1>
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-6 service-left">
                  <div className="service-img">
                    <a href="#dsd">
                    <img src={subserviceContent?.image} />

                    </a>
                  </div>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <div className="subService-detail">
                    <div className="rotate">
                    <h4>
                  {dateFormat(subserviceContent.date, "yyyy")}/{dateFormat(subserviceContent.date, "dd")}
                  </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="author">
      {
                            languageToken==="ar"?<h4>
                             { subserviceContent.title}
                            </h4>
                            :
        <h4>
          {subserviceContent.title?.split("").map((itm, key) => (
            <span
              style={{
                "animation-delay": `${0.5 * key}s`,
                "animation-duration": `${data.artName.split("").length}s`,
              }}
            >
              {itm}
            </span>
          ))}
        </h4>
}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
          <div className="container">
            <div className="descParagraph ">
              <div className="par">
              <div className="news-event-news-content" dangerouslySetInnerHTML={{ __html: subserviceContent.description}} />

              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="end">
              <p>Let's Get In Touch</p>
              <a href="">
                <img src={buttonImage} alt="" />
              </a>
            </div>

            <div className="m_tag">
              <img src={M} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubService;
