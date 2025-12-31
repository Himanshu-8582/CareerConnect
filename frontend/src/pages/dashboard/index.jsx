import { getAboutUser, getAllUsers } from '@/config/redux/action/authAction';
import { getAllPosts } from '@/config/redux/action/postAction';
import UserLayout from '@/layout/UserLayout';
import DashboardLayout from '@/layout/DashboardLayout';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Dashboard() {

  const router = useRouter();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (authState.isTokenThere) {
      dispatch(getAllPosts());
      dispatch(getAboutUser({ token: localStorage.getItem('token') }));
    }
    if (!authState.all_profiles_fetched) {
          dispatch(getAllUsers());
    }
    
  }, [authState.isTokenThere])
  

  return (
    <UserLayout>
      <DashboardLayout>
        <div>
          <h1>DashBoard hi</h1>
        </div>
      </DashboardLayout>
    </UserLayout>
  )
}
