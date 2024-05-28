/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { connect } from 'react-redux'

import styles from './filters.module.scss'

function Filters({ all, noTransfer, oneTransfer, twoTransfers, threeTransfers }) {
  return (
    <div className={styles.filters}>
      <span className={styles.filters__heading}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <form className={styles.filters__form}>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} checked={all} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          Все
        </label>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} checked={noTransfer} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          Без пересадок
        </label>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} checked={oneTransfer} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          1 пересадка
        </label>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} checked={twoTransfers} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          2 пересадки
        </label>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} checked={threeTransfers} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          3 пересадки
        </label>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  all: state.all,
  noTransfer: state.noTransfer,
  oneTransfer: state.oneTransfer,
  twoTransfers: state.twoTransfers,
  threeTransfers: state.threeTransfers,
})

const mapDispatc
export default connect(mapStateToProps)(Filters)
