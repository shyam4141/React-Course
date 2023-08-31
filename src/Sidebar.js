import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UseAuth } from './contexts/AuthContext';

function Sidebar(props) {

    const navigate = useNavigate();
    const { userRole } = UseAuth();
    const [options, setOptions] = useState();
    const [select, setSelect] = useState('');

    useEffect(()=>{
        let arr = [
            {
                "name": "Admin page",
                "select": false
            },
            {
                "name": "Guest page",
                "select": false
            },
            {
                "name": "Items",
                "select": false
            },
        ]

        let arr1 = [
            {
                "name": "Guest page",
                "select": false
            },
            {
                "name": "Items",
                "select": false
            },
        ]

        if(userRole === 'Admin'){
            setOptions(arr);
        }else{
            setOptions(arr1);
        }
        navigate('/')

    },[userRole])


    function handleAdmin() {
        setSelect('show');
       
    }

    const handleClick = (item) => {
        console.log("verify", item);
        let newArr = [...options];
        if(item === 'Admin page'){
            navigate('/admin');
        }else if(item === 'Guest page'){
            navigate('/guest');
        }else{
            navigate('/items');
        }
          newArr.map((i)=>{
                if(i.name === item){
                    i.select = 'selected';
                }else{
                    i.select = 'false'
                }
            })
            setOptions(newArr);
    }


    return (
        <div style={{height:'100vh', backgroundColor:'darkslategrey'}}>
            {/* <div className='p-2 mt-1' style={{backgroundColor:'floralwhite', cursor:'pointer'}} onClick={handleAdmin}>View Adminpage</div>
        <div className='p-2 mt-1' style={{backgroundColor:'floralwhite', cursor:'pointer'}} onClick={handleGuest}>View Guestpage</div> */}
        {options?.map((item) => {
                return (
                    <div className={`p-2 mt-1 ${item.select}`} style={{backgroundColor:'floralwhite', cursor:'pointer'}} onClick={() => handleClick(item.name)}>{item.name}</div>
                );
            })}
        </div>
    );
}

export default Sidebar;