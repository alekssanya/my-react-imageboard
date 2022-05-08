import { configureStore } from '@reduxjs/toolkit'
import appStateReducer from './appState'
import messageBoardStateReducer from './messageBoardState'
import alertsStateReducer from './alertsState'
export default configureStore({
  reducer: {
    state: appStateReducer,
    messageBoardState: messageBoardStateReducer,
    alertsState: alertsStateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})