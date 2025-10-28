
import './App.css'
import {Banner} from './assets/Banner/index'
import { FormularioDeEvento } from './assets/componentes/FormularioDeEventos'
import { Tema } from './assets/componentes/Tema'
import { CardEvento } from './assets/componentes/CardEvento'
import { useState } from 'react'

//No react, componentes são FUNÇÕES


function App() {

  // Vamos criar um array / //Vamos criar uma lista de objetos
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
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    }
  ]
/*  O use State cuida do nosso estado, ele retornar para nós um array de duas posições */
  const [eventos, setEventos ] = useState ([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ] )

  function adicionarEvento(evento) {
    setEventos([...eventos, evento])
    
    /* eventos.push(evento)
    console.log('eventos =>', eventos) */
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Tecboard" />
      </header>
      <Banner />
      <FormularioDeEvento
        temas={temas}
        aoSubmeter={adicionarEvento} />

      {/* Vamos criar um map() para percorrer a lista e renderizar cada item da lista e retornar o seu id */}
      <section className="container">
      {temas.map(function (tema) {
        if  (!eventos.some(function(evento){
          return evento.tema.id == tema.id
        })){
          return null
        }
        return (
          <section key={tema.id} >
            <Tema tema={tema} />
            <div className="eventos">
            {eventos.filter(function (evento) {
              return evento.tema.id == tema.id
            }) 
            .map(function (evento, index){
              return(
                <CardEvento evento={evento} key={index}/>
              )
            })}
            
          </div>
          </section>

        )
      })}
</section>
      {/* ALT+SHIFT+A ou ctl + : para deixar como comentário
      <section>
        <Tema tema={temas[1]} />
      </section>
      <section>
        <Tema tema={temas[2]} />
      </section>
      <section>
        <Tema tema={temas[3]} />
      </section>
      <section>
        <Tema tema={temas[4]} />
      </section>
      <section>
        <Tema tema={temas[5]} />
      </section> */}
    </main>
  )
}

export default App


