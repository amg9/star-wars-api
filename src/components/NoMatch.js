import React from 'react'
import { Link, } from 'react-router-dom'

const NoMatch = () => (
  <>
    <h1>404 Page not found</h1>
    <Link to='/'>Go Back Home</Link>
  </>
)

export default NoMatch