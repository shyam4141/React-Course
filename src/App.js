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
import { AuthProvider } from './contexts/AuthContext';

import { Store } from 'redux';
import store from './store'
import Role from './Role';
import AdminPage from './AdminPage';
import GuestPage from './GuestPage';
import Sidebar from './Sidebar';

function App() {
 


  return (

    <div className="App">
      <AuthProvider>
      <Router>
        <div>
          <Header/>
          <div className='row'>
            <div className='col-2'>
            <Sidebar />
            </div>
            <div className='col-10'>
            <Routes>
                <Route path="/" element={<Base />} />
                <Route path="/details" element={<Details />} />
                <Route path="/main" element={<Main />} />
                <Route path="/sample" element={<Sample />} />
                <Route path="/items" element={<Items />} />
                <Route path="form" element={<Form />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/guest" element={<GuestPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            </div>
           
          </div>
          
        </div>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
