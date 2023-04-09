import { FC } from "react"
import { SmallPokemons } from "@/interfaces"
import { Card,Text,Row, Grid } from "@nextui-org/react"
import { useRouter } from "next/router"


interface Props {
    p : SmallPokemons
}

export const PokemonCard: FC<Props> = ({p}) => {

    const router = useRouter()

    const onClick = () => {
        router.push(`/pokemon/${p.id}`)
    }

    return (
        // {pokemon.map(p => (
        <Grid key={p.id} xs={6} sm={3} md={2} xl={1}>
            <Card 
                isHoverable 
                isPressable
                onClick={onClick}
            >
                <Card.Body>
                    <Card.Image
                        src={p.img}
                        alt='Pokeimage'
                        height='100%'
                        width='100%'
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between' >
                    <Text transform='capitalize' >{p.name}</Text>
                    <Text>{p.id}</Text>
                    </Row>
                </Card.Footer>
                </Card>
            </Grid>
        // ))}
    )
}