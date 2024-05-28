/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable object-curly-newline */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as actions from '../../actions'

import styles from './ticket-list.module.scss'

function TicketList({ cheapest, fastest, optimal, CHEAPEST, FASTEST, OPTIMAL }) {
  return (
    <div className={styles.ticketList}>
      <div className={styles.ticketList__tabs}>
        <div
          className={`${styles.ticketList__tab} ${cheapest ? styles['ticketList__tab--selected'] : ''}`}
          onClick={CHEAPEST}
        >
          САМЫЙ ДЕШЕВЫЙ
        </div>
        <div
          className={`${styles.ticketList__tab} ${fastest ? styles['ticketList__tab--selected'] : ''}`}
          onClick={FASTEST}
        >
          САМЫЙ БЫСТРЫЙ
        </div>
        <div
          className={`${styles.ticketList__tab} ${optimal ? styles['ticketList__tab--selected'] : ''}`}
          onClick={OPTIMAL}
        >
          ОПТИМАЛЬНЫЙ
        </div>
      </div>
      <div className={styles.tickets}>
        <div className={styles.ticket}>
          <div className={styles.ticket__header}>
            13 400 Р
            <img alt="company-logo" className={styles.ticket__logo} src="images/S7-logo.svg" />
          </div>
          <div className={styles.ticket__option}>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>MOW – HKT</div>
              <div className={styles.ticket__value}>10:45 – 08:00</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>В ПУТИ</div>
              <div className={styles.ticket__value}>21ч 15м</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>2 ПЕРЕСАДКИ</div>
              <div className={styles.ticket__value}>HKG, JNB</div>
            </div>
          </div>
          <div className={styles.ticket__option}>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>MOW – HKT</div>
              <div className={styles.ticket__value}>11:20 – 00:50</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>В ПУТИ</div>
              <div className={styles.ticket__value}>13ч 30м</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>1 ПЕРЕСАДКА</div>
              <div className={styles.ticket__value}>HKG</div>
            </div>
          </div>
        </div>
        <div className={styles.ticket}>
          <div className={styles.ticket__header}>
            13 400 Р
            <img alt="company-logo" className={styles.ticket__logo} src="images/S7-logo.svg" />
          </div>
          <div className={styles.ticket__option}>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>MOW – HKT</div>
              <div className={styles.ticket__value}>10:45 – 08:00</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>В ПУТИ</div>
              <div className={styles.ticket__value}>21ч 15м</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>2 ПЕРЕСАДКИ</div>
              <div className={styles.ticket__value}>HKG, JNB</div>
            </div>
          </div>
          <div className={styles.ticket__option}>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>MOW – HKT</div>
              <div className={styles.ticket__value}>11:20 – 00:50</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>В ПУТИ</div>
              <div className={styles.ticket__value}>13ч 30м</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>1 ПЕРЕСАДКА</div>
              <div className={styles.ticket__value}>HKG</div>
            </div>
          </div>
        </div>
        <div className={styles.ticket}>
          <div className={styles.ticket__header}>
            13 400 Р
            <img alt="company-logo" className={styles.ticket__logo} src="images/S7-logo.svg" />
          </div>
          <div className={styles.ticket__option}>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>MOW – HKT</div>
              <div className={styles.ticket__value}>10:45 – 08:00</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>В ПУТИ</div>
              <div className={styles.ticket__value}>21ч 15м</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>2 ПЕРЕСАДКИ</div>
              <div className={styles.ticket__value}>HKG, JNB</div>
            </div>
          </div>
          <div className={styles.ticket__option}>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>MOW – HKT</div>
              <div className={styles.ticket__value}>11:20 – 00:50</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>В ПУТИ</div>
              <div className={styles.ticket__value}>13ч 30м</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>1 ПЕРЕСАДКА</div>
              <div className={styles.ticket__value}>HKG</div>
            </div>
          </div>
        </div>
        <div className={styles.ticket}>
          <div className={styles.ticket__header}>
            13 400 Р
            <img alt="company-logo" className={styles.ticket__logo} src="images/S7-logo.svg" />
          </div>
          <div className={styles.ticket__option}>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>MOW – HKT</div>
              <div className={styles.ticket__value}>10:45 – 08:00</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>В ПУТИ</div>
              <div className={styles.ticket__value}>21ч 15м</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>2 ПЕРЕСАДКИ</div>
              <div className={styles.ticket__value}>HKG, JNB</div>
            </div>
          </div>
          <div className={styles.ticket__option}>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>MOW – HKT</div>
              <div className={styles.ticket__value}>11:20 – 00:50</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>В ПУТИ</div>
              <div className={styles.ticket__value}>13ч 30м</div>
            </div>
            <div className={styles.ticket__block}>
              <div className={styles.ticket__heading}>1 ПЕРЕСАДКА</div>
              <div className={styles.ticket__value}>HKG</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ticketList__showMore}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</div>
    </div>
  )
}

const mapStateToProps = ({ tabs }) => ({
  cheapest: tabs.cheapest,
  fastest: tabs.fastest,
  optimal: tabs.optimal,
})

const mapDispatchToProps = (dispatch) => {
  const { CHEAPEST, FASTEST, OPTIMAL } = bindActionCreators(actions, dispatch)
  return {
    CHEAPEST,
    FASTEST,
    OPTIMAL,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
