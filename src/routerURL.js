import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Main from './Main';
import Items from './items';

function routerURL(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<Main />} />
                <Route path="/items" element={<Items />} />
            </Routes>
        </div>
    );
}

export default routerURL;