/* eslint-disable object-curly-newline */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'

import styles from './filters.module.scss'

function Filters({
  all,
  noTransfer,
  oneTransfer,
  twoTransfers,
  threeTransfers,
  ALL,
  NO_TRANSFER,
  ONE_TRNASFER,
  TWO_TRANSFERS,
  THREE_TRANSFERS,
}) {
  return (
    <div className={styles.filters}>
      <span className={styles.filters__heading}>КОЛИЧЕСТВО ПЕРЕСАДОК</span>
      <form className={styles.filters__form}>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} checked={all} onChange={ALL} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          Все
        </label>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} checked={noTransfer} onChange={NO_TRANSFER} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          Без пересадок
        </label>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} checked={oneTransfer} onChange={ONE_TRNASFER} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          1 пересадка
        </label>
        <label className={styles.filters__label}>
          <input type="checkbox" className={styles.filters__input} checked={twoTransfers} onChange={TWO_TRANSFERS} />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          2 пересадки
        </label>
        <label className={styles.filters__label}>
          <input
            type="checkbox"
            className={styles.filters__input}
            checked={threeTransfers}
            onChange={THREE_TRANSFERS}
          />
          <div className={styles.filters__checkbox}>
            <img alt="" src="images/mark.svg" className={styles.filters__mark} />
          </div>
          3 пересадки
        </label>
      </form>
    </div>
  )
}

const mapStateToProps = ({ filters }) => ({
  all: filters.all,
  noTransfer: filters.noTransfer,
  oneTransfer: filters.oneTransfer,
  twoTransfers: filters.twoTransfers,
  threeTransfers: filters.threeTransfers,
})

const mapDispatchToProps = (dispatch) => {
  // eslint-disable-next-line max-len
  const { ALL, NO_TRANSFER, ONE_TRNASFER, TWO_TRANSFERS, THREE_TRANSFERS } = bindActionCreators(actions, dispatch)
  return {
    ALL,
    NO_TRANSFER,
    ONE_TRNASFER,
    TWO_TRANSFERS,
    THREE_TRANSFERS,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filters)
