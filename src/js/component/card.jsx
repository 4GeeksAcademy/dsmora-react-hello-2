import React, { useEffect, useState } from "react";

// destructuring de objetos;

// operador ternario 

// condicion ? respuesta si true : respuesta si false 

export const Card = ({ title, description, image, stock }) => {

    return (
        <div className={`card ${active ? 'bg-danger-subtle' : ''}`} style={{ width: '18rem' }}>
            {
                active ? <img src={image} className="card-img-top img-card" alt="..." /> : null
            }
            <div className="card-body">
                <h5 className="card-title">{title} stock: {stock}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Active</a>
            </div>
        </div>
    )
}