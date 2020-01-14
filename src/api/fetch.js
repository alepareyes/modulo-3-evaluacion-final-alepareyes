
export default () => {
  return fetch('https://rickandmortyapi.com/api/character/?page=10')
    .then(response => response.json())
    .then(characters => characters.results)
}
