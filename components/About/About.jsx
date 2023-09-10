import styles from './About.module.css'

const About = () => {

  return (
    <>
      <section className={styles.about}>
        <div className={styles.leftContent}>
          <h2>Bringing you the <span>best</span> audio gear</h2>
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </div>
      </section>
    </>
  )
}

export default About