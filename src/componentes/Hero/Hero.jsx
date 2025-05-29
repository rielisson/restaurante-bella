import React from "react";
import './Hero.css';
import imagemRestaurante from '../../assets/freepik__upload__65781.png';

function Hero () {
    return (
        <div className="hero">
            <div className="div-image-principal">
                <img className="image-principal" src={imagemRestaurante} alt="imagem de um restaurante moderno"/>
            </div>
            <h1>Bella Cucina</h1>
            <p>
                Authentic italian cuisine made with lova and the finest ingredients
            </p>
            <button>View Menu</button>
            <button>Make a Reservation</button>

        </div>
    )
}

export default Hero;