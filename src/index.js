/* eslint-disable comma-dangle */
import ReactDOM from 'react-dom/client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import App from './components/app'
import filterReducer from './filter-reducer'
import tabsReducser from './tabs-reducer'

const rootReducer = combineReducers({
  filters: filterReducer,
  tabs: tabsReducser,
})

const store = configureStore({ reducer: rootReducer })
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
