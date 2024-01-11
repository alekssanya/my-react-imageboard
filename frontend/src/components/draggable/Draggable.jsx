import { useEffect } from "react"
import "./d.scss"

function Draggable(props) {
    let isMouseDown = false
    let cx, cy, _px, _py, _x, _y
    let elem

    function move(e) {
        if (isMouseDown) {
            cx = e.clientX
            cy = e.clientY
            let cr = elem.getBoundingClientRect()
            let x = cr.left + cx - _px
            let y = cr.top + cy - _py
            _x = `left: ${x}px`
            _y = `top: ${y}px`
            elem.style.cssText += `; ${_x}; ${_y};`
            _px = cx
            _py = cy
        }
    }

    function mouseDown(e) {
        elem = document.getElementById("draggable")
        if (props.handle) {
            if (props.handle !== e.target.id) {
                return
            }
        }
        cx = e.clientX
        cy = e.clientY
        _px = cx
        _py = cy
        isMouseDown = true
    }

    function mouseUp(e) {
        isMouseDown = false
    }

    return (
        <div id="draggable" className="draggable" onMouseDown={(e) => mouseDown(e)} onMouseMove={(e) => move(e)} onMouseUp={(e) => mouseUp(e)}>
            {props.children}
        </div>
    )
}

export default Draggable