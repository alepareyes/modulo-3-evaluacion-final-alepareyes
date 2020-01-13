import React from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import '../styles/app.scss';
import apiCharacters from '../api/fetch';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    apiCharacters().then(characters => this.setState({ characters }));
  }


  renderCharactersDetails(props) {
    console.log(props)
  }


  render() {
    return (
      <div className="App" >
        <Header />
        <Switch>
          <Route exact path="/" >
            <Filters />
            <CharacterList characters={this.state.characters} />
          </Route>
          <Route exact path="/character/:id">
            <CharacterDetail characters={this.state.characters} />
          </Route>
        </Switch>
      </div >
    );
  }
}


export default App;
