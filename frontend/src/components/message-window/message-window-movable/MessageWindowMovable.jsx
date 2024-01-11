import { useState } from "react"
import "./mwm.scss"
import MessageWindow from "../MessageWindow"
import Draggable from "../../draggable/Draggable"
import { useDispatch, useSelector } from "react-redux"
import { hideMovMessageWindow, setMovPos } from '../../../store/states/messageWindowState'

function MessageWindowMovable() {
    const [position, setPosition] = useState()
    const disp = useDispatch()

    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y })
    }
/*
    useEffect(() => {
        document.getElementById("draggable").style.left = `${oldPos.x}px`
        document.getElementById("draggable").style.top = `${oldPos.y}px`
    }, [])
*/
    return (
        <Draggable handle="movable-message-window__header">
            <div id="movable-message-window" className="movable-message-window">
                <div id="movable-message-window__header" className="movable-message-window__header">
                    Ответить в тред
                    <button className="movable-message-window__closebtn" onClick={() => disp(hideMovMessageWindow())}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="14px" height="14px" version="1.1"
                            viewBox="0 0 14 14">
                            <rect className="fil0" width="14" height="14" />
                            <line className="fil1 str0" x1="2.5" y1="2.5" x2="11.5" y2="11.5" />
                            <line className="fil1 str0" x1="11.5" y1="2.5" x2="2.5" y2="11.5" />
                        </svg>
                    </button>
                </div>
                <MessageWindow isMessage={true} isMovMesWindow={true} />
            </div>
        </Draggable>
    )
}

export default MessageWindowMovable