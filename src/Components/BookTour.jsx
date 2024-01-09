import React, { useState, useEffect } from 'react'
import SideLines from "../images/sidelines.png";
import comic01 from "../images/img3.jpeg";
import comic02 from "../images/img4.jpeg";
import comic03 from "../images/img7.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

function BookTour() {
    const [index, setIndex] = useState(0);
    const mod = (n, m) => {
        let result = n % m;

        // Return a positive value
        return result >= 0 ? result : result + m;
    };

    const cards = [
        {
            id: "1",
            image: comic01,
        },
        {
            id: "2",
            image: comic02,
        },
        {
            id: "3",
            image: comic03,
        },
    ];
    useEffect(() => {
        setTimeout(() => {
            setIndex((index + 1) % cards.length);
            console.log(index);
        }, 5000);
    }, [index]);

    // useEffect(() => {
    //     AOS.init({
    //         offset: 200,
    //         duration: 5000
    //     });

    //     AOS.refresh();
    // }, []);
    return (
        <>
            <div className="container-fluid mt-5 bg-inspiration">
                <div className="row">
                    <div className="book-tour-parent">
                        <h1 className="book-tour-heading-landing">BOOK A TOUR</h1>
                    </div>
                    <div className="sidelines-parent">
                        <img src={SideLines} className="slideline-img img-fluid"></img>
                    </div>
                    <div className="carousel">
                        {cards.map((item, i) => {
                            const indexLeft = mod(index + 1, cards.length);
                            const indexRight = mod(index - 1, cards.length);

                            let className = "card-animation";

                            if (i === index) {
                                className = "card-animation card--active";
                            } else if (i === indexRight) {
                                className = "card-animation card--right";
                            } else if (i === indexLeft) {
                                className = "card-animation card--left";
                            } else className = "card-animation";

                            return (
                                <img
                                    key={item.id}
                                    className={className}
                                    src={item.image}
                                    alt="Comic"
                                ></img>
                            );
                        })}
                    </div>

                </div>
                <div className="book-tour-btn">
                    <button type="submit" className="btn btn-book-tour py-0 px-4">BOOK NOW</button>
                    <small className="btn-tour-border"></small>
                </div>
            </div>
        </>
    )
}
export default BookTour