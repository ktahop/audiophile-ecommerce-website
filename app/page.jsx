import styles from './page.module.css'
import heroImg from '../public/assets/home/desktop/image-hero.jpg'
import Image from 'next/image'
import Category from '@/components/Category/Category'

const Home = () => {
  return (
    <main> 
      <section className={styles.hero}>
        <div className={`${styles.heroContent} ${styles.container}`}>
          <p className="overline">New Product</p>
          <h1>
            X99 MARK II<br />
            HEADPHONES
          </h1>
          <p>
            Experience natural, lifelike audio and exceptional<br />
            build quality made for the passionate music<br />
            enthusiasts.
          </p>
          <a href="#" className='btn-one'>SEE PRODUCTS</a>
        </div>
      </section>
      <section className={`${styles.category}`}>
        <Category />
      </section>
    </main>
  )
}

export default Home