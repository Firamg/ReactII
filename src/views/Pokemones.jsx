import {useEffect,useState} from 'react'; 
import {useNavigate, Outlet} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Pokemones() {

    const [pokemones, setPokemones] = useState([])
    const [selectPokemon, setSelectPokemon] = useState('')
    const navigate=useNavigate(); 
    const url='https://pokeapi.co/api/v2/pokemon?&limit=1154'

    const getPokemones=async()=>{
        const res = await fetch(url)
        const {results}=await res.json()
        console.log(results)
        setPokemones(results)
       

    }

    const goPokemon=async()=>{
        if(selectPokemon)navigate(`/pokemones/${selectPokemon}`)
    }

    useEffect(() => {
        getPokemones()
    
      
    }, [])
    
    

  return (
    <div style={{textAlign:'center', margin:'4em'}}>
        <h1 style={{color:'blue'}} >
            Selecciona un Pokemon:
        </h1>
        <div>
            <select style={{textAlign:'center', margin:'2em'}}
            value={selectPokemon}
            onChange={(e)=>setSelectPokemon(e.target.value)}
            className='form-select'
            >
                <option>Pokemones</option>
                {pokemones.map(({name},i)=>(<option key={i}>
                        {name}
                    </option>)
                    
                )}
            </select>
            <br/>
            <Button
            variant="primary"
            value diseable
            onClick={goPokemon}
            >Ver Pokemon</Button>
        </div>
    </div>

  )
}

export default Pokemones