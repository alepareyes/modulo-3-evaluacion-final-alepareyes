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
      characters: [],
      searchSpecies: "",
      searchGender: "",
      searchEpisodes: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
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

  handleSpecies(dataSpecies) {
    this.setState({
      searchSpecies: dataSpecies.searchSpecies
    })
  }


  handleGender(dataGender) {
    this.setState({
      searchGender: dataGender.searchGender
    })
  }

  // HELPERS

  filteredCharacters() {
    return this.state.characters
      .filter(character => {
        return (character.name.toLowerCase().includes(this.state.search.toLowerCase())
          || character.species.toLowerCase().includes(this.state.search.toLowerCase())
          || character.origin.name.toLowerCase().includes(this.state.search.toLowerCase()));
      })
      .filter(character => parseInt(character.species.toLowerCase().includes(this.state.searchSpecies.toLowerCase())))
      .filter(character => (character.gender.toLowerCase().includes(this.state.searchGender.toLowerCase())))

  }


  // .filter(character => (character.name.toLowerCase().includes(this.state.search.toLowerCase()));






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
    console.log(this.state.searchSpecies)
    return (

      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" >

            <Filters
              genderSearch={this.state.searchGender}
              handleGender={this.handleGender}
              specieSearch={this.state.searchSpecies}
              handleSearch={this.handleSearch}
              handleSpecies={this.handleSpecies}
              value={this.state.search} />

            <CharacterList
              characters={this.filteredCharacters()} />
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
