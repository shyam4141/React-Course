import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

function Iterator(props) {
    const data = ["item1", "item2", "item3", "item4", "item5"];
    const data1 = {
        name: 'value1',
        firstName: 'value2',
        lastName: 'value3',
    };

    const allPostData = useSelector((state)=> state.counter?.value);

    console.log("fetching posts data from redux store", allPostData)


  

    const [result, setResult]= useState(props.data)
    return (
        <>
            <div>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>

            <div>
                {result &&  <ul>
                {Object.entries(result).map(([item, value]) => (
                    <p>{item}: {value}</p>
                ))}
                </ul>} 
            </div>

         
            {/* <div>
                {Object.entries(data1).map(([item, value]) => (
                    <p>{item}: {value}</p>
                ))}
            </div> */}
        </>

    );
}

export default Iterator;