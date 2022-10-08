import {useParams} from 'react-router-dom'
import {useEffect,useState} from 'react'
import Cards from '../components/Cards'





function Pokemon() {

    const {name}=useParams()
    const [pokemon, setPokemon] = useState({})

    const url='https://pokeapi.co/api/v2/pokemon';

    //ASYNC - GET DATA
    const getPokemon=async(name)=>{
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data=await res.json();
        
        const src=data.sprites.other.dream_world.front_default;
        const stats=data.stats.map((stat)=>({
            name:stat.stat.name,
            base:stat.base_stat}
        ));
        const types=data.types.map(({type})=>type.name).join('');
        setPokemon({name,stats,src,types});
    
       

    }

    useEffect(() => {
      getPokemon(name);

    }, [name])
    
    



  return (
    <div style={{textAlign:'center'}}>
        <Cards pokemon={pokemon}/>
    </div>
  )
}

export default Pokemon