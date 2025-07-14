import { useState } from "react";
import "./Bar.css"
import { Lupa } from "./icons/lupa";

function Bar(){

    const [search, setSearch] = useState();
    const handleSearch = () => {
        console.log(search)
    }

    return(
        <form className='search-form' onSubmit={(e)=>{e.preventDefault()}}>
            <input type="text" value={search} name="search" placeholder='Busqueda... ' onChange={(e)=>setSearch(e.target.value)}/>
            <button className="boton" type="buttom" onClick={handleSearch}>
                <Lupa className="icon"/>
            </button>
        </form>
    )
}

export default Bar;