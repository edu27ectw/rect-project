import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import people from './people'

function App2() {
  const [count, setCount] = useState(0)
  const [showPeoplePage, setShowPeoplePage] = useState(false)

  if (showPeoplePage) {
    return (
      <>
        <section id="people-page" className="container mt-4 text-center">
          <h1>People</h1>
          <button className="btn btn-secondary mb-3" onClick={() => setShowPeoplePage(false)}>
            Back
          </button>
          <div>
            {people.map((person, index) => (
              <div key={index} className="mb-2">
                <p className="text-secondary h5 d-flex justify-content-center">
                  <strong>{person.name}</strong> - {person.rol} - {person.experienceYears} experience years
                </p>
              </div>
            ))}
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={reactLogo} className="base" width="170" height="179" alt="" />
        </div>
        <div>
          <h1>Welcome, initial installation.........</h1>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 10)}
        >
          GRAINGER in {count} seconds
        </button>
        <button
          className="btn btn-primary mt-3"
          onClick={() => setShowPeoplePage(true)}
        >
          Go to people page
        </button>
      </section>

      <div className="ticks"></div>
      
    </>
  )
}

export default App2
