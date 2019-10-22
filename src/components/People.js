import React from 'react'
import axios from 'axios'
import { Button, } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'

class People extends React.Component {
  state = { people: [], next: '', previous: '', }

  componentDidMount() {
    this.getPeople('https://swapi.co/api/people/')
  }

  getPeople = (route) => {
    axios.get(route)
      .then(res => {
        this.setState({ 
          people: res.data.results, 
          next: res.data.next,
          previous: res.data.previous,
        })
      })
  }

  render() {
    const { people, next, previous, } = this.state
    return (
      <>
        { people.length === 0 ?
          <p>Loading...</p>
          :
          <>
            {people.map( person => 
              <p>
                <Link key={person.url} to={person.url.slice(20)}>
                  {person.name}
                </Link>
              </p>
            )}
            { previous && 
              <Button onClick={() => this.getPeople(previous)}>Previous</Button>
            }
            { next && 
              <Button onClick={() => this.getPeople(next)}>Next</Button>
            }
          </>
        }
      </>
    )
  }
}

export default People