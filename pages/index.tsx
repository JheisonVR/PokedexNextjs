
import Link from 'next/link'
import { Layout } from '../components/layouts'
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '@/api'
import { PokemonLiistResponse, SmallPokemons } from '@/interfaces'
import Image from 'next/image';
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { PokemonCard } from '@/components/pokemon'


interface Props {
  pokemons: SmallPokemons[];
}

const Home: NextPage<Props> = ({pokemons}) =>{
  // console.log(pokemons)
// export default function Home() {
  return (
    <Layout >
      
        <Text 
          h1 
          size={50} 
          css={{
            textGradient:"45deg, $purple600 -20%, $pink600 100%",
          }}
          weight='bold'
          
        >Pokedex First Generation
        </Text>
        <Text
          css={{
            textGradient:"45deg, $blue600 -20%, $pink600 50%"
          }}
        >#Pokemons: {pokemons.length}
        </Text>
        
      
      <Grid.Container gap={2} justify='flex-start' >
        {pokemons.map((p)=>(
          <PokemonCard 
            key={p.id}
            p={p} 
          />
        ))}

      </Grid.Container>


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
  const {data} = await pokeApi.get<PokemonLiistResponse> ('/pokemon?limit=151');
  
  const pokemons: SmallPokemons[] = data.results.map((p,i)=>({
    ...p,
    id:i+1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+1}.png`
  }
  ))
  
  return {
    props: {
      pokemons
    }
  }
}
