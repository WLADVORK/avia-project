/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './filters.module.scss'

export default function Filters() {
  return (
    <div className={styles.filters}>
      <span className={styles.filters__heading}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <form className={styles.filters__form}>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          Все
        </label>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          Без пересадок
        </label>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          1 пересадка
        </label>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          2 пересадки
        </label>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          3 пересадки
        </label>
      </form>
    </div>
  )
}
