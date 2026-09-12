import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'

function Navbar() {

  return (
    <>
   <section id='navbar'>
    <img id='nlogo' src={logo}></img>
    <div id='links'>
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
