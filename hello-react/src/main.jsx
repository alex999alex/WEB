import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Dog from './Dog.jsx'
import Pokemon from './Pokemon.jsx'
import './index.css'

// const pokemonArray = ['pikachu', 'ditto', 'eevee'];
createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <Pokemon />

    {/* {pokemonArray.map((item) => <Pokemon name={item} />)} */}
  </StrictMode>,
)


   {/* 
         {/*  */}
    {/* <Pokemon name ="ditto"/> */}
    {/*  */}
    {/* <App />
    <Dog breed="Pug" name = "Audrey" />
    <Dog breed="Poodle" name = "Sue" />  */}
    
    //  <Dog />  */}