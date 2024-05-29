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
      <img alt="aviasales-logo" src="images/logo.svg" className={styles.page__logo} />
      <div className={styles.main}>
        <Filters />
        <TicketList />
      </div>
    </div>
  )
}
