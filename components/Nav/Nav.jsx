import styles from './Nav.module.css'
import NavLinks from '../NavLinks/NavLinks'
import Image from 'next/image'
import logo from '../../public/assets/shared/desktop/logo.svg'
import cart from '../../public/assets/shared/desktop/icon-cart.svg'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Image
          src={logo}
          unsized
          alt='audiophile logo'
        />
        <NavLinks />
        <Image 
          src={cart}
          unsized
          alt='cart icon'
        />
      </div>
    </nav>
  )
}

export default Nav