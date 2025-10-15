
import './App.css'
import { FormularioDeEvento } from "./assets/componentes/FormularioDeEventos"
import { Tema } from './assets/componentes/Tema'
import { Banner } from './assets/Banner'
import { CardEvento } from './assets/componentes/CardEvento'

function App() {

  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'Inteligencia-artificial'
    },
    {
      id: 5,
      nome: 'data-science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ]
const eventos = [
  {
    capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
    tema: temas[0],
    data: new Date(),
    titulo: 'Mulheres no Front'
  }
]

function adicionarEventos(evento){
  eventos.push(evento)
  console.log('evento =>', eventos)
}
  return (
    <main>
      <header>
        <img src="/logo.png" alt="TecBoard" />
      </header>
      <Banner />
      <FormularioDeEvento temas={temas} aoSubmeter={adicionarEventos}/>


      {temas.map(function (item) {
        return (
          <section key={item.id}>
            <Tema tema={item}></Tema>
            <CardEvento evento={eventos[0]}/>
          </section>
        )
      }
      )}


      {/* <section>
        <Tema tema={temas[1]}></Tema>
      </section>
      <section>
        <Tema tema={temas[2]}></Tema>
      </section>
      <section>
        <Tema tema={temas[3]}></Tema>
      </section>
      <section>
        <Tema tema={temas[4]}></Tema>
      </section>
      <section>
        <Tema tema={temas[5]}></Tema>
      </section>
 */}



    </main>
  )
}


export default App
