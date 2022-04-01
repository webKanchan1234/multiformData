import React from 'react'
import axios from "axios"

const GetAllPosts = () => {
  const data = axios.get(`https://codebuddy.review/posts`)
  console.log(data)
  return (
    <div>
      <div className="container">
        <div className="box">
            {
              data.map((item,idx)=>(
                <>
                  <p>{item.firstName}</p>
                  <p>{item.lastName}</p>
                  <p>{item.image}</p>
                  <p>{item.avatar}</p>
                </>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default GetAllPosts