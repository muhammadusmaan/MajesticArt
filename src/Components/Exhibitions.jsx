import React, { useEffect } from 'react';
import ExhibImg from '../images/exhi-bg.jpg'
import Exhibition from '../images/exhibi.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot, faArrowRightLong
} from "@fortawesome/free-solid-svg-icons";
import Heading from '../Utils/Heading.js';
import ExhibitionSvg from '../images/Exibition.svg'

function Exhibitions() {


    return (
        <>
            <div className="container-fluid">
                <div className="row card-img-overlay-2">
                    <img src={ExhibImg} className="img-fluid px-lg-0 px-md-0 exhi-img" />
                    <div className="col-10 mx-auto px-lg-5 px-md-5 exhibi-cards">
                        <div className="exhibi-h-div"><h1 className="exhibi-heading">Exhibitions</h1></div>
                        <div className="row row-position">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div class="card border-0 exhib-cars-res" style={{ width: '20rem', height: '45vh' }}>
                                    <img class="card-img-top img-card border-0" src={Exhibition} alt="Card image cap" />
                                    <div class=" d-flex justify-content-center overlay-exhi-1"></div>
                                    <ul className="list-unstyled position-absolute card-ul">
                                        <li className="img-bottom-des-1 text-white date-fs">26 May 2022</li>
                                        <li className="img-bottom-des-2 li-mt-n name-fs">Renaissance Arts</li>
                                        <li className="img-bottom-des-2 li-mt-n exhibi-fs">Exhibition</li>
                                        <li className="img-bottom-des-2 li-mt-n city-name"><FontAwesomeIcon className="fs-6" icon={faLocationDot} />  Dubai</li>
                                    </ul>
                                    <div className="d-flex justify-content-end arrow-btn-div">
                                        <button className="btn btn-arrow"></button>
                                    </div>
                                    <div className="d-flex justify-content-end arrow-icon-div">
                                        <FontAwesomeIcon className="arrow-custom" icon={faArrowRightLong} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 sec-card col-sm-12">
                                <div class="card border-0 exhib-cars-res" style={{ width: '20rem', height: '45vh' }}>
                                    <img class="card-img-top img-card border-0" src={Exhibition} alt="Card image cap" />
                                    <div class=" d-flex justify-content-center overlay-exhi-1"></div>
                                    <ul className="list-unstyled position-absolute card-ul">
                                        <li className="img-bottom-des-1 text-white date-fs">26 May 2022</li>
                                        <li className="img-bottom-des-2 li-mt-n name-fs">Renaissance Arts</li>
                                        <li className="img-bottom-des-2 li-mt-n exhibi-fs">Exhibition</li>
                                        <li className="img-bottom-des-2 li-mt-n city-name"><FontAwesomeIcon className="fs-6" icon={faLocationDot} />  Dubai</li>
                                    </ul>
                                    <div className="d-flex justify-content-end arrow-btn-div-2">
                                        <button className="btn btn-arrow"></button>
                                    </div>
                                    <div className="d-flex justify-content-end arrow-icon-div">
                                        <FontAwesomeIcon className="arrow-custom" icon={faArrowRightLong} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 third-card col-sm-12">
                                <div class="card border-0 exhib-cars-res" style={{ width: '20rem', height: '45vh' }}>
                                    <img class="card-img-top img-card " src={Exhibition} alt="Card image cap" />
                                    <div class="d-flex justify-content-center overlay-exhi-1"></div>
                                    <ul className="list-unstyled position-absolute card-ul">
                                        <li className="img-bottom-des-1 text-white date-fs">26 May 2022</li>
                                        <li className="img-bottom-des-2 li-mt-n name-fs">Renaissance Arts</li>
                                        <li className="img-bottom-des-2 li-mt-n exhibi-fs">Exhibition</li>
                                        <li className="img-bottom-des-2 li-mt-n city-name"><FontAwesomeIcon className="fs-6" icon={faLocationDot} />  Dubai</li>
                                    </ul>
                                    <div className="d-flex justify-content-end arrow-btn-div-3">
                                        <button className="btn btn-arrow"></button>
                                    </div>
                                    <div className="d-flex justify-content-end arrow-icon-div">
                                        <FontAwesomeIcon className="arrow-custom" icon={faArrowRightLong} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-view-div">
                        <button submit="type" className="btn btn-view-all">VIEW ALL
                            <img src={ExhibitionSvg} className="exhibition-svg"></img>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Exhibitions