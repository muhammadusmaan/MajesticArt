import React, { useState, useEffect } from 'react'
import MemberNavBg from "../../images/nav1.jpg"
import SubPageNav from '../SubPageNav';

function MembersNav() {
    const [isSearch, setIsSearch] = useState(false);
    return (
        <>
            <div className="container-fluid px-0">
                <div>
                    <img className="img-fluid about-bg-nav" src={MemberNavBg}></img>
                </div>
                {/* <div class="card-img-overlay card-img-overlay-aboutNav d-flex justify-content-center"></div> */}
                <h1 className="About-nav-heading">Board Members & <br></br> Independent Advisors</h1>
                <SubPageNav></SubPageNav>
                
            </div>
        </>
    )
}
export default MembersNav