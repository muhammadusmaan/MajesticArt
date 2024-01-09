import React from 'react'
import History from '../images/history.jpg'
import HistoryHeading from '../Utils/HistoryHeading.js';
import EarlySvg from '../images/earlysvg.svg'

function EarlyHistory() {
    return (
        <>
            <div className="container-fluid p-0 history-container-cus">
                <div className="">
                    <div className="ba-img history-img-overlay">
                        <img src={History} className="img-fluid history-img"></img>
                    </div>
                    <div className="history-heading-parent">
                        <h1 className="history-h-title text-white">Early History of Majestic Arts</h1>
                        <p className="history-p-title text-white">A Story About the early history of Majestic Arts A Story About the early history of Majestic Arts A Story About the early history of Majestic Arts A Story About the early history of Majestic Arts</p>
                        <div className="history-btn-parent">
                            <a href="#" type="submit" className="btn-view-detail">
                                <span className="detail-arrow">⟶</span>
                                <img src={EarlySvg} className="early-svg"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EarlyHistory