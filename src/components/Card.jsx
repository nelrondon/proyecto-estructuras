import "./Card.css"
import { Heart } from "./icons/Heart"
import {Bed} from "./icons/Bed"
import {Gps}  from "./icons/Gps"
import { useState } from "react"
import { Bath } from "./icons/Bath"


export function Card({data}) {
    const [img, _setImg] = useState(()=>{
        const imgs = [
            "https://images.homify.com/v1443654352/p/photo/image/960352/Imativa_Casa_Carrasco_0013.jpg",
            "https://imgix.cosentino.com/es/wp-content/uploads/2023/07/Lumire-70-Facade-MtWaverley-vic-1.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcmFK05BuCqhmqZz6FbUQmV2vVSs7B3LGFtA&s",
            "https://d2iwr6cbo83dtj.cloudfront.net/2025/02/casa-de-campo-paisagismo-inspirado-jardins-italianos-renata-guastelli-credito-miro-martins-8.jpg?quality=90&strip=info"
        ];
        const i = Math.floor(Math.random() * imgs.length)
        return imgs[i]
    })

    const [isFavorite, setIsFavorite] = useState(false)
    const {title, city, price, mts2, bath, room, type="Venta", state="Anzoategui"} = data;

    const handleClick = ()=>{
        setIsFavorite(!isFavorite)
    }

    return (
        <section className="card">
            <div className="type"><p>{type.toUpperCase()}</p></div>
            <div className="foto">
                <img src={img} />
            </div>
            <div className="content">
                <h1>{title}</h1>
                <h3>{city}, {state}, Venezuela <Gps className="icon"/></h3>
                <div>
                    <p>{room} <Bed className="icon" /></p>
                    <p>{bath} <Bath className="icon"/></p>
                    <p>{mts2} m<sup>2</sup></p>
                </div>
                <div className="buttons">
                    <button className="boton">Ver Propiedad</button>
                    <b className="price"> {price}$ <i>{type=="Alquiler"?"/mes":""}</i> </b>
                    <button onClick={handleClick} className={isFavorite ? "like active" : "like"}>
                        <Heart className="icon lg"/>
                    </button> 
                </div>
            </div>
        </section>
    )
}