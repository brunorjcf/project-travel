import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram}  from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import video2 from '../../Assets/video(2).mp4'
import {FiSend} from 'react-icons/fi'
import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section className="footer"> 
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>CONTACTE-NOS</small>
            <h2>Viaje com a gente!</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Seu melhor E-mail' />
            <buttom className="btn flex" type="submit">
              ENVIAR <FiSend className="icons" />
            </buttom>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
               <MdOutlineTravelExplore className="icons"/> Viajem.
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. ullan inventore eos fuga
              hic cum voluptatem minima, tempore
              non odio provident nobis ipsam at,
              doloremque sed cupidetate ipsum in,
              atque soluta?
            </div>

            <div className="footerSocials">
              <AiOutlineTwitter className="icons"/>
              <AiFillYoutube className="icons"/>
              <AiFillInstagram className="icons"/>
              <FaTripadvisor className="icons"/>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer