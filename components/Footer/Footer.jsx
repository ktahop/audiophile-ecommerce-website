import styles from './Footer.module.css'
import logo from '../../public/assets/shared/desktop/logo.svg'
import facebook from '../../public/assets/shared/desktop/icon-facebook.svg'
import twitter from '../../public/assets/shared/desktop/icon-twitter.svg'
import instagram from '../../public/assets/shared/desktop/icon-instagram.svg'
import Image from 'next/image'
import NavLinks from '../NavLinks/NavLinks'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.bar}></div>
        <div className={styles.rowOne}>
          <Image 
            src={logo}
            unsized
            alt='audiophile logo'
          />
          <NavLinks />
        </div>
        <div className={styles.rowTwo}>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team<br/> 
            of music lovers and sound specialists who are devoted to helping you get the<br /> 
            most out of personal audio. Come and visit our demo facility - we're open 7<br />
            days a week.
          </p>
          <div>
            <Image 
              src={facebook}
              unsized
              alt='facebook logo'
              className={styles.socials}
            />
            <Image 
              src={twitter}
              unsized
              alt='twitter logo'
              className={styles.socials}
            />
            <Image 
              src={instagram}
              unsized
              alt='instagram logo'
              className={styles.socials}
            />
          </div>
        </div>
        <div className={styles.rowThree}>
          <p>Copyright 2023. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer