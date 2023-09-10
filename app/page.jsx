import styles from './page.module.css'
import Nav from '../components/Nav/Nav'
import About from '../components/About/About'

const Home = () => {
  return (
    <main>
      <div className={styles.hero}>
        <div className={styles.container}>
          <Nav />
          <div className={styles.heroContent}>
            <p className="overline">New Product</p>
            <h1>XX99 Mark II Headphones</h1>
            <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
            <a href="" className="btn-one">SEE PRODUCT</a>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.container}>
          <About /> 
        </div>
      </div>
    </main>
  )
}

export default Home