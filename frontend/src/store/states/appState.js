import { createSlice } from '@reduxjs/toolkit'

export const appState = createSlice({
    name: 'appState',
    initialState: {
        thread: null,
        asideIsOpen: window.localStorage.asideIsOpen === "false" ? false : true,
        hiddenPostsAndThreads: JSON.parse(localStorage.getItem("hiddenPostsAndThreads")) || {},
        favoriteThreads: JSON.parse(localStorage.getItem("favoriteThreads")) || {},
        postIdUpdate: undefined,
    },
    reducers: {
        setThread: (state, params) => {
            state.thread = params.payload
        },

        updateThread: (state, params) => {
            if (params.payload) {
                state.thread = [...state.thread, ...params.payload]
            }
        },

        asideSwitcher: state => {
            let elem = document.getElementById("aside")
            state.asideIsOpen ? elem.style.display = "none" : elem.style.display = "block"
            state.asideIsOpen = !state.asideIsOpen
            localStorage.setItem("asideIsOpen", state.asideIsOpen)
        },

        hidePost: (state, params) => {
            state.hiddenPostsAndThreads[params.payload] = "1"
            localStorage.setItem("hiddenPostsAndThreads", JSON.stringify(state.hiddenPostsAndThreads))
        },

        showPost: (state, params) => {
            delete state.hiddenPostsAndThreads[params.payload]
            localStorage.setItem("hiddenPostsAndThreads", JSON.stringify(state.hiddenPostsAndThreads))
        },

        addDeleteFavorite: (state, params) => {
            if (state.favoriteThreads[params.payload.threadId]) {
                delete state.favoriteThreads[params.payload.threadId]
            } else {
                let temp = { ...params.payload, newPostsCount: 0 }
                console.log(temp)
                state.favoriteThreads[params.payload.threadId] = temp
            }
            localStorage.setItem("favoriteThreads", JSON.stringify(state.favoriteThreads))
        },

        updateFavorite: (state, params) => {
            for (const key in params.payload) {
                if (params.payload[key] > 0) {
                    console.log(key)
                    state.favoriteThreads[key]["newPostsCount"] = params.payload[key]
                }
            }

            localStorage.setItem("favoriteThreads", JSON.stringify(state.favoriteThreads))
        },

        checkFavorite: (state, params) => {
            state.favoriteThreads[params.payload[0]]["lastpost"] = params.payload[1]
            state.favoriteThreads[params.payload[0]]["newPostsCount"] = 0
            localStorage.setItem("favoriteThreads", JSON.stringify(state.favoriteThreads))
        },
    }
})

export const {
    setThread, updateThread,
    asideSwitcher, hidePost,
    showPost, addDeleteFavorite,
    updateFavorite, checkFavorite
} = appState.actions

export default appState.reducer