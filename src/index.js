/* eslint-disable no-underscore-dangle */
/* eslint-disable comma-dangle */
import ReactDOM from 'react-dom/client'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import App from './components/app'
import filterReducer from './filter-reducer'
import tabsReducser from './tabs-reducer'
import serverReducer from './server-reducer'

const rootReducer = combineReducers({
  filters: filterReducer,
  tabs: tabsReducser,
  server: serverReducer,
})

const store = configureStore({
  reducer: rootReducer,
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
})
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
