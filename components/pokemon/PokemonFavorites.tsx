import { Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { CardsFavorite } from './CardFavorite'


interface Props {
    pokemonsFav : number[]
}

export const PokemonFavorites: FC<Props>  = ({pokemonsFav}) => {
    return (
        <Grid.Container sm={6}
            css={{display:'flex', width:'100%' }}
        >
            {pokemonsFav.map(id => (
                <CardsFavorite
                key={id}    
                id={id}
                />                                                              
            ))}                
        </Grid.Container>
    )
}