import "./Card.css"
import { Heart } from "./icons/Heart"

import { useState } from "react"

export function Card({title, ubi, price, beds, mts2, bath, room, img }) {

    const [isFavorite, setIsFavorite] = useState(false)

    const handleClick = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <section className="card">
            <div className="foto">
                <img src={img} />
            </div>
            <div className="content">
                <h1>{title}</h1>
                <h3>{ubi}, Venezuela</h3>
                <div>
                    <p>{beds} Camas</p>
                    <p>{mts2} m2</p>
                    <p>{bath} Baños</p>
                    <p>{room} Cuartos</p>
                </div>
                <div className="buttons">
                    <button className="boton">Ver Propiedad</button>
                    <b className="price">{price}$</b>
                    <button onClick={handleClick} className={isFavorite ? "like active" : "like"}>
                        <Heart className="icon lg"/>
                    </button> 
                </div>
            </div>
        </section>
    )
}