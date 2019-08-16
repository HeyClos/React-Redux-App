import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <CharacterList />
    </div>
  );
}

export default App;


const WebcamList = props => {
  return (
    <>
      <h1>Welcome to the WEB21 webcam app!</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Get Webcam Data'
        )}
      </button>
      {props.webcams &&
        props.webcams.map(cam => <Webcam key={cam.name} webcam={cam} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    webcams: state.webcams
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(WebcamList);



class App extends Component {
  constructor () {
    super();
  }

  componentDidMount() {
    // e.preventDefault();
    this.props.getSmurfs();
  }

  render() {
    if (this.props.isLoading) {
      return ( <h1> Loading... </h1> )
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfList {...this.props} getSmurfs={this.props.getSmurfs} smurfs={this.props.smurfs} />
        <SmurfForm {...this.props} addSmurf={this.props.addSmurf} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    characters: state.characters,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(App);