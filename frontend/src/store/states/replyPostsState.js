import { createSlice } from '@reduxjs/toolkit'

export const replyPostsState = createSlice({
    name: 'replyPostsState',
    initialState: {
        threads: {},
        order: [],
        orderData: {},
        timerId: false,
        cursorTimerId: false,
    },
    reducers: {
        pushPost: (state, params) => {
            if (state.orderData[params.payload.postId]) {
                state.order.splice(state.order.indexOf(params.payload.postId), 1)
            }
            state.order.push(params.payload.postId)
            state.orderData[params.payload.postId] = { threadId: params.payload.threadId, pos: params.payload.pos }
        },
        addThread: (state, params) => {
            state.threads[params.payload[Object.keys(params.payload)[0]].ThreadId] = params.payload
        },
        clearPosts: (state) => {
            state.order = []
            state.orderData = {}
        },
        deletePost: (state, params) => {
            delete state.posts[params.payload]
        },
        setTimerId: (state, params) => {
            state[params.payload[0]] = params.payload[1]
        },
        clearTimer: (state, params) => {
            clearTimeout(state[params.payload])
            state[params.payload] = false
        }
    }
})

export const { pushPost, clearPosts, deletePost, addThread, setTimerId, clearTimer } = replyPostsState.actions

export default replyPostsState.reducer