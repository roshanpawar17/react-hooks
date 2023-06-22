import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReactToastify() {

    const login=()=>{
        toast.success("Login Successfully!",{
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            // draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const btn={
        marginTop: "15em"
    }

  return (
    <>
      <button style={btn} onClick={login}>Login</button>
      <ToastContainer />
    </>
  )
}

export default ReactToastify
