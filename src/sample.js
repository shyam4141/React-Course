import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Items from './items';

import { useDispatch,useSelector } from 'react-redux';
import { addData } from './actions/crudActions';

function Sample(props) {

    const [data , setData]= useState([]);
    const [copy , setCopy]= useState([]);
    const [id , setId]= useState();
    const [show , setShow]= useState(true);
    const [filterData , setFilterData]= useState([]);
    const [divideData , setDivideData]= useState([1,2,3,4,5,6,7,8,9,10,'All']);
    const navigate = useNavigate();
    const dispatch = useDispatch();

   

    useEffect(()=>{
    fetchData();
    },[])

    async function fetchData() {
        try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: {
              observe: 'response',
              'Content-Type': 'application/json',
            }
          });
          console.log("ooo", response)
          if (!response.ok) {
            throw new Error('API request failed');
          }
  
          const data = await response.json();
          dispatch(addData(data));
          setData(data);
          setCopy(data);
          console.log('API response:', data);
        } catch (error) {
          console.error('API error:', error);
        }
    }

    function handleInput(e){
        console.log(e.target.value);
        if(e.target.value > 100){
            alert("please enter value between 1 to 100")
        }else{
            setId(e.target.value);
        }
    }

    function submitData(){
        setShow(false);
        const filteredObjects = data.find((obj) => obj.id == id);
        console.log("find", filteredObjects)
        setFilterData(filteredObjects);
    }

    function passData(data){
        console.log(data);
    }

    function navigateToItems(){
        navigate('/items')
    }
    function passId(Id){
        if(Id != 'All'){
            console.log("verify",Id);
            const finalData = copy.filter((a)=> a.userId == Id)
            setData(finalData);
        }else{
            setData(copy)
        }
      
    }
    return (
        <>
        {show ? 

           
            <div>
                <button onClick={navigateToItems}>Items</button>
                 <div>
                 {divideData.map((a)=>{
                     return (
                        <button  onClick={()=>passId(a)}>{a}</button>
                            );
                 })}
                </div>
            <input type="text" onChange={handleInput}/>
            <button onClick={()=>submitData()}>Submit</button>
            {data.map((a)=>{
               return (
                <div style={{backgroundColor:'aquamarine',margin:'10px',padding:'10px', width:'500px'}} onClick={()=>passData(a)}>
                <p>{a.id}</p>
                <p>USERID : {a.userId}</p>
               {/* <p>{a.userId}</p> */}
               <p>TITLE : {a.title}</p>
               <p>BODY : {a.body}</p>
               </div>
               );
            })}
        </div>
            :
            <Items data={filterData}/>
            }
        </>
     
    );
}

export default Sample;