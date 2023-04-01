import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'


const Navbar = () => {

  const [click, setClick] = useState(false);  
  const handleClick = () => setClick(!click);  

  const [bg, setBg] = useState(false);

  const changeBg = () => {

        if(window.scrollY >= 80){

            setBg(true);
        }
        else{

            setBg(false);
        }
  }

  window.addEventListener("scroll", changeBg);

  return (
    <header className={bg ? 'header header-bg' : 'header'}>
        <Link to="/"><h1>Galaxy Travel</h1></Link>
        <ul className={click ? 'nav-menu nav-active' : 'nav-menu'} >
            <li> <Link to="/">Kezdőoldal</Link> </li>
            <li> <Link to="/prices">Árak</Link> </li>
            <li> <Link to="/training">Képzés</Link> </li>
            <li> <Link to="/contact">Kapcsolat</Link> </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {
                click ? <FaTimes size={20} style={{color: "#fff"}} />
                      : <FaBars size={20} style={{color: "#fff"}} />  
            }
        </div>
    </header>
  )
}

export default Navbar