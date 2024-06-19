import React from 'react'
import './Header1.css'
import { FaNoteSticky } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";


function Header1() {
  const addHandler = ()=>{
    alert("hello");
  }

  return (
    <div className='header1' ><h1>St!cky Notes  <FaNoteSticky  className='logo'/></h1>
    <h3>"Turn your can'ts into cans and dreams into plans."</h3>

    <FaNotesMedical className='addnotes' onClick={addHandler}/>
    </div>

  )
}

export default Header1;
