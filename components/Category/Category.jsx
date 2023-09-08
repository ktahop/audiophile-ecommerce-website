import headphones from '../../public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakers from '../../public/assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphones from '../../public/assets/shared/desktop/image-category-thumbnail-earphones.png'
import arrowRight from '../../public/assets/shared/desktop/icon-arrow-right.svg'
import styles from './Category.module.css'
import Image from 'next/image'

const Category = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Image
          src={headphones}
          width={200}
          height={200}
          alt='headphones'
          className={styles.thumbnail}
        />
        <div>
        <h5>Headphones</h5>
        <a href="#" className="btn-three">
          SHOP
          <Image 
            src={arrowRight}
            unsized='true'
            alt='right arrow'
            className={styles.arrow}
          />
        </a>

        </div>
      </div>
      <div className={styles.card}>
        <Image
          src={speakers}
          width={200}
          height={200}
          alt='speakers'
          className={styles.thumbnail}
        />
        <h5>Headphones</h5>
        <a href="#" className="btn-three">
          SHOP
          <Image 
            src={arrowRight}
            unsized='true'
            alt='right arrow'
            className={styles.arrow}
          />
        </a>
      </div>
      <div className={styles.card}>
        <Image
          src={earphones}
          width={200}
          height={200}
          alt='earphones'
          className={styles.thumbnail}
        />
        <h5>Headphones</h5>
        <a href="#" className="btn-three">
          SHOP
          <Image 
            src={arrowRight}
            unsized='true'
            alt='right arrow'
            className={styles.arrow}
          />
        </a>
      </div>
    </div>
  )
}

export default Category