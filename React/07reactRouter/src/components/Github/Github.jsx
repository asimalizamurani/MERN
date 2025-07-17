import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  const data = useLoaderData()
  console.log(data);
  

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/asimalizamurani')
  //   .then(response => response.json())
  //   .then(data => {
  //     setData(data);
  //     console.log(data);
  //   })

  // }, [])

  return (
    <div className="w-ful bg-gray-800 text-white text-center height-[50vh] p-5">
      <h1 className='text-3xl text-white font-semibold'>GitHub: {data.followers}</h1>
      <div className="w-50 h-50 border-4 bg-amber-400 rounded-2xl"><img src={data.avatar_url} alt="avatar" /></div>
        
    </div>
  )

  
}
export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/asimalizamurani');
  return response.json();
}