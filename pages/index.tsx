
import Link from 'next/link'
import { Layout } from '../components/layouts'


export default function Home() {
  return (
    <Layout >
      <div>
        <h1>This the home</h1>
        <Link href='/about'>About</Link>
      </div>
    </Layout>
  )
}
