import { createSlice } from '@reduxjs/toolkit'
//вынесено в стор, чтобы оба окна отображали один и тот же ввод
export const messageBoardState = createSlice({
    name: 'messageBoardState',
    initialState: {
        postModalMenuIsOpen: false,
        postModalMenuCoor: [],
        movMessageBoardisOpen: false,
        movMessageBoardCoor: JSON.parse(localStorage.getItem("setMovPos")) || { x: 0, y: 0 },
        headerMessageBoardisOpen: false,
        messageBoardText: sessionStorage.getItem("mesBoardText") || "",
        threadId: 0,
        postId: 0,
        optionInput: undefined,
        captureInput: "714120",
        filesInput: [],
        filesSize: 0,
        isFilesLoaded: true,
    },
    reducers: {
        showPostModalMenu: (state, params) => {
            state.postModalMenuCoor = [params.payload.top, params.payload.right]
            state.threadId = params.payload.threadId
            state.postId = params.payload.postId
            state.postModalMenuIsOpen = true
        },

        hidePostModalMenu: (state) => {
            state.postModalMenuIsOpen = false
        },

        showMovMessageBoard: (state) => {
            state.movMessageBoardisOpen = true
            state.messageBoardText = state.messageBoardText + ">>" + state.postId
            sessionStorage.setItem("mesBoardText", state.messageBoardText)
        },

        setMovPos: (state, params) => {
            // if (!state.movMessageBoardisOpen) return
            // localStorage.setItem("setMovPos", JSON.stringify({ x: params.payload.x, y: params.payload.y }))
            console.log("сдвиг")
        },

        hideMovMessageBoard: (state) => {
            state.movMessageBoardisOpen = false
        },

        setTextInput: (state, params) => {
            state.messageBoardText = params.payload
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
            console.log(params.payload)
            state.filesInput.push(params.payload)
        }
    }
})

export const { 
    showPostModalMenu, hidePostModalMenu,
    showMovMessageBoard, hideMovMessageBoard,
    setTextInput, setMovPos,
    setOptionInput, setCaptureInput,
    setFilesInput, setIsFilesLoaded,
} = messageBoardState.actions

export default messageBoardState.reducer