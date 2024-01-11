import { pushPost, clearPosts, addThread, clearTimer, setTimerId } from '../states/replyPostsState'
import AppReq from '../../services/axios/app'

function offset(el, xy) {
    var c = 0
    while (el !== document.getElementById("board")) {
        c += el[xy]
        el = el.offsetParent
    }
    return c
}

async function getThread(dataPath) {
    const req = new AppReq()
    let thread = await req.getThread(dataPath[1], dataPath[0])
    let threadForm = {}
    thread.forEach(element => {
        threadForm[element.id] = element
    })
    return threadForm
}

function getReplyPostPos(e) {
    let scrW = document.body.clientWidth || document.documentElement.clientWidth
    let scrH = window.innerHeight || document.documentElement.clientHeight
    let x = offset(e.target, 'offsetLeft') + e.target.offsetWidth / 2
    let y = offset(e.target, 'offsetTop')
    if (e.clientY < scrH * 0.75) y += e.target.offsetHeight
    let pos = {}
    x < scrW / 2 ? pos.left = x + 'px' : pos.right = parseInt(scrW - x + 2) + 'px'
    e.clientY < scrH * 0.75 ? pos.top = y + 'px' : pos.bottom = parseInt(document.body.scrollHeight - y - 4) + 'px'
    return pos
}

export function mouseEnter(e) {
    return async function (dispatch, getState) {
        if (getState().replyPostsState.timerId) {
            dispatch(clearTimer("timerId"))
        }
        if (!getState().replyPostsState.cursorTimerId) {
            dispatch(setTimerId(["cursorTimerId", setTimeout(async () => {
                dispatch(clearTimer("cursorTimerId"))
                let dataPath = e.target.getAttribute("data-path").split(/(?:#|\/)/g)
                if (!getState().replyPostsState.threads[dataPath[1]]) {
                    let thread = await getThread(dataPath)
                    dispatch(addThread(thread))
                }
                console.log(getState().replyPostsState.threads[dataPath[1]])
                let pos = getReplyPostPos(e)
                dispatch(pushPost({ postId: dataPath[2], threadId: dataPath[1], pos: pos }))
            }, 50)]))
        }
    }
}

export function mouseEnterReplyPost(e) {
    return function (dispatch, getState) {
        if (getState().replyPostsState.timerId) {
            dispatch(clearTimer("timerId"))
        }
    }
}

export function mouseLeaveReplyPost(e) {
    return function (dispatch, getState) {
        if (!getState().replyPostsState.timerId) {
            dispatch(setTimerId(["timerId", setTimeout(() => { dispatch(clearPosts()); dispatch(clearTimer("timerId")) }, 1000)]))
        }
    }
}

export function mouseLeave() {
    return function (dispatch, getState) {
        if (getState().replyPostsState.cursorTimerId) {
            dispatch(clearTimer("cursorTimerId"))
        }
        if (!getState().replyPostsState.timerId) {
            dispatch(setTimerId(["timerId", setTimeout(() => { dispatch(clearPosts()); dispatch(clearTimer("timerId")) }, 1000)]))
        }
    }
}
/*
    if (xy == 'offsetLeft') {
        c += el[xy]
        console.log(c)
        el = el.offsetParent
        c += el[xy]
        console.log(c)
        console.log(el)
        return c
    }
    */