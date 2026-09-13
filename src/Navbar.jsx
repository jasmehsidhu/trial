import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

function Navbar() {
function open(e){
    document.getElementById('popup').style.top='0%'
}


  return (
    <>
         <div id='popup'>
            <i onClick={()=>{document.getElementById('popup').style.top='-10%'}} id='close' class="fa-solid fa-xmark" ></i>
  <a>Home</a>
        <a>About</a>
        <a>Team</a>
        <a>Contact</a>
</div>
   <section id='navbar'>
    <img id='nlogo' src={logo}></img>
<a id='ham' onClick={open}><i class="fa-solid fa-bars"></i></a>  <div id='links'>
        <a>Home</a>
        <a>About</a>
        <a>Team</a>
        <a>Contact</a>

    </div>
   </section>

    </>
  )
}

export default Navbar
