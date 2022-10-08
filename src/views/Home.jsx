import React from 'react'
import './style.css'

function Home() {
  return (
    <div style={{textAlign:'center', margin:'4em'}}>
      <h1 
      style={{alignItems:'center', margin:'2em', color:'blue'}}
      className='titulopoke conteiner'
      >Bienvenido Maestro Pokemon</h1>
      <div>
          <img style={{height:'20em'}}
          
          
          src='https://i.pinimg.com/originals/01/f7/88/01f7886a6458eb2f9128630f34e882a1.png'/>
      </div>
    </div>
  )
}

export default Home
