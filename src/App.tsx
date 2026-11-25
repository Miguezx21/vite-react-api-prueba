import { useState, useEffect } from 'react'

import './App.css'


function App() {
  const [marvelPJ, setMarvelPJ] = useState<any[]>([])
  const [busqueda , setBusqueda ] = useState( "" )
  const [seleccionado, setSeleccionado] = useState<any>(null)
  const [noEncontrado, setNoEncontrado] = useState(false)
  useEffect(() => {
  fetch( "https://akabab.github.io/superhero-api/api/all.json")
    .then(respuesta => respuesta.json())
    .then(( datos : any[]) => {
      
      const soloMarvelPJ = datos.filter(heroe => heroe.biography.publisher === "Marvel Comics")
      setMarvelPJ ( soloMarvelPJ )

    })
}, [])


function buscar(e: React.FormEvent) {
  e.preventDefault()
  if ( busqueda.trim() === "" ) {
    return
  }
  const encontrado = marvelPJ.find(heroe => heroe.name.toLowerCase().includes(busqueda.toLowerCase()))
  
  if ( encontrado ) {
    setSeleccionado( encontrado )
    setNoEncontrado( false )
  } else {
    setNoEncontrado( true )
  }
}



return (
  <div className="vengadores">
    <h1>MARVEL {marvelPJ.length}</h1>
    <form className="busqueda" onSubmit={ buscar }>
      <input type="search"
        aria-label="Buscar personaje"
        value={busqueda}
        onChange={ e => { setBusqueda(e.target.value); setNoEncontrado(false) } }
        placeholder="Buscar personaje de MARVEL..."
      />
    </form>
    { noEncontrado && <p className="mensaje">No encontramos "{busqueda}" en Marvel</p> }
    {seleccionado && (
      <div className="detalle">
        <button onClick={ () => setSeleccionado(null) }>← Volver</button>
        <div className="detalle_content">
          <img src={ seleccionado.images.lg } alt={ seleccionado.name } />
          <div>
            <h2>{ seleccionado.name }</h2>
            <p><strong>Nombre</strong></p>
              <ul>
                <li><strong>Nombre real: </strong>{ seleccionado.biography.fullName }</li>
                <li><strong>Alias: </strong>{ seleccionado.biography.aliases.slice(0, 4).join(", ") }</li>
              </ul>
              
            <p><strong>Estadisticas: </strong></p>
              <ul>
                <li><strong>Inteligencia: </strong>{ seleccionado.powerstats.intelligence }</li>
                <li><strong>Fuerza: </strong>{ seleccionado.powerstats.strength }</li>
                <li><strong>Velocidad: </strong>{ seleccionado.powerstats.speed }</li>
              </ul>
   
            <p><strong>Descripción:</strong></p>
               <ul>
                  <li><strong>Genero: </strong>{ seleccionado.appearance.gender }</li>
                  <li><strong>Raza: </strong>{ seleccionado.appearance.race }</li>
                  <li><strong>Altura: </strong>{ seleccionado.appearance.height[1] }</li>
                  <li><strong>Peso: </strong>{ seleccionado.appearance.weight[1] }</li>
                  <li><strong>Color de ojos: </strong>{ seleccionado.appearance.eyeColor }</li>
                  <li><strong>Color de cabello: </strong>{ seleccionado.appearance.hairColor }</li>
               </ul>
          </div>
        </div>
      </div>
    )}
    <div className = "child_vengadores">
    {marvelPJ.map(heroe => (
      <div className="card-vengadores" key={ heroe.id }>
        <img alt={heroe.name}src={ heroe.images.lg } />
        <p>{ heroe.name }</p>
      </div>
    ))}</div>
  </div>
)}

export default App
