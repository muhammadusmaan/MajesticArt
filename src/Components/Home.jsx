import React from 'react';
// import Navbar from './Components/Navbar';
import ScrollSlider from './ScrollSlider';
import VideoSlider from './VideoSlider';
import Exhibitions from './Exhibitions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './index.css';
import ArtInspiration from './ArtInspiration';
import BookTour from './BookTour';
import EarlyHistory from './EarlyHistory';
import NewsArticle from './NewsArticle';
import Footer from './Footer';
import Navbar from './Navbar';

function Home() {
    return (
        <>
            <div className="container-fluid max-width-container px-0">
                <Navbar></Navbar>
                <ScrollSlider />
                <VideoSlider />
                <Exhibitions />
                <ArtInspiration></ArtInspiration>
                <BookTour></BookTour>
                <EarlyHistory></EarlyHistory>
                <NewsArticle></NewsArticle>
            </div>
        </>
    );
}

export default Home;
