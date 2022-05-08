import { useState } from "react";
import "./mbm.scss"
import MessageBoard from "../MessageBoard";
import Draggable from "react-draggable"
import { useDispatch, useSelector } from "react-redux"
import { hideMovMessageBoard, setMovPos } from '../../../store/messageBoardState'

function MessageBoardMovable() {
    const oldPos = useSelector(state => state.messageBoardState.movMessageBoardCoor)
    const [position, setPosition] = useState();
    const disp = useDispatch()

    const trackPos = (data) => {
        setPosition({ x: data.x, y: data.y });
    }

    return (
        <Draggable handle="#movable-message-board__header" defaultPosition={{x: oldPos.x, y: oldPos.y}} onDrag={(e, data) => trackPos(data)} onStop={() => disp(setMovPos(position))}>
            <div id="movable-message-board" className="movable-message-board">
                <div id="movable-message-board__header" className="movable-message-board__header">
                    Ответить в тред
                    <button className="movable-message-board__closebtn" onClick={() => disp(hideMovMessageBoard())}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="14px" height="14px" version="1.1"
                            viewBox="0 0 14 14">
                            <rect className="fil0" width="14" height="14" />
                            <g id="Слой_x0020_1">
                                <g id="_2598884719520">
                                    <line className="fil1 str0" x1="2.5" y1="2.5" x2="11.5" y2="11.5" />
                                </g>
                                <g id="_2598884719136">
                                    <line className="fil1 str0" x1="11.5" y1="2.5" x2="2.5" y2="11.5" />
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <MessageBoard isThread={true} isMovMesBoard={true}/>
            </div>
        </Draggable>
    );
}

export default MessageBoardMovable;