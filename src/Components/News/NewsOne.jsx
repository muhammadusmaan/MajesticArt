import React, { useState, useEffect } from 'react';
import NewsOneNav from '../News/NewsOneNav';
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import Circle from '../../images/circlelines.png';
import Tri from '../../images/sidelines.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import img1 from '../../images/1.jpg'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'
import img4 from '../../images/4.jpg'
import img5 from '../../images/5.jpg'
import img6 from '../../images/6.jpg'
import ArtImg from '../../images/art1.jpg'
import ArtImg2 from '../../images/art2.jpg'
import ArtImg3 from '../Services/assets/Layer10.png'
import ArtImg4 from '../Services/assets/Layer9.png'
import ArtImg5 from '../Services/assets/img3.png'
import M from '../Services/assets/M.png'
import Mlogo from '../../images/bg-logo.png'
import axios from 'axios';
import { Link } from 'react-router-dom';

function NewsOne(props) {
  const [slideIndex, setSlideIndex] = useState(0);
    const [newsContent, setNewsContent] = useState({title: '',shortDescription:'', description: '', image: [], hashtags:[] });
    const [newsArrayContent, setNewsArrayContent] = useState([]);
    const [newsFullContent, setNewsFullContent] = useState([]);
    const [contentIndex, setContentIndex] = useState(0);
    var imagesArray = []


    const tokenString = localStorage.getItem('LanguageType'); 
    const userToken = JSON.parse(tokenString);


    async function getNewsData() {
        try {
            await axios.get('https://test-api.majesticarts.com/news')
                .then((res) => {
                    console.log("News content is:", res.data)
                    setNewsArrayContent(res.data.data);
                    setNewsFullContent(res.data)

                    imagesArray = res.data.data[contentIndex].image.split(";", 2)

                    setNewsContent({
                        title: res.data.data[contentIndex].title,
                        shortDescription: res.data.data[contentIndex].excerpt,
                        description: res.data.data[contentIndex].body,
                        image: imagesArray,
                        hashtags: res.data.data[contentIndex].hashtags.split(",", 2 )
                    })
                    if (userToken === "ar") {
                        setNewsContent({
                            title: res.data.data[contentIndex].translations[0].title,
                            shortDescription: res.data.data[contentIndex].translations[0].excerpt,
                            description: res.data.data[contentIndex].translations[0].body,
                            image: imagesArray,
                            hashtags: res.data.data[contentIndex].translations[0].hashtags.split(",", 2 )

                        })
                    }
                    else if (userToken === "it") {
                        setNewsContent({
                            title: res.data.data[contentIndex].translations[1].title,
                            shortDescription: res.data.data[contentIndex].translations[1].excerpt,
                            description: res.data.data[contentIndex].translations[1].body,
                            image: imagesArray,
                            hashtags: res.data.data[contentIndex].translations[1].hashtags.split(",", 2 )

                        })
                    }
                })
        }
        catch (err) {
            console.log(err)
        }
    }

    const FuncNewsContent=(indx)=>{ 

        imagesArray = newsFullContent.data[indx].image.split(";", 2)

        setNewsContent({
            title: newsFullContent.data[indx].title,
            shortDescription: newsFullContent.data[indx].excerpt,
            description: newsFullContent.data[indx].body,
            image: imagesArray,
            hashtags: newsFullContent.data[indx].hashtags.split(",", 2 )

        })
        if (userToken === "ar") {
            setNewsContent({
                title:newsFullContent.data[indx].translations[0].title,
                shortDescription: newsFullContent.data[indx].translations[0].excerpt,
                description: newsFullContent.data[indx].translations[0].body,
                image: imagesArray,
            hashtags: newsFullContent.data[indx].hashtags.split(",", 2 )


            })
        }
        else if (userToken === "it") {
            setNewsContent({
                title: newsFullContent.data[indx].translations[1].title,
                shortDescription: newsFullContent.data[indx].translations[1].excerpt,
                description:newsFullContent.data[indx].translations[1].body,
                image: imagesArray,
            hashtags: newsFullContent.data[indx].hashtags.split(",", 2 )

            })
        }
    }

    const truncateText = (str) => {
        return str.length > 10 ? str.substring(0, 350) +"...": str;
      }

    useEffect(() => {
        getNewsData();

        AOS.init({
            offset: 200,
            duration: 1500,
        });

    }, [props])
 
  const images = [{ text: "Ecce Agnus Dei", image: img1 }, { text: "Ecce Agnus Dei", image: img2 }, { text: "Ecce Agnus Dei", image: img3 }, { text: "Ecce Agnus Dei", image: img4 }, { text: "Ecce Agnus Dei", image: img5 }, { text: "Ecce Agnus Dei", image: img6 }];

  const settings = {
    dots: false,
    className: "center",
    leftMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid max-width-container px-0" >
        <NewsOneNav />
        <div className="container-fluid">
          <div className="row">
            <div className="bg-News-line">
              <img src={Circle} className="news-bg-circle img-fluid"></img>
              <img src={Tri} className="news-bg-tri img-fluid"></img>
            </div>
            <div className="news-cus-ul">
            <ul className="list-unstyled text-center">
                            <li className="news-buttons-list"><a href="#" className="text-decoration-none news-buttons-icon"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
                            {newsArrayContent.map((singleNewsArrayContent, indx) => {
                                         if(userToken==='ar'){
                                return (
                                    <li  onClick={() => { setContentIndex(indx); FuncNewsContent(indx) }} key={indx} className="news-buttons-list"><a style={{cursor:"pointer"}} className={indx===contentIndex ?"text-decoration-none news-buttons active":"text-decoration-none news-buttons"}>{singleNewsArrayContent.translations[0].title}</a></li>
                                )}
                               else if(userToken==='it'){
                                    return (
                                        <li  onClick={() => { setContentIndex(indx); FuncNewsContent(indx) }} key={indx} className="news-buttons-list"><a style={{cursor:"pointer"}} className={indx===contentIndex ?"text-decoration-none news-buttons active":"text-decoration-none news-buttons"}>{singleNewsArrayContent.translations[1].title}</a></li>
                                    )}
                                        return (
                                            <li  onClick={() => { setContentIndex(indx); FuncNewsContent(indx) }} key={indx} className="news-buttons-list"><a style={{cursor:"pointer"}} className={indx===contentIndex ?"text-decoration-none news-buttons active":"text-decoration-none news-buttons"}>{singleNewsArrayContent.title}</a></li>
                                        )
                            })}
                        </ul>
            </div>
            <div className="row mx-0">
              <div className="col-11 mx-auto news-events-heading px-lg-5 px-md-5">
                <h1 className="event-news-title"> News</h1>
                <span className="event-news-border"></span>
              </div>
              <div className="NewsEventSlider mt-5">
                <Slider {...settings}>
                  {
                    newsContent.image.map((img, index) => (
                      <>
                          <div className={index === slideIndex ? 'NewsEventSlider NewsEventSlider-active' : 'NewsEventSlider-1'} key={index} style={{}}>

                          <a href="/NewsTwo" onClick={()=>{
                              localStorage.setItem('NewsTwoData', JSON.stringify(newsContent)) }}>  
                          <img src={img} alt="" /></a>
                          </div>
                          <div>
                              <h3 className='News-event-description'>{(index === slideIndex) ? img.text : ""}</h3>
                          </div>
                      </>
                  ))
                  }
                </Slider>
                <div className="col-lg-6 col-md-10 event-description-sec">
                                <div className="d-flex justify-content-between align-items-center  event-description-cust">
                                    <h3 className="event-name-title-1"><a className="text-secondary text-decoration-none" href="/NewsTwo">{newsContent.title}</a></h3>
                                    <ul className="list-unstyled d-flex gap-2 mb-0">
                                    {newsContent.hashtags.map((singleHashtag, indx) => {
                                return (
                                    <li key={indx} className="text-decoration-none art-event-btn px-4">{singleHashtag}</li>
                                    )})}
                                        {/* <li><a href="/NewsTwo" type="submit" className="text-decoration-none art-event-btn px-4">singleHashtag</a></li>
                                        <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-4">Painting expo</a></li>
                                        <li><a href="#" type="submit" className="text-decoration-none expo-btn px-4">expo</a></li> */}
                                    </ul>
                                </div>
                        
                                <div className="mt-2">
                                   <Link onClick={()=>{
                                        localStorage.setItem('NewsTwoData', JSON.stringify(newsContent)) }} 
                                        className="text-decoration-none" to="/NewsTwo"> 
                                        <h3 className="news-event-img-h-1">
                                        {newsContent.shortDescription}
                                    </h3></Link>
                                    <div className="news-event-news-content" dangerouslySetInnerHTML={{ __html: truncateText(newsContent.description)}} />
                                    <a onClick={()=>{
                                                localStorage.setItem('NewsTwoData', JSON.stringify(newsContent)) }}
                                     className="text-primary text-decoration-none" href="/NewsTwo">Read more</a>

                                </div>
                            </div>
                        </div>
                    </div>
            <div className="row p-0">
              <div className="col-11 mx-auto news-events-heading px-lg-5 px-md-5">
                <h1 className="event-news-title">Related News</h1>
                <span className="event-news-border"></span>
              </div>
              <div class="gallery">
                <div class="image-container image-container-2">
                  <div
                    href="/CollectionPageTwo"
                    class="image ice-cream"
                    data-aos="fade-down-right"
                  >
                    <img src={ArtImg} alt="" />
                    <div className="mt-4">
                      <div className="d-flex justify-content-between align-items-center news_hastags">
                        <h3 className="event-name-title">Events</h3>
                        <ul className="list-unstyled d-flex gap-2 mb-0 news_hastags">
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h3 className="news-event-img-h">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</h3>
                        <p>Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>                                        </div>
                    </div>
                  </div>

                  <div
                    href="images/img1.jpg"
                    class="image ice-cream"
                    data-aos="fade-down-right"
                  >
                    <img src={ArtImg4} alt="" />
                    <div className="mt-4">
                      <div className="d-flex justify-content-between align-items-center news_hastags">
                        <h3 className="event-name-title">Events</h3>
                        <ul className="list-unstyled d-flex gap-2 mb-0 news_hastags">
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h3 className="news-event-img-h">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</h3>
                        <p>Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>                                        </div>
                    </div>
                  </div>

                  <div
                    href="images/img1.jpg"
                    class="image ice-cream custom-feature-1"
                    data-aos="fade-down-right"
                  >
                    <img src={ArtImg2} alt="" />
                    <div className="mt-4">
                      <div className="d-flex justify-content-between align-items-center news_hastags">
                        <h3 className="event-name-title">Events</h3>
                        <ul className="list-unstyled d-flex gap-2 mb-0 news_hastags">
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h3 className="news-event-img-h">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</h3>
                        <p>Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>                                        </div>
                    </div>
                  </div>


                  <div
                    href="images/img1.jpg"
                    class="image ice-cream"
                    data-aos="fade-down-right"
                  >
                    <img src={ArtImg3} alt="" />
                    <div className="mt-4">
                      <div className="d-flex justify-content-between align-items-center news_hastags">
                        <h3 className="event-name-title">Events</h3>
                        <ul className="list-unstyled d-flex gap-2 mb-0 news_hastags">
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h3 className="news-event-img-h">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</h3>
                        <p>Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>                                        </div>
                    </div>
                  </div>


                  <div
                    href="images/img1.jpg"
                    class="image ice-cream"
                    data-aos="fade-down-right"
                  >
                    <img src={ArtImg4} alt="" />
                    <div className="mt-4">
                      <div className="d-flex justify-content-between align-items-center news_hastags">
                        <h3 className="event-name-title">Events</h3>
                        <ul className="list-unstyled d-flex gap-2 mb-0 news_hastags">
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h3 className="news-event-img-h">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</h3>
                        <p>Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>                                        </div>
                    </div>
                  </div>


                  <div
                    href="images/img1.jpg"
                    class="image ice-cream"
                    data-aos="fade-down-right"
                  >
                    <img src={ArtImg5} alt="" />
                    <div className="mt-4">
                      <div className="d-flex justify-content-between align-items-center news_hastags">
                        <h3 className="event-name-title">Events</h3>
                        <ul className="list-unstyled d-flex gap-2 mb-0 news_hastags" >
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h3 className="news-event-img-h">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</h3>
                        <p>Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>                                        </div>
                    </div>
                  </div>

                  <div
                    href="images/img1.jpg"
                    class="image ice-cream"
                    data-aos="fade-down-right"
                  >
                    <img src={ArtImg2} alt="" />
                    <div className="mt-4">
                      <div className="d-flex justify-content-between align-items-center news_hastags">
                        <h3 className="event-name-title">Events</h3>
                        <ul className="list-unstyled d-flex gap-2 mb-0 news_hastags">
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h3 className="news-event-img-h">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</h3>
                        <p>Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>                                        </div>
                    </div>
                  </div>
                  <div
                    href="images/img1.jpg"
                    class="image ice-cream"
                    data-aos="fade-down-right"
                  >
                    <img src={ArtImg5} alt="" />
                    <div className="mt-4">
                      <div className="d-flex justify-content-between align-items-center news_hastags">
                        <h3 className="event-name-title">Events</h3>
                        <ul className="list-unstyled d-flex gap-2 mb-0 news_hastags">
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h3 className="news-event-img-h">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</h3>
                        <p>Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>                                        </div>
                    </div>
                  </div>

                  <div
                    href="images/img1.jpg"
                    class="image ice-cream"
                    data-aos="fade-down-right"
                  >
                    <img src={ArtImg4} alt="" />
                    <div className="mt-4">
                      <div className="d-flex justify-content-between align-items-center news_hastags">
                        <h3 className="event-name-title">Events</h3>
                        <ul className="list-unstyled d-flex gap-2 mb-0 news_hastags">
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h3 className="news-event-img-h">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</h3>
                        <p>Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>                                        </div>
                    </div>
                  </div>

                  <div
                    href="images/img1.jpg"
                    class="image ice-cream"
                    data-aos="fade-down-right"
                  >
                    <img src={ArtImg} alt="" />
                    <div className="mt-4">
                      <div className="d-flex justify-content-between align-items-center news_hastags">
                        <h3 className="event-name-title">Events</h3>
                        <ul className="list-unstyled d-flex gap-2 mb-0 news_hastags">
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h3 className="news-event-img-h">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</h3>
                        <p>Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>                                        </div>
                    </div>
                  </div>

                  <div
                    href="images/img1.jpg"
                    class="image ice-cream"
                    data-aos="fade-down-right"
                  >
                    <img src={ArtImg2} alt="" />
                    <div className="mt-4">
                      <div className="d-flex justify-content-between align-items-center news_hastags">
                        <h3 className="event-name-title">Events</h3>
                        <ul className="list-unstyled d-flex gap-2 mb-0 news_hastags">
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h3 className="news-event-img-h">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</h3>
                        <p>Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>                                        </div>
                    </div>
                  </div>

                  <div
                    href="images/img1.jpg"
                    class="image ice-cream"
                    data-aos="fade-down-right"
                  >
                    <img src={ArtImg3} alt="" />
                    <div className="mt-4">
                      <div className="d-flex justify-content-between align-items-center news_hastags">
                        <h3 className="event-name-title">Events</h3>
                        <ul className="list-unstyled d-flex gap-2 mb-0 news_hastags">
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none art-event-btn px-3">Art Event</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none painting-expo-btn px-3">Painting expo</a></li>
                          <li><a href="#" type="submit" className="text-decoration-none expo-btn px-3">expo</a></li>
                        </ul>
                      </div>
                      <div className="mt-2">
                        <h3 className="news-event-img-h">Highest Gallery With The Most Important Collections That Surpass 6 Billion USD</h3>
                        <p>Majestic Arts Gallery is a one-of-its-Kind Initiative as it's Launching the Highest Gallery in the World</p>                                        </div>
                    </div>
                  </div>

                </div>
              </div>


              <div className="text-center">
                <ul className="list-unstyled d-flex justify-content-center gap_custom_news_pagination gap-3">
                  <li className=""><a href="" className="text-decoration-none news-page-num">1</a></li>
                  <li className="page-num-active"><a href="" className="text-decoration-none news-page-num page-num-active">2</a></li>
                  <li className=""><a href="" className="text-decoration-none news-page-num">3</a></li>
                  <li className=""><a href="" className="text-decoration-none news-page-num">4</a></li>
                  <li className=""><a href="" className="text-decoration-none news-page-num">5</a></li>
                  <li className=""><a href="" className="text-decoration-none news-page-num">6</a></li>
                  <li className=""><a href="" className="text-decoration-none news-page-num">7</a></li>
                  <li className=""><a href="" className="text-decoration-none news-page-num">8</a></li>
                  <li className=""><a href="" className="text-decoration-none news-page-num">9</a></li>
                </ul>
                <p className="news-page-title">Page</p>
              </div>
              <div className="M d-flex justify-content-end pb-3">
                <img src={M} className="m-icon" data-aos="fade-down-right"></img>
                <img src={Circle} className="news-bg-circle-2 img-fluid" data-aos="fade-down-right"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default NewsOne