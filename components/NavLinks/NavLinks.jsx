import styles from './NavLinks.module.css'

const NavLinks = () => {
  return (
    <ul className={styles.container}>
      <li><a href="#" className="link">HOME</a></li>
      <li><a href="#" className="link">HEADPHONES</a></li>
      <li><a href="#" className="link">SPEAKERS</a></li>
      <li><a href="#" className="link">EARPHONES</a></li>
    </ul>
  )
}

export default NavLinks