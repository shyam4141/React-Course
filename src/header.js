import React from 'react';
import './header.css';
import { UseAuth } from './contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Role from './Role';

function header(props) {

    return (
        <>
        <div className='header-container row '>
            <div className='col-9 pt-3'>
                Welcome!!! 
            </div>
            <div className='col-3'>
            <Role />
            </div>
           
        </div>
       
      </>
    );
}

export default header;