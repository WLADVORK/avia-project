import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import Filters from '../filters'
import TicketList from '../ticket-list'
import { GET_TICKETS } from '../../actions'

import styles from './app.module.scss'

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GET_TICKETS)
  }, [])

  return (
    <div className={styles.page}>
      <header className={styles.page__header}>
        <img alt="aviasales-logo" src="images/logo.svg" className={styles.page__logo} />
      </header>

      <main className={styles.main}>
        <Filters />
        <TicketList />
      </main>
    </div>
  )
}
