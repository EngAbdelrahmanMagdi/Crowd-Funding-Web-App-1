import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import axiosInstance from '../network/axiosConfig';
import InfoComponent from '../userComponents/InfoComponent';
import ProjectsComponent from '../userComponents/projectsComponent';
import DonationsComponent from '../userComponents/donationsComponent';

export default function UserProfile() {
  const [userData, setUserData] = useState([]);
  // const [infoDisplay, setInfoDisplay] = useState(true);
  // const [projectDisplay, setProjectDisplay] = useState(false);
  // const [donationDisplay, setDonationDisplay] = useState(false);
  // const [editDisplay, setEditDisplay] = useState(false);
  const [userImg, setUserImage] = useState('');

  let imageUrl = 'http://localhost:8000/static/users/images/';
  useEffect(() => {
    axiosInstance
      .get(`/users/user`, { withCredentials: true })
      .then(res => {
        setUserData(res.data);
        console.log(res.data);
        let imgName = res.data.profile_picture.split('/').at(-1);
        setUserImage(imageUrl + imgName);
      })
      .catch(err => {
        console.error(err);
      });
  }, [imageUrl]);

  return (
    <div className='container g-0 row'>
      <div
        className='col-4 d-flex flex-column p-3 text-white profile'
        style={{ height: '100vh', width: '22%' }}>
        <img
          src={userImg}
          className='rounded-circle img-fluid px-3 mb-2'
          style={{ height: '200px', width: '500px' }}
          alt={userImg}
        />
        <p className='text-center fs-3'>{`${userData.first_name} ${userData.last_name}`}</p>
        <hr />
        <ul className='nav nav-pills flex-column mb-auto'>
          <li className='nav-item w-100 mb-2'>
            <Link to='/profile' className='nav-link active' aria-current='page'>
              Profile
            </Link>
          </li>
          <li className='nav-item w-100 mb-2'>
            <Link to='/profile/projects' className='nav-link text-white'>
              Projects
            </Link>
          </li>
          <li className='nav-item w-100 mb-2'>
            <Link to='/profile/donations' className='nav-link text-white'>
              Donations
            </Link>
          </li>
          <li className='nav-item w-100 mb-2'>
            <Link to='/profile/edit' className='nav-link text-white'>
              Edit Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className='col-8' style={{ width: '78%' }}>
        <Routes>
          <Route path='' element={<InfoComponent userData={userData} userImg={userImg} />} />
          <Route path='projects' element={<ProjectsComponent />} />
          <Route path='donations' element={<DonationsComponent />} />
        </Routes>
      </div>
    </div>
  );
}
