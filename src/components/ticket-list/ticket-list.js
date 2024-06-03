/* eslint-disable max-len */
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

function TicketList({ cheapest, fastest, optimal, CHEAPEST, FASTEST, OPTIMAL, tickets, done, PAGE_INC, page }) {
  return (
    <article className={styles.ticketList}>
      <div className={styles.ticketList__tabs}>
        <button
          type="button"
          className={`${styles.ticketList__tab} ${cheapest ? styles['ticketList__tab--selected'] : ''}`}
          onClick={CHEAPEST}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
        <button
          type="button"
          className={`${styles.ticketList__tab} ${fastest ? styles['ticketList__tab--selected'] : ''}`}
          onClick={FASTEST}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
        <button
          type="button"
          className={`${styles.ticketList__tab} ${optimal ? styles['ticketList__tab--selected'] : ''}`}
          onClick={OPTIMAL}
        >
          ОПТИМАЛЬНЫЙ
        </button>
      </div>
      {tickets.length === 0 ? (
        <div className={styles.ticketList__noData}>Рейсов, подходящих под заданные фильтры, не найдено </div>
      ) : (
        <>
          <div className={styles.tickets}>
            {tickets.length !== 0 ? tickets.slice(0, page * 5) : <Spin size="large" />}
          </div>
          {done ? null : <Spin />}
          <button type="button" className={styles.ticketList__showMore} onClick={PAGE_INC}>
            {`ПОКАЗАТЬ ЕЩЕ ${tickets.length - page * 5} БИЛЕТОВ!`}
          </button>
        </>
      )}
    </article>
  )
}

const mapStateToProps = ({ tabs, server, filters }) => {
  let tickets = server.tickets.slice()
  if (!filters.all) {
    tickets = tickets.filter((item) => {
      if (!filters.noTransfer && (item.segments[0].stops.length === 0 || item.segments[1].stops.length === 0)) {
        return false
      }
      if (!filters.oneTransfer && (item.segments[0].stops.length === 1 || item.segments[1].stops.length === 1)) {
        return false
      }
      if (!filters.twoTransfers && (item.segments[0].stops.length === 2 || item.segments[1].stops.length === 2)) {
        return false
      }
      if (!filters.threeTransfers && (item.segments[0].stops.length === 3 || item.segments[1].stops.length === 3)) {
        return false
      }
      return true
    })
  }

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
      <section className={styles.ticket} key={item.price + item.segments[0].duration + item.segments[1].duration}>
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
      </section>
    )
  })

  return {
    cheapest: tabs.cheapest,
    fastest: tabs.fastest,
    optimal: tabs.optimal,
    tickets,
    done: server.stop,
    page: server.page,
  }
}

const mapDispatchToProps = (dispatch) => {
  const { CHEAPEST, FASTEST, OPTIMAL, PAGE_INC } = bindActionCreators(actions, dispatch)
  return {
    CHEAPEST,
    FASTEST,
    OPTIMAL,
    PAGE_INC,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketList)
