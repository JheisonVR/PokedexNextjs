import React from 'react'
import { pokeApi } from '@/api'
import { TypeFull, Types, TypesList, double_damage_from } from '@/interfaces'
import { Button, Grid, Text, Container, Card, Table } from '@nextui-org/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import construction from 'utils/Images/colress_s_timburr_and_conkeldurr_by_pokemononlinegames_d8k4234-fullview.jpg'
import Image from 'next/image'
import { Layout } from '@/components/layouts'


interface Props {
    type: TypeFull
}

const TypePage : NextPage<Props> = ({type}) => {

    // const info = () => {
    //     console.log(type.pokemon[0].pokemon.name)
    // }

    return (
        <Layout>
            <Grid.Container gap={3} css={{display:'flex', flexDirection:'column'}}>
                <Grid css={{display:'flex', flexDirection:'column'}} >
                    <Text size={50}>
                        Type: {type.name}
                    </Text>
                    <Grid css={{display:'flex', alignItems:'center', justifyContent:'center' }} xs={10} sm={12} >
                        <Text size={30} >⚠️⚠️ In Construction ⚠️⚠️</Text>
                        <Image
                            src={construction}
                            alt='Area in construction'
                            width={500}
                        />
                    </Grid>
                </Grid>

                <Grid>
                    <Card>
                        <Card.Header>
                            <Text>Damage Relations</Text>
                        </Card.Header>
                        <Card.Body>
                            <Table
                                aria-label='Details of types Damage Relations' 
                                css={{height:'auto', minWidth:'100%'}} 
                                bordered
                                shadow
                                headerLined
                                sticked
                                hoverable
                                align='right'
                            >
                                <Table.Header >
                                    <Table.Column >Double Damage From</Table.Column>
                                    <Table.Column >Double Damage To</Table.Column>
                                </Table.Header>
                                <Table.Body>
                                    <Table.Row key={1}>
                                        <Table.Cell>{type.damage_relations.double_damage_from.length}</Table.Cell>
                                        <Table.Cell>{type.damage_relations.double_damage_to.length}</Table.Cell>
                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        </Card.Body>
                    </Card>

                </Grid>

                <Grid>
                    <Text>Pokemons</Text>
                </Grid>
                

                {/* {type.pokemon.length > 1 ? type.pokemon.map((p,i)=> (
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
                <Grid>
                    <Text>This Type {`haven't`} Pokemons </Text>
                </Grid>
                } */}
                {/* <Button className='bg-success' css={{backgroundColor:'white'}}
                    onPress={info}
                >Info</Button> */}
            </Grid.Container>
        </Layout>



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
