import React, { useState, useEffect } from 'react'
import ServiceBg from "../../images/nav8.jpg"
import SubPageNav from '../SubPageNav';

function ServiceNav() {
    const [isSearch, setIsSearch] = useState(false);
    return (
        <>
            <div className="container-fluid px-0">
                <div>
                    <img className="img-fluid about-bg-nav" src={ServiceBg}></img>
                </div>
                {/* <div class="card-img-overlay card-img-overlay-aboutNav d-flex justify-content-center"></div> */}
                <h1 className="About-nav-heading">Majestic Art Services</h1>
                <div className="position-relative">
                    <p className="About-nav-quotation">majestic Arts was founded with a vision to provide a 360-degree range of services in the art industry</p>
                </div>
                <SubPageNav></SubPageNav>
            </div>
        </>
    )
}
export default ServiceNav