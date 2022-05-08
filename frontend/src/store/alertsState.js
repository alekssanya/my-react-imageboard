import { createSlice } from '@reduxjs/toolkit'

export const alertsState = createSlice({
    name: 'alertsState',
    initialState: {
        alertText: "",
        alertsArr: []
    },
    reducers: {
        addAlert: (state, params) => {
            state.alertsArr.push(params.payload)
        },
        updateAlert: (state, params) => {
            console.log(state.alertsArr)
            state.alertsArr = state.alertsArr.slice(1)
            state.alertsArr.unshift(params.payload)
            console.log(state.alertsArr)
        },
        deleteAlert: (state, params) => {
            console.log(state.alertsArr)
            state.alertsArr = state.alertsArr.slice(1)
            console.log(state.alertsArr)
        },
    }
})

export const { addAlert, deleteAlert, updateAlert } = alertsState.actions

export default alertsState.reducer