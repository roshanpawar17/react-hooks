import React from 'react'
import { NavLink, Route, Routes , useLocation, useNavigate} from 'react-router-dom'

function UseLocation() {
    const location=useLocation()
    const navigate=useNavigate()
    // console.log(location)
    // console.log(navigate)

    const Home=()=>{
        return (
            <>
                <h2>Hello I am Home page</h2>
                <h4>{location.pathname.replace("/","")}</h4>
            </>
        )
    }

    const About=()=>{
        return (
            <>
                <h2>Hello I am about page</h2>
                <h4>{location.pathname.replace("/","")}</h4>
                <button onClick={()=>navigate(-1)}>Back</button><br /><br />
                <button onClick={()=>navigate("/")}>Go to Home</button>
            </>

        )
        
    }


  return (
    <>
        <NavLink to={"/"}>Home</NavLink>&nbsp;&nbsp;
        <NavLink to={"/about"}>About</NavLink>
        
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>

      
    </>
  )
}

export default UseLocation
