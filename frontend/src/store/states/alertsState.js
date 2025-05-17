import { createSlice } from '@reduxjs/toolkit'

export const alertsState = createSlice({
    name: 'alertsState',
    initialState: {
        alertsList: {},
        alertsIdCounter: 0
    },
    reducers: {
        addAlert: (state, params) => {
            state.alertsIdCounter += 1
            let newList = state.alertsList
            newList[`${params.payload[0]}`] = params.payload[1] 
            state.alertsList = newList
        },
        updateAlert: (state, params) => {
            let newList = state.alertsList
            newList[`${params.payload[0]}`] = params.payload[1] 
            state.alertsList = newList
        },
        deleteAlert: (state, params) => {
            let newList = state.alertsList
            delete newList[`${params.payload}`]
            state.alertsList = newList
        },
    }
})

export const { addAlert, deleteAlert, updateAlert } = alertsState.actions

export default alertsState.reducer