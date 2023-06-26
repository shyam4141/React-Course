import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home(props) {
   const navigate = useNavigate();


   const [count, setCount] = useState(0);


   const [toggle, setToggle] = useState(false);

   useEffect(()=>{
      console.log("useeffect will call for every change");
   })

   useEffect(()=>{
    console.log("useeffect will call only on load");
    const handleClick = () => {
      console.log('Button clicked');
    };

    // Add event listener when the component mounts
    document.addEventListener('click', handleClick);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      console.log("unmount");
      document.removeEventListener('click', handleClick);
    };
   },[])

    useEffect(()=>{
        console.log("useeffect with respect to count",count);
    },[count])



    function increment(){
      setCount(count+1)
    }

    function toggleData(){
        setToggle(!toggle);
    }

    const handleClick = () => {
      navigate('/items'); 
    };
    // const handleClickForm = () => {
    //   navigate('/form'); 
    // };

    return (
        <div>
            <div>
                 <button onClick={increment}>Testing</button>
                 <p>count : {count}</p>
            </div>
          <div>
                <button onClick={toggleData}>Toggle</button>
                {toggle && <p>The value is true</p>}
                {!toggle && <p>The value is false</p>}
          </div>

          <button onClick={handleClick}>Go to Items</button>
          {/* <button onClick={handleClickForm}>Go to Forms</button> */}
            
        </div>
    );
}

export default Home;