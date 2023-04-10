import React from 'react'
import { pokeApi } from '@/api'
import { TypeFull, Types, TypesList } from '@/interfaces'
import { Button, Grid, Text, Container, Card } from '@nextui-org/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'


interface Props {
    type: TypeFull
}

const TypePage : NextPage<Props> = ({type}) => {

    const info = () => {
        console.log(type.pokemon[0].pokemon.name)
    }

    return (
        <Grid.Container gap={3} css={{display:'flex'}}>
            <Grid>
                <Text>
                    Type: {type.name}
                </Text>
            </Grid>
            <Container justify='center' gap={2} css={{display:'flex'}} >
                <Text>Pokemons</Text>

                {type.pokemon.length > 1 ? type.pokemon.map((p,i)=> (
                    <Grid key={i}>
                        <Card css={{w:'150px'}} >
                            <Card.Body>
                                <Text 
                                    transform='capitalize'
                                >
                                {p.pokemon.name}
                                </Text>
                            </Card.Body>
                        </Card>
                    </Grid>
                    
                )) :
                <Text>This Type {`haven't`} Pokemons </Text>
                }
            </Container>
            <Button className='bg-success' css={{backgroundColor:'white'}}
                onPress={info}
            >Info</Button>
        </Grid.Container>



    )
}

export default TypePage;

export const getStaticPaths : GetStaticPaths = async (ctx) => {

    const {data} = await (pokeApi.get<TypesList> ('/type'))
    
    const typesName : string[] = data.results.map(type => type.name  )
    
    

    return {
        paths:typesName.map(type => ({
            params:{type}
        }))
        , 
        fallback:false
    }
}


export const getStaticProps : GetStaticProps = async (ctx) => {

    const {type} = ctx.params as {type: string}
    const {data} = await pokeApi.get(`/type/${type}`)


    return {
        props: {
            type: data
        }
    }
}
