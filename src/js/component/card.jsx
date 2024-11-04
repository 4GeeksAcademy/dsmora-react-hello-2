import React, { useEffect, useState } from "react";

// destructuring de objetos;

// operador ternario 

// condicion ? respuesta si true : respuesta si false 

export const Card = ({ title, description, image, stock }) => {
    const [active, setActive] = useState(false);

    console.log(active, title);

    // Mountinig
    // Updating
    // Unmounting

    useEffect(() => {
        console.log('Mounting');
        console.log('Updating');
        if (active) alert('Estamos actualizando')

        return () => {
            console.log('UnMounting')
        }
    }, [active]);

    const handlerClickActive = (e) => {
        e.preventDefault();
        setActive(true)
    };

    const handlerClickDeActive = (e) => {
        e.preventDefault();
        setActive(false)
    };


    return (
        <div className={`card ${active ? 'bg-danger-subtle' : ''}`} style={{ width: '18rem' }}>
            {
                active ? <img src={image} className="card-img-top img-card" alt="..." /> : null
            }
            <div className="card-body">
                <h5 className="card-title">{title} stock: {stock}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary" onClick={handlerClickActive}>Active</a>
                <a href="#" className="btn btn-primary" onClick={handlerClickDeActive}>Deactive</a>
            </div>
        </div>
    )
}