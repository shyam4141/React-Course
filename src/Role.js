import React from 'react';
import { UseAuth } from './contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Role(props) {

    const styles ={
        main:{
            padding: '5px',
            backgroundColor: 'bisque',
            borderRadius: '10px',
            marginLeft: '10px',
            width: '100px',
        }
    }

     const { setUserRole } = UseAuth();
    const navigate = useNavigate();

    function handleChange(event) {
        console.log("get value", event.target.value);
        setUserRole(event.target.value);
    }

    // function handleAdmin() {
    //     navigate('/admin')
    // }

    // function handleGuest() {
    //     navigate('/guest')
    // }
    return (
        <>   
        <div style={{textAlign:'right',margin:'10px'}}>
            <label>Change Role</label>
            <select style={styles.main} name="dog-names" id="dog-names" onChange={handleChange}>
                <option style={styles.main} value="Admin">Admin</option>
                <option style={styles.main} value="Guest">Guest</option>
            </select>
        </div>
        {/* <button className='btn btn-warning mr-2' onClick={handleAdmin}>View Adminpage</button>
        <button className='btn btn-primary m-2' onClick={handleGuest}>View Guestpage</button> */}
        </>
    );
}

export default Role;