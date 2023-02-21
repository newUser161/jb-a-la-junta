import React from 'react';
import './App.css';
import jb from "./cantante.jpg"
import ParticleBackground from './particles';


function App() {
  return (
    <div className="App">
      {/*<ParticleBackground/>*/}
      <header className="App-header">
        <div className='centrar'>
          <div className='light' />
          <h1>#JBaLaJunta</h1>
          <img src={jb} alt="foto del cantante" className='imagenHeader' />
        </div>
      </header>
      <br />
      <div className='content'>

        <h2>JB The Voice</h2>
        <p>Es un cantante chileno de reggaetón y trap, nacido en Santiago de Chile en 1894. Su nombre real es Juan Basso, y comenzó su carrera musical en 2018, publicando sus primeros temas en SoundCloud y YouTube.

          En 2018 lanzó su primer mixtape titulado "El Amante", que le valió cierta popularidad en la escena underground chilena. En 2018 firmó con el sello discográfico "The Imperio Records" y comenzó a colaborar con artistas de la talla de Ozuna, Farruko y Jowell & Randy, entre otros.

          Algunos de sus temas más conocidos incluyen "Por el Aba", "Cállate, "Ram Bam Bam" y "Tengo Cash", entre otros. JB The Voice ha participado en varios festivales y conciertos en Chile y otros países de América Latina, y ha ganado varios premios y reconocimientos por su música.</p>
        <main>
          <div className="underline">
            <br />
            <h2>Últimos lanzamientos</h2>
            <ul>
              <li><a className='fancy__underline' href="https://www.youtube.com/watch?v=B3GOkxYb3jA">Mi Guachita</a></li>
              <li><a href="https://www.youtube.com/watch?v=MN8fZDFHbmg">Mi Doncella</a></li>
              <li><a href="https://www.youtube.com/watch?v=QzRBtcyE-pA">Sueños de Amor</a></li>
            </ul>
            <br />
            <h2>Próximos conciertos</h2>
            <ul >
              <li><a href="#">Por Anunciar</a></li>
              <li><a href="#">Por Anunciar</a></li>
              <li><a href="#">Por Anunciar</a></li>
            </ul>
          </div>
          <br />
          <h2>Contacto</h2>
          <p>Para reservar conciertos o para cualquier consulta, puedes ponerte en contacto con nosotros a través de:</p>
          <ul>
            <li>Teléfono: xxx-xxx-xxx</li>
            <li>Correo electrónico: JBaLa@junta.com</li>
          </ul>
        </main>
        <footer>
          <p>Todos los derechos reservados | 2023 | enkii161</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
