import { useState, useEffect } from 'react';
import './App.css';
import pokemonLogo from './assets/poke_logo.png'

// export default function Pokemon() {
export default function Pokemon() {
// export default function Pokemon(props) {
  // store the result from API
  const [bio, setBio] = useState(null);
  // store the input text value
  const [inputSearch, setInputSearch] = useState('ditto');
  // store the character to search when 
  const [searchCharacter, setSearchCharacter] = useState('ditto');

  useEffect(() => {
    // Fetch data from API
    async function fetchData() {
      // const url = 'https://pokeapi.co/api/v2/pokemon/' + props.name; 
      const url = 'https://pokeapi.co/api/v2/pokemon/' + searchCharacter; 
      // const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + props.name);
      const response = await fetch(url);
      if(response.ok){
        const data = await response.json();
        if (!ignore) {
          setBio(data);
        }
      } else {
        setBio(null);
      }
    }

    let ignore = false;
    fetchData();
    return () => {
       ignore = true;
    }
  }, [searchCharacter]);

  function search(e) {
    e.preventDefault();
    setSearchCharacter(inputSearch.toLowerCase()); // API only accepts lowercase
    // setSearchCharacter(inputSearch);

  } 

  return (
    <>
      <img src={pokemonLogo} className="logo" alt="Pokemon logo" />
      <form>
        <input type="text" value={inputSearch} onChange={e => setInputSearch(e.target.value)} />&nbsp;&nbsp;
        <button type="submit" onClick={search}>Search</button>
      </form>
      <hr />
      
      { bio ? (
        <div>
          <img src={ bio.sprites.front_default } alt={ bio.name } />        
          <h1>{ bio.name }</h1>
          <p>Weight: { bio.weight }lbs</p>
          <p>Height: { bio.height }ft</p>
          <p>Base Experience: { bio.base_experience }</p>            
          <h3>Abilities:</h3>
          <ul>
            { bio.abilities.map((item, index) => {
              return <li key={index}>{ item.ability.name }</li>
            })}
          </ul>
          <hr />
        </div>
      ) : (
        <p>Not a valid character. Try again.</p>
      )}
    </>    
  );
}