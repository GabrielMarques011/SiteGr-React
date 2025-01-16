import React from 'react'
import { Header } from '../components/header/Header'
import { Fotter } from '../components/fotter/Fotter'
import minhaLogo from '../img/logo.png';
import '../../src/App.css'

export const Home = () => {
  return (
    <div className="App">
    
          <Header />
    
          <div className="inicio">
            {/* <img src={minhaImagem} alt="Imagem Fundo" /> */}
          </div>
    
          <div className="logo-inicio">
            <div className="box">
              <img src={minhaLogo} alt="Logo" />
            </div>
          </div>
    
          <div className="sobre">
            <h2>SOBRE NOSSA EMPRESA</h2>
    
            <p>
              Fundada em 2023, nossa empresa de design se dedica a transformar ideias em realidade com
              criatividade
              e precisão. Especializados em edição de imagens, criação de logos, tags, panfletos e uma ampla gama
              de serviços de design, estamos comprometidos em atender às necessidades e desejos dos nossos
              clientes.
            </p>
    
            <p>
              Cada projeto é realizado com muito amor e carinho, garantindo que o resultado final não apenas
              atenda, mas supere as expectativas. Nossa prioridade é a satisfação do cliente, e trabalhamos
              incansavelmente para entregar soluções personalizadas que refletem a visão única de cada um.
            </p>
    
          </div>
    
          <div className="endereco">
    
            <div className="endereco-text">
              <h2>ENDEREÇO LOCAL</h2>
              <p>Endereço: Rua Mirante da Barra</p>
              <p>Numero: 118</p>
              <p>Cep: 06720-169</p>
              <p>Bairro: Mirante da Mata</p>
            </div>
    
            <div className="localizacao">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.5505784427096!2d-46.95006980000001!3d-23.620445699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cfa82842c6461b%3A0xa094cc659328d945!2sR.%20Mirante%20da%20Barra%2C%20118%20-%20Parque%20Mirante%20da%20Mata%2C%20Cotia%20-%20SP%2C%2006720-169!5e0!3m2!1spt-BR!2sbr!4v1721173846206!5m2!1spt-BR!2sbr"
                  allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
    
          </div>
    
          <Fotter />
    
        </div>
  )
}
