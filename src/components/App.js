import React from 'react';
import '../styles/app.scss';
import Header from './Header';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import apiCharacters from '../api/fetch';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      search: "",
      characters: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.renderCharacterDetails = this.renderCharacterDetails.bind(this);
  }

  componentDidMount() {
    apiCharacters().then(characters => this.setState({ characters }));
  }


  // EVENTOS

  handleSearch(data) {
    this.setState({
      search: data.value
    })
  }

  stop

  // HELPERS

  filteredCharacters() {
    return this.state.characters
      .filter(character => character.name.toLowerCase().includes(this.state.search.toLowerCase()));
  }


  // RENDER

  renderCharacterDetails(props) {

    const routeId = props.match.params.id;
    const character = this.state.characters.find(item => item.id == routeId);

    if (character === undefined) {
      return <p className="notfound">Character not found!! Sorry :( </p>
    } else {
      return <CharacterDetail
        character={character}
      />
    }

  }


  render() {

    return (

      < div className="App" >
        <Header />
        <Switch>
          <Route exact path="/" >
            <Filters handleSearch={this.handleSearch} value={this.state.search} />
            <CharacterList characters={this.filteredCharacters()} />
          </Route>
          <Route exact path="/character/:id">
            {this.renderCharacterDetails}
          </Route>
        </Switch>
      </div >
    );
  }
}


export default App;
