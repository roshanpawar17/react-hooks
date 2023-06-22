import React, { useEffect, useState } from 'react'
import Loading from './Loading';

function FetchApi() {

    const [users, setUsers]=useState([])
    const [loading, setLoading]=useState(true)

    const fetchData = async ()=>{
        // exception handling
        try{
            //remove loading
            setLoading(false)
            const response= await fetch("http://localhost:8080/api/users/");
            setUsers(await response.json()); 
            // console.log(data)
        }catch(error){
            console.log(error)
        }
        
    }

    useEffect(()=>{
        setTimeout(()=>{
            fetchData()
        },2000)
    },[])

    //show loading
    if(loading){
        return <Loading/>
    }

  return (
    <>
      <h1>Hello</h1>
      {
        users.map((user,i)=>{
            return (
                <div key={i}>
                    <h1>{user.name}</h1>
                    <h2>{user.email}</h2>
                    <h2>{user.about}</h2>
                    <hr />
                </div>
            )
        })
      }
    </>
  )
}

export default FetchApi
