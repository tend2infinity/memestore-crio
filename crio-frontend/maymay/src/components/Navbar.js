import React from 'react'
import {Link,useHistory} from 'react-router-dom'


import "./Navbar.css"

const NavBar = () => {
  const history = useHistory()
  const ViewMemes = () => {
    history.push('/memes')
  }
    return(
      
  <nav className="outer">
  <div class="nav-wrapper light-green lighten-12">
    <a href="http://localhost:3000/" className="brand-logo left"> Meme-Store!</a>
    <ul id="nav-mobile" className="right">
      <li><a className="memelist" onClick={()=> ViewMemes()} >Browse Memes </a></li>
     
    </ul>
  </div>
</nav>
    )
}

export default NavBar