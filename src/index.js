/* eslint-disable comma-dangle */
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import App from './components/app'
import reducer from './reducer'

const store = configureStore({ reducer })
const root = ReactDOM.createRoot(document.getElementById('root'))

const update = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  )
}
update()
store.subscribe(update)
