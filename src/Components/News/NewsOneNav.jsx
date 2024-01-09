import React, { useState, useEffect } from 'react'
import NewsOneBg from "../../images/nav7.jpg";
import SubPageNav from '../SubPageNav';

function NewsOneNav() {
    const [isSearch, setIsSearch] = useState(false);
    return (
        <>
            <div className="container-fluid px-0">
                <div>
                    <img className="img-fluid about-bg-nav" src={NewsOneBg}></img>
                </div>
                {/* <div class="card-img-overlay card-img-overlay-aboutNav d-flex justify-content-center"></div> */}
                <h1 className="About-nav-heading">Majestic Arts News</h1>
                <SubPageNav></SubPageNav>


            </div>
        </>
    )
}
export default NewsOneNav