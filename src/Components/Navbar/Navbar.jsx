import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import React, {useState} from 'react'
import './navbar.css'

const Navbar = () => {
  const [active, setActive] = useState('navBar')

  // Function to toggle navBar
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  // Function to close navBar
  const closeNavbar = ()=>{
    setActive('navBar') 
  }


  return (
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore
            className="icon"/> Travel..</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">

            <li className="navItem">
              <a href="#" className="NavLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="NavLink">Pacotes</a>
            </li>

            <li className="navItem">
              <a href="#" className="NavLink">Loja</a>
            </li>

            <li className="navItem">
              <a href="#" className="NavLink">Sobre</a>
            </li>

            <li className="navItem">
              <a href="#" className="NavLink">News</a>
            </li>

            <li className="navItem">
              <a href="#" className="NavLink">Contatos</a>
            </li>

            <button className='btn'>
              <a href="#">BOOK NOW</a>
            </button>

            <div onClick={closeNavbar}
              className="closeNavbar">
              <AiFillCloseCircle className="icon"/>
            </div>
          </ul>
        </div>

        <div onClick={showNav}
          className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>

      </header>
    </section>
  )
}

export default Navbar