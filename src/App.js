import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import RouterURL from './routerURL';
import Header from './header';
import Footer from './footer';
import Home from './Home';
import Main from './Main';
import Items from './items';
import Form from './form';
import Test from './test'
import Base from './base';
import { useNavigate, Link } from 'react-router-dom';
import PageNotFound from './pageNotFound';
import Details from './details';
import Sample from './sample';
import { Provider } from 'react-redux';

import { Store } from 'redux';
import store from './store'

function App() {
 


  return (

    <div className="App">
      <Router>
        <div>
          <Header/>
          <Routes>
                <Route path="/" element={<Test />} />
                <Route path="/details" element={<Details />} />
                <Route path="/main" element={<Main />} />
                <Route path="/sample" element={<Sample />} />
                <Route path="/items" element={<Items />} />
                <Route path="form/:id" element={<Form />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
      </Router>

    </div>
  );
}

export default App;
