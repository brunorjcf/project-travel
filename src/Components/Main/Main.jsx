import React from 'react'
import './main.css'

// Let me import the imafes so we dont have this error on the browser.
import img from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'
import img5 from '../../Assets/img(5).jpg'
import img6 from '../../Assets/img(6).jpg'
import img7 from '../../Assets/img(7).jpg'
import img8 from '../../Assets/img(8).jpg'
import img9 from '../../Assets/img(9).jpg'


// import icons
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

const Data = [ 
  {
  id:1,
  imgSrc: img,
  destTitle: 'Bora Bora',
  location: 'New Zealand',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description: 'Destino dos apaixonados , Bora Bora é um dos melhores destinos de viagem do mundo. Este lugar é conhecido por suas estadias luxuosas e atividades ao ar livre.'
  },

{
  id:2,
  imgSrc: img2,
  destTitle: 'Machu Picchu',
  location: 'Peru',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description: 'Huayna Picchu é uma montanha no Peru, que se ergue sobre Machu Picchu, a chamada Cidade dos Incas. Este lugar é popular entre os turistas, pois o nascer do Sol é simplesmente espetacular.'
  },

{
  id:3,
  imgSrc: img3,
  destTitle: 'Great Barrier Reef',
  location: 'Australia',
  grade: 'CULTURAL RELAX',
  fees: '$700',
  description: 'Um dos mais notáveis dons naturais australianos é a Grande Barreira de Corais. A marca deste lugar luxuoso, e beleza. Sempre interessante estar nesse lugar.'
  },

{
  id:4,
  imgSrc: img4,
  destTitle: 'Cappadocia',
  location: 'Turkia',
  grade: 'CULTURAL RELAX',
  fees: '$800',
  description: 'De acordo com o Ranking Mundial de Turismo, 45 milhões de pessoas visitam a Turquia todos os anos, e desse pouco cerca de 2 milhões vêm visitar a Capadócia. Este lugar é conhecido por suas estadias luxuosas e atividades aventureiras.'
  },

{
  id:5,
  imgSrc: img5,
  destTitle: 'Chichén Itzá',
  location: 'México',
  grade: 'CULTURAL RELAX',
  fees: '$1100',
  description: 'Uma das sete maravilhas do mundo, a Pirâmide de Chichén Itzá, localizada na Península de Yucatán, é um templo maia que foi construído no século 6 depois de Cristo e ampliado entre os séculos 7 e 11. O monumento é um dos locais turístico para se colocar no roteiro.'
  },
  
{
  id:6,
  imgSrc: img6,
  destTitle: 'Cinque Terre',
  location: 'Itália',
  grade: 'CULTURAL RELAX',
  fees: '$800',
  description: 'Os tons vibrantes das casas são referência e explicam a beleza deste lugar. Além disso, se você é um foodie e ama frutos do mar, você vai ficar animado com a escolha que você está prestes a chegar aqui. Feliz explorando ótima comida! '
  },

{
  id:7,
  imgSrc: img7,
  destTitle: 'Angkor',
  location: 'Cambodia',
  grade: 'CULTURAL RELAX',
  fees: '$790',
  description: 'Angkot wat representa toda a gama de arte khmer do século IX ao XV. Este templo é considerado o coração e a alma do Camboja. Este lugar ir Conhecer por suas estadias luxuosas e atividades aventureiras'
  },
    
{
  id:8,
  imgSrc: img8,
  destTitle: 'Taj Mahal',
  location: 'India',
  grade: 'CULTURAL RELAX',
  fees: '$900',
  description: 'Um imenso mousoleum de mármore branco, agra embutido pelo imperador Mughal Shah Jahan em memória desta esposa Mumtaz, o monumento é incrivelmente bonito. Este lugar é conhecido por suas estadias luxuosas e atividades aventureiras'
  },
  
{
  id:9,
  imgSrc: img9,
  destTitle: 'Bali Island',
  location: 'Indonesia',
  grade: 'CULTURAL RELAX',
  fees: '$500',
  description: 'Bali é uma ilha da Indonésia e um dos melhores destinos de férias do arquipélago indonésio. Bali é conhecida por suas montanhas vulcânicas, história arte & cultura, comida, templos e belas praias arenosas.'
  },          
]

const Main = () => {  
  return (
    <section className="main container section">
      
      <div className="secTitle">
        <h3 className="title"> 
          Destinos Mais Visitados
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, destTitle, location, grade, fees, description }) =>{
              return(
                <div key={id} className="singleDestination">
                  {/* Here it will return single id from the map array */}

                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                  </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continet flex"></span>
                      <HiOutlineLocationMarker className="icon"/>
                      <span className="name">{location}</span>

                      <div className="fees flex">
                        <div className="grade">
                          <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                          <h5>{fees}</h5>
                        </div>
                      </div>

                      <div>
                        <p>{description}</p>
                      </div>

                      <button className="btn felx">
                        DETALHES <HiOutlineClipboardCheck className="icon"/>
                      </button>
                  </div>
                </div>
              )
          })
        }
      </div>
    </section>
  )
}

export default Main