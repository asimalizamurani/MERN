import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
  const { userId } = useParams();
  return (
    <div
    className='bg-gray-600 text-white p-4 rounded-md text-center text-2xl mx-auto w-1/2'
    >User: {userId}</div>
  )
}

export default User