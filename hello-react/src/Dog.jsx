import './App.css';

export default function Dog(props) {


    const myValue = 20;
    const breeds = ['Pugs', 'Bulldogs', 'Frenchies'];


    function bark() {
        // console.log('ruff ruff');
        alert('ruff ruff!!');
    }    
//         
    
      
    return (
        <>
            <h1>Hi, I am a Dog!</h1>
            <h2>I am a { props.breed }. My name is { props.name}.</h2>
            <p>
              <button onClick={ bark }>Say hello!</button>
            </p>
            <div>
                { myValue && <p>My value is { myValue > 10 ? 'big' : 'small' }</p> }
            </div>
            <h2>We have: </h2>
            <ul>
                { breeds.map( (breed) => <li>{ breed }</li>) }
            </ul>
        </>
    ); 
  }
  