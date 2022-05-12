import { createSlice } from '@reduxjs/toolkit'

export const postLinkAnswersState = createSlice({
    name: 'postLinkAnswersState',
    initialState: {
        posts: []
    },
    reducers: {
        pushPost: (state, params) => {
            console.log(params.payload)
            state.posts.push(params.payload)
            console.log(state.posts)
        },
    }
})

export const { pushPost } = postLinkAnswersState.actions

export default postLinkAnswersState.reducer