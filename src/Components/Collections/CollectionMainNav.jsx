import React, { useState, useEffect } from 'react'
import CollectionMainNavBg from "../../images/nav4.jpg"
import SubPageNav from '../SubPageNav';
function CollectionMainNav() {
    
    return (
        <>
            <div className="container-fluid px-0">
                <div>
                    <img className="img-fluid about-bg-nav" src={CollectionMainNavBg}></img>
                </div>
                {/* <div class="card-img-overlay card-img-overlay-aboutNav d-flex justify-content-center"></div> */}
                <h1 className="About-nav-heading">Majestic Art Collection</h1>

                <SubPageNav></SubPageNav>


            </div>
        </>
    )
}
export default CollectionMainNav