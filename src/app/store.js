import { createStore} from 'redux'
import rootReducer from './reducers'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
 

const _persistReducer=persistReducer(persistConfig,rootReducer)
const store = createStore(_persistReducer)

const persistor = persistStore(store)


export {store,persistor}