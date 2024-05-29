/* eslint-disable operator-linebreak */
/* eslint-disable no-nested-ternary */
/* eslint-disable comma-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable object-curly-newline */
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Spin } from 'antd'
import { add, format } from 'date-fns'

import * as actions from '../../actions'

import styles from './ticket-list.module.scss'

function TicketList({ cheapest, fastest, optimal, CHEAPEST, FASTEST, OPTIMAL, tickets }) {
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
      <div className={styles.tickets}>{tickets.length !== 0 ? tickets.slice(0, 5) : <Spin size="large" />}</div>
      <div className={styles.ticketList__showMore}>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</div>
    </div>
  )
}

const mapStateToProps = ({ tabs, server }) => {
  let tickets = server.tickets.slice()
  if (tabs.fastest) {
    tickets = tickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
  } else {
    tickets = tickets.sort((a, b) => a.price - b.price)
  }
  tickets = tickets.map((item) => {
    const startDate1 = format(new Date(item.segments[0].date), 'HH:mm')
    const startDate2 = format(new Date(item.segments[1].date), 'HH:mm')

    const endDate1 = format(
      add(new Date(item.segments[0].date), {
        minutes: item.segments[0].duration,
      }),
      'HH:mm'
    )
    const endDate2 = format(
      add(new Date(item.segments[1].date), {
        minutes: item.segments[1].duration,
      }),
      'HH:mm'
    )

    const hours1 = Math.floor(item.segments[0].duration / 60)
    const hours2 = Math.floor(item.segments[1].duration / 60)
    const minuts1 = item.segments[0].duration - hours1 * 60
    const minuts2 = item.segments[1].duration - hours2 * 60
    const duration1 = `${hours1 < 10 ? `0${hours1}` : hours1}ч ${minuts1 < 10 ? `0${minuts1}` : minuts1}м`
    const duration2 = `${hours2 < 10 ? `0${hours2}` : hours2}ч ${minuts2 < 10 ? `0${minuts2}` : minuts2}м`

    const stops1 = item.segments[0].stops.length > 0 ? item.segments[0].stops.join(', ') : ''
    const stops2 = item.segments[1].stops.length > 0 ? item.segments[1].stops.join(', ') : ''
    const stopsName1 =
      item.segments[0].stops.length === 0
        ? 'НЕТ ПЕРЕСАДОК'
        : item.segments[0].stops.length === 1
          ? '1 ПЕРЕСАДКА'
          : `${item.segments[0].stops.length} ПЕРЕСАДКИ`

    const stopsName2 =
      item.segments[1].stops.length === 0
        ? 'НЕТ ПЕРЕСАДОК'
        : item.segments[1].stops.length === 1
          ? '1 ПЕРЕСАДКА'
          : `${item.segments[1].stops.length} ПЕРЕСАДКИ`

    return (
      // eslint-disable-next-line react/no-array-index-key
      <div className={styles.ticket}>
        <div className={styles.ticket__header}>
          {`${String(item.price).slice(0, -3)} ${String(item.price).slice(-3)} Р`}
          <img
            alt="company-logo"
            className={styles.ticket__logo}
            src={`https://pics.avs.io/110/36/${item.carrier}.svg`}
          />
        </div>
        <div className={styles.ticket__option}>
          <div className={styles.ticket__block}>
            <div className={styles.ticket__heading}>
              {`${item.segments[0].origin} – ${item.segments[0].destination}`}
            </div>
            <div className={styles.ticket__value}>{`${startDate1} – ${endDate1}`}</div>
          </div>
          <div className={styles.ticket__block}>
            <div className={styles.ticket__heading}>В ПУТИ</div>
            <div className={styles.ticket__value}>{duration1}</div>
          </div>
          <div className={styles.ticket__block}>
            <div className={styles.ticket__heading}>{stopsName1}</div>
            <div className={styles.ticket__value}>{stops1}</div>
          </div>
        </div>
        <div className={styles.ticket__option}>
          <div className={styles.ticket__block}>
            <div className={styles.ticket__heading}>
              {`${item.segments[1].origin} – ${item.segments[1].destination}`}
            </div>
            <div className={styles.ticket__value}>{`${startDate2} – ${endDate2}`}</div>
          </div>
          <div className={styles.ticket__block}>
            <div className={styles.ticket__heading}>В ПУТИ</div>
            <div className={styles.ticket__value}>{duration2}</div>
          </div>
          <div className={styles.ticket__block}>
            <div className={styles.ticket__heading}>{stopsName2}</div>
            <div className={styles.ticket__value}>{stops2}</div>
          </div>
        </div>
      </div>
    )
  })

  return {
    cheapest: tabs.cheapest,
    fastest: tabs.fastest,
    optimal: tabs.optimal,
    tickets,
  }
}

const mapDispatchToProps = (dispatch) => {
  const { CHEAPEST, FASTEST, OPTIMAL } = bindActionCreators(actions, dispatch)
  return {
    CHEAPEST,
    FASTEST,
    OPTIMAL,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
