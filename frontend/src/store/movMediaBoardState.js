import { createSlice } from '@reduxjs/toolkit'

export const movMediaBoardState = createSlice({
    name: 'movMediaBoardState',
    initialState: {
        mmbLink: ""
    },
    reducers: {
        mmbSetLink: (state, params) => {
            state.mmbLink = params.payload
        },
    }
})

export const { mmbSetLink } = movMediaBoardState.actions

export default movMediaBoardState.reducer