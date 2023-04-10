import React, { FC } from 'react'
import { Name, TypeFull, Types } from '@/interfaces';
import { Card, Grid, Text } from '@nextui-org/react'
import { useRouter } from 'next/router';

interface Props{
    type: Types;
}


export const TypeCard:FC <Props>  = ({type}) => {

    const router = useRouter()

    const OnClickType = () => {
        router.push(`/poketypes/${type.name} `)
    }  

    return (
        <Grid justify='center' >
            <Card
                isHoverable
                isPressable
                css={{display:'flex', w:'200px', justifyItems:'center', padding:'10px' }}
                color='primary'
                onPress ={OnClickType}                    
                // variant='flat'
            >
                <Text transform='capitalize' size={20} weight={'bold'} >{type.name}</Text>
            </Card>
        </Grid>
    )
}
