import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Books from './pages/books';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import BookDisplay from "./components/bookDisplay/BookDisplay";
import Footer from "./components/Footer/Footer";
import Story from "./pages/story";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Home/>} />
                <Route path='/books' element={<Books/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/contact-us' element={<Contact/>} />
                <Route path='/sign-up' element={<SignUp/>} />
                <Route path='/story' element={<Story/>} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
