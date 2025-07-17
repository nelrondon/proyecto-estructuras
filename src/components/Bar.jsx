import "./Bar.css"
import { Lupa } from "./icons/Lupa";

function Bar({search,setSearch}){
	return(
		<form className='search-form' onSubmit={(e)=>{e.preventDefault()}}>
			<input type="text" value={search} name="search" placeholder='Busqueda... ' onChange={(e)=>setSearch(e.target.value)}/>
			<button className="boton" type="buttom">
				<Lupa className="icon"/>
			</button>
		</form>
	)
}

export default Bar;