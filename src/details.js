import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './form';
import EditForm from './editForm';

function Details(props) {

    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [show, setShow] = useState(true);
    const [id, setId]= useState();
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');

    useEffect(() => {
        getData();
    }, [])


    useEffect(() => {
        fetchDataById();
    }, [id])


    async function getData() {
        try {
            const response = await fetch('http://localhost:3000/posts', {
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
            setData(data);
            console.log('API response:', data);
        } catch (error) {
            console.error('API error:', error);
        }
    }

    async function fetchDataById() {
        if (id) {
          try {
            // const response = await fetch(`http://localhost:3000/posts/?id=${props.data}`);
            const response = await fetch(`http://localhost:3000/posts`);
            const data = await response.json();
            console.log("ooo", data)
            const filteredData = data.filter((a)=>{
              return a._id === id;
            })
            console.log("ooo filter", filteredData)
            setName(filteredData[0].title);
            setEmail(filteredData[0].description);
            console.log("ooo name", name);
            console.log("ooo email", email);
          } catch (error) {
            console.error('API error:', error);
          }
        }
      }

    function handleEdit(id) {
        console.log(id);
        setId(id);
        setTimeout(()=>{
            setShow(false);   
        },1500)
    //   navigate(`/form/${id}`)
    }
    return (
        <div>
            {show ?
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Email
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {data.map((object) => (
                            <tr key={object._id}>
                                <td >
                                    {object.title}
                                </td>
                                <td>
                                    {object.description}
                                </td>
                                <td><button onClick={() => handleEdit(object._id)}>Edit</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                :
                <EditForm name={name} email={email} id={id}/>}

        </div>
    );
}

export default Details;