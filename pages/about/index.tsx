import { Layout } from '@/components/layouts'
import {Button} from '@nextui-org/react'
import Image from 'next/image'

export default function index() {
    return (
        <Layout>
        <div >
            <h1>This is the about created whit Typescript language</h1>
            <h2>Holaaaa </h2>
            <div style={{display:'grid', backgroundColor:'white', justifyItems:'center', width:'100%', alignItems:'flex-end' }} >
                <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png" alt="Ditto" width={100} height={100} />
            </div>
            <Button className='border-white' color={'gradient'}>Click Me</Button>
        </div>
        </Layout>
    )
}
