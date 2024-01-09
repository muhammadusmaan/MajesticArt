import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import ArtImg from '../../images/art1.jpg'
import ArtImg2 from '../../images/art2.jpg'
import Circle from '../../images/circlelines.png'
import Tri from '../../images/sidelines.png'
import ArtImg3 from '../Services/assets/Layer10.png'
import ArtImg4 from '../Services/assets/Layer9.png'
import ArtImg5 from '../Services/assets/img3.png'
import M from '../Services/assets/M.png'
import CollectionMainNav from '../Collections/CollectionMainNav';

function CollectionMain() {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1500,
        });
    })

    return (
        <>
            <div className="container-fluid max-width-container px-0" >
                <CollectionMainNav />
                <div className="container-fluid ">
                    <div className="row px-lg-5">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <ul className="list-unstyled cate-list">
                                <h1 className="cate-heading">Categories</h1>
                                <li className="nav-item"><a href="#" className="text-decoration-none cate-btn">Modern Art</a></li>
                                <li className="nav-item"><a href="#" className="text-decoration-none cate-btn">Landscape</a></li>
                                <li className="nav-item"><a href="#" className="text-decoration-none cate-btn">Still Life</a></li>
                                <li className="nav-item"><a href="#" className="text-decoration-none cate-btn">Portraits</a></li>
                                <li className="nav-item"><a href="#" className="text-decoration-none cate-btn">Abstract Art</a></li>
                                <li className="nav-item"><a href="#" className="text-decoration-none cate-btn">Genre</a></li>

                            </ul>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 collection-img-grid gallery-bg">
                            <div class="gallery">
                                <div class="image-container" data-aos="fade-down-right">
                                    <a
                                        href="#"
                                        class="image img-custom2 ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg2} alt="" />
                                    </a>
                                    <a
                                        href="#"
                                        class="image img-custom ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg2} alt="" />
                                    </a>
                                    <a
                                        href="#"
                                        class="image ice-cream img-custom4"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg2} alt="" />
                                    </a>

                                    <a
                                        href="#"
                                        class="image chocolate img-custom3"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg2} alt="" />
                                    </a>
                                    <a
                                        href="#"
                                        class="image chocolate img-custom4"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg2} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="bg-feature-line" data-aos="fade-down-right">
                            <img src={Circle} className="feature-circle img-fluid" data-aos="fade-down-right"></img>
                            <img src={Tri} className="feature-tri img-fluid" data-aos="fade-down-right"></img>
                        </div>
                        <div className="featured-content">
                            <h2 className="featured-title">Featured Artwork</h2>
                            <h4 className="featured-subtitle">A Premier Art Curator Par Excellence</h4>
                        </div>
                        <div className="col-lg-12 col-md-6">
                            <div class="gallery">
                                <div class="image-container image-container-2">
                                    <a
                                        href="/CollectionPageTwo"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg4} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream custom-feature-1"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg2} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>


                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg3} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>


                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg4} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>


                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg5} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg2} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>
                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg5} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg4} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg2} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg3} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-6">
                            <div class="gallery">
                                <div class="image-container image-container-2">
                                    <a
                                        href="/CollectionPageTwo"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg4} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream custom-feature-1"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg2} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>


                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg3} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>


                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg4} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>


                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg5} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg2} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>
                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg5} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg4} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg2} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                    <a
                                        href="images/img1.jpg"
                                        class="image ice-cream"
                                        data-aos="fade-down-right"
                                    >
                                        <img src={ArtImg3} alt="" />
                                        <ul className="list-unstyled">
                                            <li className="title-feature-1">1455/60</li>
                                            <li className="title-feature-2">Ecce Agnus Dei</li>
                                            <li><a href="!#" className="title-feature-btn">By: Giovanni di Paolo</a></li>
                                        </ul>
                                    </a>

                                </div>
                            </div>
                        </div>
                        <div className="M d-flex justify-content-end pb-3">
                            <img src={M} className="m-icon" data-aos="fade-down-right"></img>
                        </div>
                    </div>
                </div>
            </div> 

        </>
    )
}
export default CollectionMain