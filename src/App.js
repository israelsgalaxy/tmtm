import { useEffect, useState } from 'react'
import Map from './components/map'
import './styles/App.css'

const token = localStorage.getItem("token") ?? "0"

export default function App() {
  let [details, setDetails] = useState(null)

  useEffect(() => {
    async function getPoints() {
      let response = await fetch(`http://localhost:5000?token=${token}`)
      let details = await response.json()
      
      setDetails(details)
    }

    getPoints()
  }, [])

  return (
    <div className="App">
      { details ? <Map details={details} token={token} /> : <p>Loading...</p> }
    </div>
  )
}