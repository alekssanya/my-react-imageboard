import { createSlice } from '@reduxjs/toolkit'

export const messageWindowState = createSlice({
    name: 'messageWindowState',
    initialState: {
        movMessageWindowisOpen: false,
        movMessageWindowCoor: JSON.parse(localStorage.getItem("setMovPos")) || { x: 0, y: 0 },
        headerMessageWindowisOpen: false,
        textInput: sessionStorage.getItem("textInput") || "",
        threadId: 0,
        postId: 0,
        optionInput: "",
        captureInput: "714120",
        filesInput: [],
        filesSize: 0,
        isFilesLoaded: true,
    },
    reducers: {
        showMovMessageWindow: (state, params) => {
            state.postId = params.payload[0]
            state.threadId = params.payload[1]
            state.movMessageWindowisOpen = true
            console.log(params)
            state.textInput = state.textInput + ">>" + params.payload[0] + "\r\n"
            sessionStorage.setItem("textInput", state.textInput)
        },

        setMovPos: (state, params) => {
            // if (!state.movMessageWindowisOpen) return
            // localStorage.setItem("setMovPos", JSON.stringify({ x: params.payload.x, y: params.payload.y }))
            console.log("сдвиг")
        },

        hideMovMessageWindow: (state) => {
            state.movMessageWindowisOpen = false
        },

        setTextInput: (state, params) => {
            state.textInput = params.payload
        },

        setOptionInput: (state, params) => {
            state.optionInput = params.payload
        },

        setCaptureInput: (state, params) => {
            state.captureInput = params.payload
        },

        setIsFilesLoaded: (state) => {
            state.isFilesLoaded = !state.isFilesLoaded
        },

        setFilesInput: (state, params) => {
            state.filesInput.push(params.payload)
        },

        clearFilesInput: (state, params) => {
            state.filesInput = []
        },

        deleteFile: (state, params) => {
            //сделать очистку input-а файлов
            state.filesInput.splice(params.payload, 1)
        }
    }
})

export const {
    showMovMessageWindow, hideMovMessageWindow,
    setTextInput, setMovPos,
    setOptionInput, setCaptureInput,
    setFilesInput, setIsFilesLoaded,
    clearFilesInput, deleteFile,
} = messageWindowState.actions

export default messageWindowState.reducer