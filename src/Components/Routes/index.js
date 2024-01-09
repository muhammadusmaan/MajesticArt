import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from '../Home';
import BoardMembers from "../Pages/BoardMembers";
import About from "../Pages/About";
import CollectionMain from '../Collections/CollectionMain'
import CollectionPageTwo from '../Collections/CollectionPageTwo'
import CollectionPageThree from '../Collections/CollectionPageThree'
import Services from '../Services/index'
import ServicesDetail from '../Services/subService'
import SingleEvent from '../Events/singleEvent'
import Event from '../Events/index'
import NewsOne from '../News/NewsOne'
import NewsTwo from '../News/NewsTwo'
import Navbar from "../Navbar";
import Footer from '../Footer'
import Contact from '../Contact Us/Contact'
import '../../../src/index.css'
const Routing = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/board-members' element={<BoardMembers />} />
				<Route path='/about' element={<About />} />
				<Route exact path="/CollectionMain" element={<CollectionMain />} />
				<Route exact path="/CollectionPageTwo" element={<CollectionPageTwo />} />
				<Route exact path="/CollectionPageThree" element={<CollectionPageThree />} />
				<Route exact path="/service" element={<Services />} />
				<Route exact path="/events" element={<Event />} />
				<Route exact path="/single-event" element={<SingleEvent />} />
				<Route exact path="/service-detail/:id" element={<ServicesDetail />} />
				<Route exact path="/NewsOne" element={<NewsOne />} />
				<Route exact path="/NewsTwo" element={<NewsTwo />} />
				<Route exact path="/Contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
};

export default Routing;
