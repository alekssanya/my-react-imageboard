import "./mmb.scss"
import Draggable from "react-draggable"
import { useDispatch, useSelector } from "react-redux";
import { mmbSetLink } from "../../store/movMediaBoardState"
import { useEffect, useRef } from "react";


function MovMediaBoard() {
    const disp = useDispatch()
    const mediaFileName = useSelector(state => state.movMediaBoardState.mmbLink)
    let wheelMoveCounter = 0

    useEffect(() => {
        
        function changeSize(e) {
            e.preventDefault()
            //transform scale конфликтует с draggable
            if (e.deltaY > 0) {
                if (wheelMoveCounter > 7) return
                wheelMoveCounter++
                elemWidth = elemWidth + (elemWidthPart * Math.abs(wheelMoveCounter))
                elem.style.width = elemWidth + "px"
                elemHeight = elemHeight + (elemHeightPart * Math.abs(wheelMoveCounter))
                elem.style.height = elemHeight + "px"
            } else {
                if (wheelMoveCounter < -5) return
                wheelMoveCounter--
                elemWidth = elemWidth - (elemWidthPart * Math.abs(wheelMoveCounter))
                elem.style.width = elemWidth + "px"
                elemHeight = elemHeight - (elemHeightPart * Math.abs(wheelMoveCounter))
                elem.style.height = elemHeight + "px"
            }
        }
        let elem = document.getElementById("mmb-file")
        elem.addEventListener("wheel", changeSize, { passive: false })
        let elemWidth = Number(window.getComputedStyle(elem).width.replace("px", ""))
        let elemHeight = Number(window.getComputedStyle(elem).height.replace("px", ""))
        let elemWidthPart = Math.round(elemWidth / 10)
        let elemHeightPart = Math.round(elemHeight / 10)
        
        return () => {
            elem.removeEventListener("wheel", changeSize)
        };
    }, [mediaFileName])

    function fileType() {
        let type = mediaFileName.split(".")
        if (type[1] === "mp4" || type[1] === "webm" || type[1] === "gif") {
            return (
                <video onClick={() => disp(mmbSetLink(""))} id="mmb-file" className="mov-media-board__video" name="media" loop="1" controls autoPlay="">
                    <source className="video" type="video/mp4" id="mmb-file" src={'http://localhost:7000/files/' + mediaFileName} />
                </video>
            )
        }
        return <img id="mmb-file" onClick={() => disp(mmbSetLink(""))} src={'http://localhost:7000/files/' + mediaFileName} alt="" className="mov-media-board__img" />
    }

    return (
        <Draggable handle="#mov-media-board__title">
            <div id="mov-media-board" className="mov-media-board">
                <p id="mov-media-board__title" className="mov-media-board__title">{mediaFileName}</p>
                {fileType()}
            </div>
        </Draggable >
    );
}

export default MovMediaBoard;