import React, { useState } from 'react'

import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts'
import { PokemonFull } from '@/interfaces';
import { localFavorites } from '@/utils';

import { Card, Text, Grid, Row, Col, Button, Container, Table } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import confetti from 'canvas-confetti'
import { useRouter } from 'next/router';


interface Props {
    pokemon:PokemonFull
}


const PokemonPage: NextPage<Props> = ({pokemon}) => {

    const router = useRouter()

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setPokeFavorite(!pokeFavorite)

        if( !pokeFavorite ) {
            confetti({
                zIndex:999,
                particleCount:100,
                spread: 160,
                angle: -100,
                origin: {
                    x:1,
                    y:0
                }
            })
        }
    }

    const [pokeFavorite, setPokeFavorite] = useState(localFavorites.pokemonInfavorites(pokemon.id) )
    // const pokeFavorites = JSON.parse(localStorage.getItem('favorites') || '[]' ) 


    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{display:'flex', justifyItems:'center', }} >
                <Grid xs={12} sm={5} md={4} >
                    <Card id='cardPokemon' css={{w:'100%',h:'400px'}} >
                        <Card.Body>
                            <Card.Image  
                                src={pokemon.sprites.other?.dream_world.front_default || pokemon.sprites.front_default}
                                width='100%'
                                height='100%'
                                objectFit='fill'
                                alt='pokemonImage...'
                            />
                        </Card.Body>
                        <Card.Footer
                            isBlurred
                            css={{
                                position:'absolute',
                                //bgBlur: "#0f111466",
                                bgBlur: "#ffffff1b",
                                borderTop:"$borderWeights$light solid $gray800",
                                bottom:0,
                                zIndex:1,
                            }}
                            id='footerCardPokemon'
                        >
                            <Row id='firstRowFooter' css={{h:'70px'}} >
                                <Col id='RowFfirstColumFooter' css={{width:'fit-content'}} >
                                    <Row css={{display:'flex', alignItems:'center'}} >
                                        <Col span={3} >
                                            <Card.Image
                                                src={pokemon.sprites.versions?.['generation-v']['black-white'].animated?.front_default || pokemon.sprites.front_default}
                                                width={150}
                                            />
                                        </Col>
                                        <Col css={{display:'flex', flexDirection:'column'}} >
                                            {/* <Text color='white' size={25} >Types  */}
                                            {pokemon.types.map((t,i) =>(
                                                <Text transform='capitalize' size={20} key={i}> 🔘 {t.type.name} </Text>
                                            ))}
                                            {/* </Text> */}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col css={{h:'80px'}} >
                                    <Row justify="center" css={{h:'100%', display:'flex', alignItems:'center' }} >
                                        <Button
                                        flat
                                        auto
                                        onClick={ ()=> router.push('/poketypes') }
                                        rounded
                                        css={{ color: "#94f9f0", bg: "#94f9f026" }}
                                        >
                                        <Text
                                            css={{ color: "inherit" }}
                                            size={26}
                                            weight="bold"
                                            transform="uppercase"
                                        >
                                            Types
                                        </Text>
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Grid>
                <Grid xs={12} sm={7} md={8} >
                    <Card>
                        <Card.Header css={{display:'flex', justifyContent:'space-between'}} >
                            <Text css={{textGradient:"45deg, $blue600 -20%, $pink600 50%", margin: '0 0 0 40px'}} h1 size={40} transform='capitalize'>{pokemon.name}</Text>
                            
                            <Button onClick={onToggleFavorite} color='gradient'>
                                {  pokeFavorite ? <Text size={40}>❤️</Text> : <Text size={40}>🤍</Text> }
                                
                            </Button> 

                        </Card.Header>
                        <Card.Body>

                            <Container>
                                <Table 
                                    aria-label='Data of abilities' 
                                    css={{height:'auto', minWidth:'100%'}} 
                                    bordered
                                    shadow
                                    headerLined
                                    sticked
                                    hoverable
                                    align='right'                                                                        
                                    
                                >
                                    <Table.Header >
                                        <Table.Column >Numero de Pokemon</Table.Column>
                                        <Table.Column>Height (Mts)</Table.Column>
                                        <Table.Column>Weight (Kgs)</Table.Column>
                                        <Table.Column>Experience Gained to Defeat</Table.Column>
                                    </Table.Header>
                                    <Table.Body >
                                        <Table.Row key={1} >
                                            <Table.Cell >{pokemon.id} </Table.Cell>
                                            <Table.Cell>{pokemon.height/10} </Table.Cell>
                                            <Table.Cell>{pokemon.weight/10} </Table.Cell>
                                            <Table.Cell>{pokemon.base_experience} </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                            </Container>
                            <Container justify='center' >
                                <Text css={{textGradient:"45deg, $purple600 -20%, $pink600 100%", w:'100%', }} h1 size={30} >Sprites</Text>
                            </Container>

                            <Container display='flex' justify='space-around' direction='row' gap={1} >
                                
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt='pokemon'
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt='pokemon'
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt='pokemon'
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt='pokemon'
                                    width={100}
                                    height={100}
                                />

                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid css={{margin:'10px'}} xs={12} sm={12} >
                    <Card >
                        <Card.Body css={{display: 'flex', margin:'0 10px 0 0', gap:'2'}}>
                            <Grid.Container gap={4} justify='center' >
                                <Grid justify='center' sm={6} >
                                    <Text h2 size={30}>🤍 Hp: {pokemon.stats[0].base_stat} </Text>
                                </Grid>
                                <Grid justify='center' sm={6} >
                                    <Text h2 size={30}>⚔️ Attack: {pokemon.stats[1].base_stat}</Text>
                                </Grid>
                                <Grid justify='center' sm={6} >
                                    <Text h2 size={30}>🛡️ Defense: {pokemon.stats[2].base_stat}</Text>
                                </Grid>
                                <Grid justify='center' sm={6} >
                                    <Text h2 size={30}>💣 Special Attack: {pokemon.stats[3].base_stat}</Text>
                                </Grid>
                                <Grid justify='center' sm={6} >
                                    <Text h2 size={30}>🏯 Special Defense: {pokemon.stats[4].base_stat}</Text>
                                </Grid>
                                <Grid justify='center' sm={6} >
                                    <Text h2 size={30}>⚡Speed: {pokemon.stats[5].base_stat}</Text>
                                </Grid>
                            </Grid.Container>
                            
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
}

export default PokemonPage


//you should use getStaticPaths if you are statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const pokemons151 = [...Array(151)].map((value,index) => `${index +1}` )

    return {
        paths: pokemons151.map(id => ({
            params: {id}
        })),
        //Ejemplo manual de agregar Paths
        // [
        //     {
        //         params:{id:'1'}
        //     },
        //     {
        //         params:{id:'2'}
        //     },
        //     {
        //         params:{id:'3'}
        //     },
        // ],
        fallback:false
    }
}


export const getStaticProps: GetStaticProps = async (ctx) => {

    const {id} = ctx.params as {id: string}
    const {data} = await pokeApi.get<PokemonFull>(`/pokemon/${id}`)

    return {
        props: {
            pokemon:data
        }
    }
    }