import Filters from '../filters'
import TicketList from '../ticket-list'

import styles from './app.module.scss'

export default function App() {
  console.log(styles)
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
