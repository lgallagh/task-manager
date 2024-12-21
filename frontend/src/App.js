import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, []) // empty array so it only runs on first render of component

  return (
    <div>

        {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ): (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}

    </div>
  )
}


export default App