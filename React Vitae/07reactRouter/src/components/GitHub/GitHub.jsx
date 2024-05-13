import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom"; //For loading the data efficiently

function GitHub() {
    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response) =>{
    //         return response.json()})
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])
    const data = useLoaderData()
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers: {data.followers}
        <img src={data.avatar_url} width={400} alt="" />
      </div>
    </>
  );
}

export default GitHub;

export const getGitHubInfo = async() =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}
