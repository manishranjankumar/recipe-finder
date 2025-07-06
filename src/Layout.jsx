import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
