import "./mv.scss"
import Draggable from "../draggable/Draggable"
import { useDispatch, useSelector } from "react-redux"
import { mvSetLink } from "../../store/states/mediaViewState"
import { useEffect, useState } from "react"

function MovMediaBoard() {
    const disp = useDispatch()
    const fileName = useSelector(state => state.mediaViewState.mvLink)
    const [data, setData] = useState({ display: "none", width: "200px", height: "200px" })
    let mediaHeight
    let mediaWidth
    let W_WIDTH = document.documentElement.clientWidth
    let W_HEIGHT = document.documentElement.clientHeight
    let scale = 1
    let isMoved = false
    let isMouseDown = false

    function fileType() {
        let src = 'http://localhost:7000/files/'
        let type = fileName.split(".")
        if (type[1] === "mp4" || type[1] === "webm" || type[1] === "gif") {
            return (
                <video src={src + fileName} style={{
                    ...data,
                    objectFit: "contain",
                    maxWidth: "none",     
                    maxHeight: "none"
                  }} onLoadedData={(e) => onLoadHandler(e)} controls={true} autoPlay loop />
            )
        } else {
            return (
                <img id="image" style={data} src={src + fileName} onLoad={(e) => onLoadHandler(e)} />
            )
        }
    }

    function onWheelHandler(e) {
        e.preventDefault()
        e.stopPropagation()
        if (e.deltaY < 0 && scale < 3) {
            scale += 0.2
        } else if (e.deltaY > 0 && scale > 0.4) {
            scale -= 0.2
        }
        document.getElementById("draggable").style.transform = `scale(${scale})`
    }


    function onLoadHandler(e) {
        mediaWidth = e.target.naturalWidth || e.target.videoWidth
        mediaHeight = e.target.naturalHeight || e.target.videoHeight
        if (mediaWidth > W_WIDTH || mediaHeight > W_HEIGHT) {
            let mult = 1
            let multW = Math.round((W_WIDTH - 8 * 2) / mediaWidth * 100) / 100 // 8 - border
            let multH = Math.round((W_HEIGHT - 8 * 2) / mediaHeight * 100) / 100
            if (multW < 0.1) multW = 0.1
            if (multH < 0.1) multH = 0.1
            mult = multW < multH ? multW : multH
            let width = Math.round(mediaWidth * mult)
            let height = Math.round(mediaHeight * mult)
            document.getElementById("draggable").style.left = `${Math.round((W_WIDTH - width) / 2)}px`
            document.getElementById("draggable").style.top = `${Math.round((W_HEIGHT - height) / 2)}px`

            setData({
                display: "block",
                width: width,
                height: height
            })
        } else {
            document.getElementById("draggable").style.left = `${Math.round((W_WIDTH - mediaWidth) / 2)}px`
            document.getElementById("draggable").style.top = `${Math.round((W_HEIGHT - mediaHeight) / 2)}px`
            setData({
                display: "block",
                width: mediaWidth,
                height: mediaHeight
            })
        }
    }


    useEffect(() => {
        document.getElementById("draggable").addEventListener("wheel", onWheelHandler, { passive: false })
    }, [fileName])

    return (
        <Draggable>
            <div style={{ display: data.display }} id="mv" className="mv"
                onMouseDown={() => isMouseDown = true}
                onMouseMove={(e) => { if (isMouseDown) isMoved = true }}
                onClick={(e) => {
                    e.preventDefault(); e.stopPropagation();
                    if (!isMoved) { disp(mvSetLink("")) }
                    else { isMouseDown = false; isMoved = false }
                }}>
                <p className="mv__title">{fileName}</p>
                {fileType()}
            </div>
        </Draggable>
    )
}

export default MovMediaBoard