import React, {useState} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCharacters } from './actions';

function App(props) {

  const [character, setCharacter] = useState("");
  return (
    <div className="App">
      <h1> Final Fantasy Characters </h1>
      <input type="text"
             palceholder="character"
             value={character}
             onChange={e => setCharacter(e.target.value)}/>
      {props.loading && <div>loading...</div>}
      {props.apod && (
        <div>
          <img src={props.characters.picture}/>
          <p>{props.apod.name}</p>
          <p>{props.apod.origin}</p>
        </div>)}
      {props.error !== "" && <p>{props.error}</p>}
      <button onClick={() => props.getCharacters(character)}>Get character</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    error: state.error,
    loading: state.loading
  };
};

export default connect(mapStateToProps, { getCharacters })(App);