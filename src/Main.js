import React from 'react'

function Main({values}) {
     
  return (
    <div>
    {values.map((any)=>{

        return <p key={any}>{any.name}</p>
    })}
    </div>
  )
}

export default Main
