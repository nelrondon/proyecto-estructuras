import Bar from "../components/Bar"
import { Card } from "../components/Card"

export const SearchPage = ()=>{

  const datos = [
      { title: "Casa mia super centrica y muy buena", bath: 4, room: 6, ubi: "El Saman", price: 6000, mts2: 220, beds: 1 },
      { title: "Casa de verno", bath: 4, room: 6, ubi: "Puerto la Cruz", price: 1500, mts2: 75, beds: 3 },
      { title: "Casa de Chuchu ", bath: 4, room: 6, ubi: "Puerto la Cruz", price: 2000, mts2: 100, beds: 3 },
      { title: "UDO", bath: 4, room: 6, ubi: "Barcelona", price: 3000, mts2: 120, beds: 4 },
      { title: "Casa de campo", bath: 4, room: 6, ubi: "Barcelona", price: 3700, mts2: 150, beds: 3 },
      { title: "Casa de Anabella", bath: 4, room: 6, ubi: "Lecheria", price: 7000, mts2: 150, beds: 1 },
  ]

  return (
    <>
      <Bar/>
      <section className='list-cards'>
        {
          datos.map(
            (d) => {
              return <Card
                key={d.title}
                img={"https://images.homify.com/v1443654352/p/photo/image/960352/Imativa_Casa_Carrasco_0013.jpg"}
                title={d.title}
                ubi={d.ubi}
                price={d.price}
                mts2={d.mts2}
                beds={d.beds}
                bath={d.bath}
                room={d.room}
              />
            }
          )
        }
      </section>
    </>
  )
}