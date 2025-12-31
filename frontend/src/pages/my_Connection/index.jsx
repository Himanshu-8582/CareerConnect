import DashboardLayout from '@/layout/DashboardLayout';
import UserLayout from '@/layout/UserLayout';
import React from 'react'

function MyConnectionPage() {
  return (
    <UserLayout>
      <DashboardLayout>
        <div>
          <h1>My Connections</h1>
        </div>
      </DashboardLayout>
    </UserLayout>
  )
}

export default MyConnectionPage;
