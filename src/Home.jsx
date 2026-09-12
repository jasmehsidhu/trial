import { useState } from 'react'
import './App.css'
import logo from './assets/logo.png'
import banner from './assets/banner.png'
import Wlogo from './assets/logo-white.png'

function Home() {

  return (
    <>
   <section id='banner'>
<div id='contain'>
        <h1 id='fblc-title'>FBLC</h1>
      <h1 id="full">Future Business Leaders of Canada</h1>
      <h1 id='tfssch'>TFSS Chapter</h1>
      <h2 id='tdis'>FBLC at TFSS empowers students with leadership skills, business knowledge, and real-world expereince to create a stronger tommorow</h2>
    <button id='learn'>Learn More ⟶</button>
    </div>   </section>
    <section id='why'>
        <h1 id='stitle'>Why FBLC?</h1>
        <div id='reasons'>
            <div id='reason'>
                <i class="fa-solid fa-people-group"></i>
                <h2 id='rtitle'>Build Leadership Skills</h2>
                <h3 id='rdis'>Develop leadership, confidence, teamwork and networking skills</h3>
            </div>
             <div id='reason'>
                <i class="fa-solid fa-chart-simple" ></i>
                <h2 id='rtitle'>Gain real-world experience</h2>
                <h3 id='rdis'>participate in business competitions and case challenges</h3>
            </div>
             <div id='reason'>
                <i class="fa-solid fa-globe" ></i>
                <h2 id='rtitle'>Expand your network</h2>
                <h3 id='rdis'>connect with like-minded students and industry professionals</h3>
            </div>
             <div id='reason'>
                <i class="fa-solid fa-bullseye" ></i>
                <h2 id='rtitle'>Prepare for future</h2>
                <h3 id='rdis'>Gain skills that help you stand out in university and your career</h3>
            </div>
        </div>
    </section>
    <section id='ready'>
<div id='contain2'>
             <h1 id='rready'>Are you ready to be a future business leader?</h1>
               <h1 id='join'>Join FBLC at TFSS and take the first towards your goals</h1>
               <button id='l2'>Learn More ⟶</button>
</div>
    </section>
    <footer>
<div id='l'> <img id ='flogo' src={Wlogo}></img>
<div id='alts'>
    <h1 id='atitle'>FBLC</h1>
        <h1 id='full2'>Future Business Leaders of Canada</h1>
                <h1 id='t2'>TFSS Chapter</h1>
</div>
 </div> 
 <div id='socials'>
    <i class="fa-brands fa-linkedin" ></i>
    <i class="fa-brands fa-youtube" ></i>
    <i class="fa-brands fa-instagram" ></i>
    </div> </footer>
    </>
  )
}

export default Home
