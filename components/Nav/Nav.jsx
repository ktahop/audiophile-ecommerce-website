import styles from './Nav.module.css'
import NavLinks from '../NavLinks/NavLinks'
import Image from 'next/image'
import logo from '../../public/assets/shared/desktop/logo.svg'
import cart from '../../public/assets/shared/desktop/icon-cart.svg'
import hamburger from '../../public/assets/shared/tablet/icon-hamburger.svg'

const Nav = () => {
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
          />
        </div>
      </nav>
      <nav className={styles.mobile}>
        <div className={styles.container}>
          <div className={styles.hamburger}>
            <Image
              src={hamburger}
              unsized='true'
              alt='mobile hamburger icon'
            />
            <Image
              src={logo}
              unsized='true'
              alt='audiophile logo'
            />
          </div>
          <Image 
            src={cart}
            unsized='true'
            alt='cart icon'
          />
        </div>
      </nav>
    </>
  )
}

export default Nav