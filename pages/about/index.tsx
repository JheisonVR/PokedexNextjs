import { Layout } from '@/components/layouts'
import {Button} from '@nextui-org/react'

export default function index() {
    return (
        <Layout>
            <h1>This is the about created whit Typescript language</h1>
            <Button className='border-white' color={'gradient'}>Click Me</Button>
        </Layout>
    )
}
