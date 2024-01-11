import './tracker.scss'
import BtnRefresh from "../buttons/refresh/BtnRefresh"
import BtnClose from '../buttons/close/BtnClose'
import { useSelector } from "react-redux"
import { useEffect } from 'react'

function TrackerPanel() {
    const favoriteThreads = useSelector(state => state.appState.favoriteThreads)
    let arr = Object.keys(favoriteThreads)
    let isTPOpen = JSON.parse(localStorage.getItem("trackerPanelIsOpen")) || "0"


    useEffect(() => {
        let isReqPanel = JSON.parse(localStorage.getItem("TPR")) || "1"
        localStorage.setItem("TPR", isReqPanel)
    }, []);


    function showHideTrackerPanel() {
        if (isTPOpen === "1") {
            document.getElementById("tracker-panel-body").style.display = "none"
            isTPOpen = "0"
        } else {
            document.getElementById("tracker-panel-body").style.display = "block"
            isTPOpen = "1"
        }
        localStorage.setItem("trackerPanelIsOpen", isTPOpen)
    }

    return (
        <div className="tracker-panel">
            <div className="tracker-panel__header">
                <p className="tracker-panel__title" onClick={() => showHideTrackerPanel()}>Избранное</p>
                <div className="tracker-panel__refresh">
                    <BtnRefresh arr={arr} favoriteThreads={favoriteThreads} />
                </div>
            </div>
            <div style={{ display: isTPOpen === "1" ? "block" : "none" }} id="tracker-panel-body" className="tracker-panel__body">
                {arr.length === 0
                    ? <p className='tracker-panel__empty'>Нет тредов в избранном</p>
                    : arr.map((elem) => (
                        <div className='tracker-panel__favorite' key={elem}>
                            <BtnClose threadId={elem} />
                            {favoriteThreads[`${elem}`].newPostsCount >= 0 && <p className='tracker-panel__qwe'>({favoriteThreads[`${elem}`].newPostsCount})</p>}
                            <p className='tracker-panel__favorite-title'>{favoriteThreads[`${elem}`].postTitle}</p>
                        </div>
                    ))
                }
            </div>
            <div className="tracker-panel__footer"></div>
        </div>
    )
}

export default TrackerPanel