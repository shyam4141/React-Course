import React from 'react';

function iterator(props) {
    const data = ["item1", "item2", "item3", "item4", "item5"];
    const data1 = {
        name: 'value1',
        firstName: 'value2',
        lastName: 'value3',
    };
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
                {Object.entries(data1).map(([item, value]) => (
                    <p>{item}: {value}</p>
                ))}
            </div>
        </>

    );
}

export default iterator;