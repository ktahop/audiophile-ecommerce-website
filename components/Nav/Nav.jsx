'use client'
import { useState } from 'react'
import styles from './Nav.module.css'
import NavLinks from '../NavLinks/NavLinks'
import Image from 'next/image'
import logo from '../../public/assets/shared/desktop/logo.svg'
import cart from '../../public/assets/shared/desktop/icon-cart.svg'
import hamburger from '../../public/assets/shared/tablet/icon-hamburger.svg'

const Nav = () => {
  const [menu, setMenu] = useState(false)
  const handleCartClick = () => {
    alert('Cart clicked')
  }

  const handleHamburgerClick = () => {
    setMenu(prev => !prev)
  }

  return (
    <>
      <nav className={styles.desktop}>
        <div className={styles.container}>
          <Image
            src={logo}
            unsized='true'
            alt='audiophile logo'
          />
          <NavLinks />
          <Image 
            src={cart}
            unsized='true'
            alt='cart icon'
            className={styles.cart}
            onClick={handleCartClick}
          />
        </div>
      </nav>
      <nav className={styles.tablet}>
        <div className={styles.container}>
          <div className={styles.navLeft}>
            <Image
              src={hamburger}
              unsized='true'
              alt='mobile hamburger icon'
              className={styles.hamburger}
              onClick={handleHamburgerClick}
            />
            <Image
              src={logo}
              unsized='true'
              alt='audiophile logo'
            />
          </div>
          <div className={styles.navRight}>
            <Image 
              src={cart}
              unsized='true'
              alt='cart icon'
              className={styles.cart}
              onClick={handleCartClick}
            />
          </div>
        </div>
      </nav>
      <nav className={styles.mobile}>
        <div className={styles.container}>
          <Image
            src={hamburger}
            unsized='true'
            alt='mobile hamburger icon'
            className={styles.hamburger}
            onClick={handleHamburgerClick}
          />
          <Image
            src={logo}
            unsized='true'
            alt='audiophile logo'
          />
          <Image 
            src={cart}
            unsized='true'
            alt='cart icon'
            className={styles.cart}
            onClick={handleCartClick}
          />
        </div>
      </nav>
      {menu && (
        <div className={styles.menu}>
          <h1>TEST</h1>
        </div>
      )}
    </>
  )
}

export default Nav