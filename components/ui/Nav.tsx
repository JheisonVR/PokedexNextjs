import React from 'react'
import styles from './Styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { Spacer, Text, Navbar, Button } from '@nextui-org/react'

export const Nav = () => {
    return (
        <Navbar maxWidth={'fluid'} css={{margin:'0 0 20px 0', backgroundcolor:''}} isBordered variant={'sticky'} >
            <Navbar.Brand
                css={{display:'flex', flexDirection:'column'}}
            >
                <Text size={20} ><Link href='/' >Pokedex</Link></Text>
                <Text size={10} >Fist Generation</Text>
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link href='/favorites'>Favorites</Navbar.Link>
                <Navbar.Link href='/about' >About</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button auto flat as={Link} href='#' >Sign Up</Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>

        // <nav className={styles.navContainer}>
        //     <div style={{
        //         display:'flex',
        //         margin: '0 10px 0 0'
        //     }} >
        //         <Image 
        //             className={styles.navLogo}
        //             src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg' 
        //             alt='togepi_front'
        //             width={30}
        //             height={30}                    
        //         />
        //         <div style={{
        //             display:'flex',
        //             alignItems:'center'
        //         }} >                
        //             <Text 
        //                 size={25}
        //                 css={{
        //                     margin:'0 0 0 10px'
        //                 }} 
        //                 color='#370617'
                        
        //                 >P</Text>
        //             <Text 
        //                 size={15}
        //                 color='#5e548e' 
        //                 >
        //                 okémon
        //             </Text>
        //         </div>
        //     </div>

        //     <Spacer
        //         css={{flex:1}}
        //     />

        //     <ul className={styles.navUl}>
        //         <Link href='*' className={styles.navLink} >Menu</Link> 
        //         <Link className={styles.navLink} href='/*'>Favorites</Link>
        //         <Link className={styles.navLink} href='/about'>About</Link>
        //     </ul>
        // </nav>
    )
}
