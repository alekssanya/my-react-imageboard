import { createSlice } from '@reduxjs/toolkit'

export const mediaViewState = createSlice({
    name: 'mediaViewState',
    initialState: {
        mvLink: ""
    },
    reducers: {
        mvSetLink: (state, params) => {
            state.mvLink = params.payload
        },
    }
})

export const { mvSetLink } = mediaViewState.actions

export default mediaViewState.reducer