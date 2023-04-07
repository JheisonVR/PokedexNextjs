
import Link from 'next/link'
import { Layout } from '../components/layouts'
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '@/api'
import { PokemonLiistResponse, SmallPokemons } from '@/interfaces'
import Image from 'next/image';


interface Props {
  pokemons: SmallPokemons[];
}

const Home: NextPage<Props> = ({pokemons}) =>{
  // console.log(pokemons)
// export default function Home() {
  return (
    <Layout >
      <div style={{width:'100%'}} >
        <h1>Pokemon List</h1>
      </div>
      <div>
        {pokemons.length}
        <br />
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center',justifyItems:'center'}} >
        {pokemons.map((p) => (
          <div 
            key={p.id}
            style={{
              border:'solid 1px white',
              margin: '2px',
              padding: '5px',
            }} 
          >
            <h2>{p.name}</h2>
            <Image 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
              alt='pokemonImage'
              width={120}
              height={100}
            />
            {/* <img 
              src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
              alt="pokemon_Image" /> */}
          </div>
        ))}
        </div>
        
      </div>
    </Layout>
  )
}

export default Home
// you should use getStaticProps when :
// - The data requiered to render the page is available at build time ahead of a user s request.
// - The data comes from a headless CMS
// - The data can be publicly cached (not user-specific
// -The page must be pre-rendered (for SEO) an be very fast - getStaticProps generates HTML and Json files




export const getStaticProps: GetStaticProps = async (ctx) => {
  
  // const {data} = await // you fetch function here
  const {data} = await pokeApi.get<PokemonLiistResponse> ('/pokemon?limit=150');
  
  const pokemonsList = []

  for(let i= 1; i<data.results.length; i++){
    let {data} = await pokeApi.get(`/pokemon/${i}`)
    pokemonsList.push(data)
  }

  // console.log(pokemonsList)
  
  
  const pokemons: SmallPokemons[] = pokemonsList

  return {
    props: {
      pokemons: pokemons
    }
  }
}
