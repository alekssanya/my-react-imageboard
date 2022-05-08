import './tracker.scss'
import BtnRefresh from "../buttons/refresh/BtnRefresh"
import { useSelector } from "react-redux"

function TrackerPanel() {
    const favoriteThreads = useSelector(state => state.state.favoriteThreads)
    let arr = favoriteThreads ? Object.keys(favoriteThreads) : "пусто"
    let isTPOpen = JSON.parse(localStorage.getItem("trackerPanelIsOpen")) || "0"
    let qwe = "пусто"
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
                    <BtnRefresh />
                </div>
            </div>
            <div style={{ display: isTPOpen === "1" ? "block" : "none" }} id="tracker-panel-body" className="tracker-panel__body">
                {arr.length === 0
                    ? <p>{qwe}</p>
                    : arr.map((elem) => (
                        <div key={elem}>{elem}</div>
                    ))
                }

            </div>
        </div>
    )
}

export default TrackerPanel