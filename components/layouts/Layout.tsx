import { FC } from "react"
import Head from "next/head"
import {Nav} from "../ui/"

interface Props {
    children: React.ReactNode,
    title?: string

}


export const Layout :FC<Props> = ({children, title}) => {
//export const Layout = ( {children}: Props, {title}:Props ): JSX.Element => {
    return (
        <>
            <Head>
                <title>{ title || 'Pokedex'}</title>
                <meta name="author" content="David Vargas" />
                <meta name="description" content= {`information pokemon ${title}`} />
                <meta name="keywords" content= {`pokemon, pokedex, ${title}`} />
            </Head>

            <Nav/>

            <main>
                {children}
            </main>
        </>
    )
}
