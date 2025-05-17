import { configureStore } from '@reduxjs/toolkit'
import appReducer from './states/appState'
import messageWindowReducer from './states/messageWindowState'
import alertsReducer from './states/alertsState'
import mediaViewReduser from './states/mediaViewState'
import replyPostsReduser from './states/replyPostsState'
import postMenuReduser from './states/postMenuState'

export default configureStore({
  reducer: {
    appState: appReducer,
    messageWindowState: messageWindowReducer,
    alertsState: alertsReducer,
    mediaViewState: mediaViewReduser,
    replyPostsState: replyPostsReduser,
    postMenuState: postMenuReduser
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    })
})