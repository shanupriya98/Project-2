import React from 'react'
import"./App.css"
import Hero from './components/Hero'
function App() {
  return (
    <div>
     <nav>
      <div className='logo'>
        <img src='/images/brand_logo.png' alt='logo'/>
      </div>
      <ul>
        <li href="#"> Menu </li>
        <li href="#"> Location  </li>
        <li href="#"> About </li>
        <li href="#"> Contact </li>
      </ul>
      <button>Login</button>
      </nav>
      <Hero/> 
    </div>
  )
}

export default App
