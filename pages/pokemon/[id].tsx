import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts'
import { Pokemon } from '@/interfaces';
import { Card, Text, Grid, Row, Col, Button, Container } from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image';

interface Props {
    pokemon:Pokemon
}


const PokemonPage: NextPage<Props> = (Props) => {

    const router = useRouter();

    return (
        <Layout title={Props.pokemon.name} >
            <Grid.Container css={{justifyContent:'center', }} >
                <Grid xs={12} sm={4} md={4} >
                    <Card css={{w:'700px',h:'400px'}} >
                        <Card.Body>
                            <Card.Image  
                                src={Props.pokemon.sprites.other?.dream_world.front_default || Props.pokemon.sprites.front_default}
                                width='100%'
                                height='100%'
                                objectFit='fill'
                                alt='pokemonImage...'
                            />
                            <Text>Holiii</Text>
                        </Card.Body>
                        <Card.Footer
                            isBlurred
                            css={{
                                position:'absolute',
                                bgBlur: "#0f111466",
                                borderTop:"$borderWeights$light solid $gray800",
                                bottom:0,
                                zIndex:1
                            }}
                        >
                            <Row>
                                <Col>
                                    <Row>
                                        <Col span={3} >
                                            <Card.Image
                                                src={Props.pokemon.sprites.versions?.['generation-v']['black-white'].animated?.front_default || Props.pokemon.sprites.front_default}
                                                width={150}
                                            />
                                        </Col>
                                        <Col css={{display:'flex', flexDirection:'column'}} >
                                            {/* <Text color='white' size={25} >Types  */}
                                            {Props.pokemon.types.map((t,i) =>(
                                                <Text transform='capitalize' size={20} key={i}> 🔘 {t.type.name} </Text>
                                            ))}
                                            {/* </Text> */}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row justify="flex-end">
                                        <Button
                                        flat
                                        auto
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
                <Grid xs={12} sm={8} md={8} >
                    <Card>
                        <Card.Header css={{display:'flex', justifyContent:'space-between'}} >
                            <Text css={{textGradient:"45deg, $blue600 -20%, $pink600 50%", margin: '0 0 0 40px'}} h1 size={40} transform='capitalize'>{Props.pokemon.name}</Text>
                            <Button color='gradient'><Text size={40}>🤍</Text></Button>
                        </Card.Header>
                        <Card.Body>
                            <Container justify='center' >
                                <Text css={{textGradient:"45deg, $purple600 -20%, $pink600 100%", w:'100%', }} h1 size={30} >Sprites</Text>
                            </Container>
                            <Container display='flex' justify='space-around' direction='row' gap={1} >
                                
                                <Image
                                    src={Props.pokemon.sprites.front_default}
                                    alt='pokemon'
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={Props.pokemon.sprites.back_default}
                                    alt='pokemon'
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={Props.pokemon.sprites.front_shiny}
                                    alt='pokemon'
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={Props.pokemon.sprites.back_shiny}
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
                            <Grid.Container>
                                <Grid justify='center' sm={6} >
                                    <Text h2 size={40}>🤍 Hp: {Props.pokemon.stats[0].base_stat} </Text>
                                </Grid>
                                <Grid justify='center' sm={6} >
                                    <Text h2 size={40}>⚔️ Attack: {Props.pokemon.stats[1].base_stat}</Text>
                                </Grid>
                                <Grid justify='center' sm={6} >
                                    <Text h2 size={40}>🛡️ Defense: {Props.pokemon.stats[2].base_stat}</Text>
                                </Grid>
                                <Grid justify='center' sm={6} >
                                    <Text h2 size={40}>💣 Special-attack: {Props.pokemon.stats[3].base_stat}</Text>
                                </Grid>
                                <Grid justify='center' sm={6} >
                                    <Text h2 size={40}>🏯 Special-defense: {Props.pokemon.stats[4].base_stat}</Text>
                                </Grid>
                                <Grid justify='center' sm={6} >
                                    <Text h2 size={40}>⚡Speed: {Props.pokemon.stats[5].base_stat}</Text>
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
    const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

    return {
        props: {
            pokemon:data
        }
    }
    }