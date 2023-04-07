import React from 'react'
import styles from './Styles/Navbar.module.css'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav className={styles.navContainer}>
            <ul className={styles.navUl}>
                <Link href='*' className={styles.navLink} >Menu</Link> 
                <Link className={styles.navLink} href='/*'>Pokemons</Link>
                <Link className={styles.navLink} href='/about'>About</Link>
            </ul>            
        </nav>
    )
}
