import Bar from "../components/Bar"
import { Card } from "../components/Card"

export const SearchPage = ()=>{

  const datos = [
      { title: "Casa de Eric y Maria", bath: 4, room: 6, city: "El Saman", price: 6000, mts2: 220, beds: 1 },
      { title: "Casa de verano", bath: 4, room: 6, city: "Puerto la Cruz", price: 1500, mts2: 75, beds: 3, type: "Alquiler"},
      { title: "Casa de Chuchu ", bath: 4, room: 6, city: "Puerto la Cruz", price: 2000, mts2: 100, beds: 3 },
      { title: "UDO", bath: 4, room: 6, city: "Barcelona", price: 3000, mts2: 120, beds: 4, type: "Alquiler" },
      { title: "Casa de Christian & Oriana", bath: 4, room: 6, city: "Barcelona", price: 3700, mts2: 150, beds: 3 },
      { title: "Casa de Clichita", bath: 4, room: 6, city: "Los Cerezos", price: 7000, mts2: 150, beds: 1 },
  ]

  return (
    <>
      <h1 className="main-title">Propiedades disponibles</h1>
      <Bar/>
      <section className='list-cards'>
        {
          datos.map(
            (data) => {return <Card key={data.title} data={data}/>}
          )
        }
      </section>
    </>
  )
}