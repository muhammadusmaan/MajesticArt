import React, { useState, useEffect } from 'react'
import CollectionPageNavBg from "../../images/nav2.jpg"
import SubPageNav from '../SubPageNav';
function CollectionPageTwoNav() {
    const [isSearch, setIsSearch] = useState(false);

   
    return (
        <>
            <div className="container-fluid px-0">
                <div>
                    <img className="img-fluid about-bg-nav" src={CollectionPageNavBg}></img>
                </div>
                {/* <div class="card-img-overlay card-img-overlay-aboutNav d-flex justify-content-center"></div> */}
                <h1 className="About-nav-heading">Landscape</h1>

                <SubPageNav></SubPageNav>
                

            </div>
        </>
    )
}
export default CollectionPageTwoNav