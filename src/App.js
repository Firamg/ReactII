
//ROUTER
import { BrowserRouter, Route, Routes } from 'react-router-dom'


//COMPONENTS
import NavBar from './components/NavBar'


//STYLES
import './components/styles.css'

//VIEWS

import Home from './views/Home'
import Pokemones from './views/Pokemones'
import Pokemon from './views/Pokemon'


function App() {

  


  return (
   


      <div className="App">

        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pokemones' element={<Pokemones />} />
            <Route path='/pokemones/:name' element={<Pokemon />} />


          </Routes>


        </BrowserRouter>

      </div>


  );
}

export default App;
