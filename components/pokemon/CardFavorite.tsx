import { FC } from 'react';
import React from 'react'
import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router';


interface Props{
    id:number,
}

export const CardsFavorite: FC<Props>  = ({id }) => {
    const router = useRouter()

    const onFavoriteClicked = () => {
        router.push(`/pokemon/${id}`)
    }
    
    
    return (    

        <Grid xs={6} sm={6} md={4} lg={1} >
            <Card
                isHoverable
                isPressable
                // onClick={onClick}
                >
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    width={'100%'}
                    height={'100%'}
                    onClick={onFavoriteClicked}
                />
            </Card>
        </Grid>
    
    )
}
