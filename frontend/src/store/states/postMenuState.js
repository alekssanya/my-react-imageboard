import { createSlice } from '@reduxjs/toolkit'

export const postMenuState = createSlice({
    name: 'postMenuState',
    initialState: {
        postMenuIsOpen: false,
        postMenuCoor: [],
        threadId: 0,
        postId: 0,
    },
    reducers: {
        showPostMenu: (state, params) => {
            state.postMenuCoor = [params.payload.top, params.payload.right]
            state.threadId = params.payload.threadId
            state.postId = params.payload.postId
            state.postMenuIsOpen = true
        },

        hidePostMenu: (state) => {
            state.postMenuIsOpen = false
        },
    }
})


export const { showPostMenu, hidePostMenu } = postMenuState.actions

export default postMenuState.reducer