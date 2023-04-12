import { Layout } from '@/components/layouts'
import {Button, Grid, Progress, Text} from '@nextui-org/react'
import Image from 'next/image'

export default function index() {
    return (
        <Layout>
            <Grid.Container css={{p:'20px'}} gap={3} >
                <Grid>
                    <Text
                        h1
                        size={60}
                        css={{
                            textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                        weight="bold"
                    >
                        Poke App next Js
                    </Text>
                </Grid>
                <Grid.Container>
                    <Grid>
                        <Text
                            h1
                            size={20}
                            css={{
                                textGradient: "45deg, $yellow600 -20%, $red600 100%",
                            }}
                            weight="bold"
                        >
                            Pokedex estatica que contiene los Pokemon de la primera generación                     
                        </Text>
                        
                        <Grid>                            
                            <Text
                                h2
                                size={20}
                                css={{
                                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                                }}
                                weight="bold"
                            >Framework: Next js</Text>
                            <Text
                                h2
                                size={20}
                                css={{
                                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                                }}
                                weight="bold"
                            >UI: Next-Ui </Text>
                            <Text
                                h2
                                size={20}
                                css={{
                                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                                }}
                                weight="bold"
                            >Language: Typescript </Text>                            
                        </Grid>
                    </Grid>
                </Grid.Container>
            </Grid.Container>

            <Grid.Container xs={12} sm={6} gap={2}>
                <Text blockquote>Progreso del proyecto</Text>
                <Grid>
                    <Progress color="success" striped value={50} />
                </Grid>
            </Grid.Container>
            
        {/* <div >
            <h1>This is the about created whit Typescript language</h1>
            <h2>Holaaaa </h2>
            <div style={{display:'grid', backgroundColor:'white', justifyItems:'center', width:'100%', alignItems:'flex-end' }} >
                <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png" alt="Ditto" width={100} height={100} />
            </div>
            <Button className='border-white' color={'gradient'}>Click Me</Button>
        </div> */}
        </Layout>
    )
}
