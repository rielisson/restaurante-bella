import React from "react";
import './Hero.css';
import imagemRestaurante from '../../assets/freepik__upload__65781.png';

function Hero() {
    return (
        <div className="hero">
            <div className="div-image-principal">
                <img className="image-principal" src={imagemRestaurante} alt="imagem de um restaurante moderno" />
            </div>
            <div className="hero-informacoes">
                <h1 className="title-hero">Bella Cucina</h1>
                <p className="text-hero">
                    Authentic italian cuisine made with lova and the finest ingredients
                </p>
                <div className="div-buttons">
                    <button className="button-view">View Menu</button>
                    <button className="button-resevation">Make a Reservation</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;