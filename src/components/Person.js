import React from 'react'
import axios from 'axios'
import { Button, } from 'semantic-ui-react'

class Person extends React.Component {
  state = { person: {}, }

  componentDidMount() {
    axios.get(`https://swapi.co/api/people/${this.props.match.params.id}`)
      .then(res => this.setState({ person: res.data, }))
  }

  render() {
    const { person, } = this.state
    return (
      <>
        <Button onClick={() => this.props.history.push('/')}>Back to People</Button>
        <h1>{person.name}</h1>
        <p>Birth Year: {person.birth_year}</p>
        <p>Eye Color: {person.eye_color}</p>
        <p>Gender: {person.gender}</p>
        <p>Hair Color: {person.hair_color}</p>
        <p>Height: {person.height}</p>
        <p>Mass: {person.mass}</p>
        <p>Skin Color: {person.skin_color}</p>
        <p>Home World: {person.homeworld}</p>
      </>
    )
  }
}

export default Person