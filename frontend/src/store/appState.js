import { createSlice } from '@reduxjs/toolkit'

export const appState = createSlice({
    name: 'state',
    initialState: {
        asideIsOpen: window.localStorage.asideIsOpen === "false" ? false : true,
        hiddenPostsAndThreads: JSON.parse(localStorage.getItem("hiddenPostsAndThreads")) || {},
        favoriteThreads: JSON.parse(localStorage.getItem("favoriteThreads")) || {},
    },
    reducers: {
        asideSwitcher: state => {
            console.log(state.asideIsOpen)
            let elem = document.getElementById("aside")
            state.asideIsOpen ? elem.style.display = "none" : elem.style.display = "block"
            state.asideIsOpen = !state.asideIsOpen
            localStorage.setItem("asideIsOpen", state.asideIsOpen)
        },

        hidePost: (state, params) => {
            console.log(params)
            state.hiddenPostsAndThreads[params.payload] = "1"
            localStorage.setItem("hiddenPostsAndThreads", JSON.stringify(state.hiddenPostsAndThreads))
        },

        showPost: (state, params) => {
            console.log(params)
            delete state.hiddenPostsAndThreads[params.payload]
            localStorage.setItem("hiddenPostsAndThreads", JSON.stringify(state.hiddenPostsAndThreads))
        },

        addDeleteFavorite: (state, params) => {
            console.log(params)
            if (state.favoriteThreads[params.payload]) {
                delete state.favoriteThreads[params.payload]
            } else {
                state.favoriteThreads[params.payload] = "1"
            }
            console.log(state.favoriteThreads)
            localStorage.setItem("favoriteThreads", JSON.stringify(state.favoriteThreads))
        }
    }
})

export const { asideSwitcher, hidePost, showPost, addDeleteFavorite } = appState.actions

export default appState.reducer