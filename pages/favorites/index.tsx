import React, { FC , useEffect, useState } from 'react'
import { localFavorites } from '@/utils'

import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { Text, Container } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { PokemonFavorites } from '@/components/pokemon';



const Favorites = () => {

    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons())
    }, [])

    const router = useRouter()
    
    // const onClick = () => {
    //     router.push(`/pokemon/${favoritePokemons[0]}`)
    // }


    return (
        <Layout>
            <Container css={{display:'flex', flexDirection:'column', w:'100%' }}  justify='center'>
                <Text h1 >Favorites Pokemons</Text>
                {
                    favoritePokemons.length === 0 ?
                    <NoFavorites/>
                    :
                    <PokemonFavorites
                        pokemonsFav={favoritePokemons}
                    />
                }
            </Container>
        </Layout>
    )
}

export default Favorites
