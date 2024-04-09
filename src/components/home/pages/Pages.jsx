import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from '../Home';
import Header from '../../common/Header';
import Footer from '../../common/Footer';
import Details from '../details/Details';

export const Pages = () => {
  return (
    <>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart/:id" element={<Details />} />
            </Routes>
            <Footer />
        </Router>
    </>
  )
}
