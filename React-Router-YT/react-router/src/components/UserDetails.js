import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const params = useParams()
    const userid = params.userid
  return (
    <div>
      <h2>User Details:{userid}</h2>
    </div>
  )
}

export default UserDetails
