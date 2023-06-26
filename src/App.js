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

function App() {
  const [toggle, setToggle] = useState(false);


  function toggleData(){
    setToggle(!toggle);
}

  return (

    <div className="App">
      <Router>
        <div>
          
          <Header/>
          {/* <p>This is a simple button in app.js which will change the data in main.js upon clicking it(sending as props)</p>
          <button onClick={toggleData}>Toggle in APP</button>
          {toggle ? <p>The value is true</p> : <p>The value is false</p>} */}
          {/* <Main data={toggle}/> */}
          {/* <RouterURL /> */}
          <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/main" element={<Main />} />
                <Route path="/items" element={<Items />} />
                <Route path="/form" element={<Form />} />
            </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
