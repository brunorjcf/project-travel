import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import video1 from '../../Assets/video1.mp4'
import {FaFacebookF} from 'react-icons/fa'
import {BsListTask} from 'react-icons/bs'
import {BsGeoAlt} from 'react-icons/bs'
import {HiFilter} from 'react-icons/hi'
import {TbApps} from 'react-icons/tb'
import React from 'react'
import './home.css'
const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
        <video src={video1} muted autoPlay loop type="video/mp4"></video>

        <div className="homeContent container">
          <div className="textDiv">
            <span className="smallText">
              Nossos Pacotes
            </span>
            <h1 className="homeTitle">
              Pesquise Sua Ferias
            </h1>
          </div>

          <div className="cardDiv grid">

            <div className="destinationInput">
              <label htmlFor="city">Pesquise o Seu Destino!</label>
              <div className="input flex">
                <input type="text" placeholder='Seu nome aqui...' />
                <BsGeoAlt className="icon"/>
              </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date">Selecione Seu Data:</label>
              <div className="input flex">
                <input type="date"/>
              </div>
            </div>

            <div className="priceInput">
              <div className="label-total flex">
                <label htmlFor="price">Max Price:</label>               
                <h3 className="total"> R$5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max="5000" min="1000" />
              </div>
            </div>

            <div className="searchOptions flex">
              <HiFilter/>
              <span>More Filter</span>
            </div>

          </div>

          <div className="homeFooterIcons flex">
            <div className="rightIcons">
              <FaFacebookF className="icon"/>
              <AiOutlineInstagram className="icon"/>
              <SiTripadvisor
              className="icon"/>
            </div>

            <div className="leftIcons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Home