import { configureStore } from '@reduxjs/toolkit'
import appStateReducer from './appState'
import messageBoardStateReducer from './messageBoardState'
import alertsStateReducer from './alertsState'
import movMediaBoardReduser from './movMediaBoardState'
import postLinkAnswersReduser from './postLinkAnswersState'
export default configureStore({
  reducer: {
    state: appStateReducer,
    messageBoardState: messageBoardStateReducer,
    alertsState: alertsStateReducer,
    movMediaBoardState: movMediaBoardReduser,
    postLinkAnswersState: postLinkAnswersReduser,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})