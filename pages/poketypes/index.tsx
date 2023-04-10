import { pokeApi } from '@/api'
import { Layout } from '@/components/layouts'
import { Types, TypesList } from '@/interfaces'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { FC } from 'react'
import { Card, Container, Grid, Text } from '@nextui-org/react';
import { TypeCard } from '@/components/pokeTypes'
import { url } from 'inspector'

interface Props {
    types: Types[];
}

const poketypes:FC<Props>  = ({types}) => {

    // const typeNames = types.map(t=> t.name)

    return (
        <Layout>            
            
            <Grid.Container gap={3} >
                {types.map((t,i)=>(
                    <TypeCard  
                        key={i}
                        type={t}
                    />
                ))}
            </Grid.Container>
        </Layout>
    )
}

export default poketypes

export const getStaticProps: GetStaticProps = async (ctx) => {
    const {data} = await pokeApi.get<TypesList> ('/type')
    
    const types: Types[] = data.results.map(t => ({
        ...t,
        name:t.name
    }))

    return {
        props: {
            types
        }
    }
}




// export const getStaticsPaths : GetStaticPaths = (ctx) = > {
    
//     return {

//     }
// }
