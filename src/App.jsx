import { useState } from 'react'
import './App.css'

function App() {

  const nombre = 'william'
  console.log(`mi nombre es ${nombre}`)
  return (
    <div class="padre">

      <div>
        <img class="icono" src="./polar.png" alt="Polar Logo" />
      </div>
      <div><h3>Mayumi Machaca</h3>
        <p>Landon, United Kingdom</p></div>
      <p>Front-end developer and avid reader</p>
      <ul class="orden">
        <li class="links"><a href="">GitHub</a></li>
        <li class="links"><a href="">Frontend Mentor</a></li>
        <li class="links"><a href="">LinkedIn</a></li>
        <li class="links"><a href="">Twitter</a></li>
        <li class="links"><a href="">Instagram</a></li>
      </ul>
    </div>
  )
}

export default App
