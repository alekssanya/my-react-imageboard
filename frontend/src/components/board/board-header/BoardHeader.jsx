import "./bh.scss"
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateThread } from '../../../store/states/appState'
import BoardHeaderBtn from './board-header-btn/BoardHeaderBtn'
import AppReq from '../../../services/axios/app'

function BoardHeader() {
    const navigate = useNavigate()
    const disp = useDispatch()
    const [seconds, setSeconds] = useState(15)
    const [timerActive, setTimerActive] = useState(false)
    const [timerId, setTimerId] = useState()
    const thread = useSelector(state => state.appState.thread)
    let splitPath = Object.values(useParams())[0].split('/')
    let counter = 15
    
    function timer() {
        let timerId = setTimeout(async () => {
            console.log(seconds)
            if (counter === 1) {
                setSeconds((sec) => sec = "выполняется...")
                await refreshThread()
                setSeconds((sec) => sec = 15)
                counter = 15
                setTimerId(timer())
            } else {
                setSeconds((sec) => sec - 1)
                counter -= 1
                setTimerId(timer())
            }
        }, 1000)
        return timerId
    }
    
    async function refreshThread() {
        let resp = new AppReq()
        disp(updateThread(await resp.refreshThread(splitPath[1], thread[thread.length - 1].id)))
    }

    function autorefresh() {
        if (timerActive) {
            clearInterval(timerId)
            setTimerActive((bool) => bool = false)
            setSeconds((sec) => sec = 15)
            counter = 15
        } else {
            setTimerActive((bool) => bool = true)
            setTimerId(timer())
        }
    }

    useEffect(() => {
        return () => { clearInterval(timerId) }
    }, [])

    return (
        <div className="board-header">
            <div className="ew">
                {splitPath.length > 1
                    ? <div className="board-header">
                        <BoardHeaderBtn />
                        <a onClick={() => navigate(-1)}>Назад</a>|
                        <a href="#bottom">Вниз</a>|
                        <a href="/b/catalog.html" className="desktop" target="_blank">Каталог</a>|
                        <a onClick={refreshThread} className="postbtn-update">Обновить тред</a>|
                        <span className="autorefresh">
                            <input type="checkbox" className="autorefresh-checkbox" onClick={autorefresh} /> Автообновление {timerActive && <>через {seconds}</>}<span className="autorefresh-countdown"></span>
                        </span>
                    </div>
                    : <div className="board-header">
                        <BoardHeaderBtn />
                        <a href="/b/catalog.html" className="catalog" target="_blank">Каталог</a>
                    </div>
                }
            </div>
        </div>
    )
}

export default BoardHeader