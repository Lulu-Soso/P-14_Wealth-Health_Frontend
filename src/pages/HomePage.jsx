import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Composant de la page d'accueil.
 *
 * @returns {JSX.Element} - Le composant de la page d'accueil.
 */
const HomePage = () => {
  return (
    <>
    <h1>Welcome to Wealth Health !</h1>
    <Link to="/employees/create">
      Create employees
    </Link>
    </>
  )
}

export default HomePage