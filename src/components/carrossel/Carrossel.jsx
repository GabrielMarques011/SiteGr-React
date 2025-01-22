import React, { useEffect, useState } from 'react'
import { CaretLeft, CaretRight, Circle } from 'phosphor-react'

import './Carrossel.css'

export const Carrossel = ({ slides }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    // Função para ir para a imagem anterior
    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    // Função para ir para a próxima imagem
    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    // Função para ir para uma imagem específica ao clicar no círculo
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // useEffect para configurar o slide automático
    useEffect(() => {
        // Iniciar intervalo para trocar as imagens automaticamente
        const interval = setInterval(goToNext, 3000); // Troca a cada 3 segundos

        // Limpar o intervalo quando o componente for desmontado ou quando o usuário interagir
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slide">

            <p className='description-principal' >Produtos mais vendidos</p>
            <p className='description'>Abaixo irá aparecer algumas imagens sobre</p>

            <div className="conteudo">
                <CaretLeft className='arrow' size={42} weight="bold" onClick={goToPrevious} />
                <img src={slides[currentIndex]} alt="slide" />
                <CaretRight className='arrow' size={42} weight="bold" onClick={goToNext} />
            </div>

            <div className="pontos">
                {slides.map((_, index) => (
                    <Circle
                        key={index}
                        className={`circle ${index === currentIndex ? 'active' : ''}`}
                        size={12}
                        weight="bold"
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>

        </div>
    )
}
