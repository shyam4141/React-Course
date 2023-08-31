import React, { useContext, useEffect } from 'react';
import { UseAuth } from './contexts/AuthContext';

const AdminPage = () => {
  const { userRole } = UseAuth();

  useEffect(() => {
    console.log("get user role in admin", userRole)
  }, [userRole])

  return (
    <>
      {userRole !== 'Admin' ? <div className='m-2' style={{textAlign:'center'}}><h3>Access Denied</h3></div> : <div className='m-2' style={{textAlign:'center'}}><h3>Admin page - Accessible only to admins</h3></div>
      }
    </>
  );

};

export default AdminPage;