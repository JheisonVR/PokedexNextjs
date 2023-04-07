import Head from "next/head"
import {Navbar} from "../ui/"

interface props {
    children: React.ReactNode,
    title?: string

}


export const Layout = ( {children}: props, {title}:props ): JSX.Element => {
    return (
        <>
            <Head>
                <title>{ title || 'Pokedex'}</title>
                <meta name="author" content="David Vargas" />
                <meta name="description" content= {`information pokemon ${title}`} />
                <meta name="keywords" content= {`pokemon, pokedex, ${title}`} />
            </Head>

            <Navbar/>

            <main>
                {children}
            </main>
        </>
    )
}
