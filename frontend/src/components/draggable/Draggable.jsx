import { useEffect } from "react"
import "./d.scss"

function Draggable(props) {
  let isMouseDown = false
  let cx, cy, _px, _py, _x, _y
  let elem = null

  function move(e) {
    if (!isMouseDown || !elem) return
    cx = e.clientX
    cy = e.clientY
    const cr = elem.getBoundingClientRect()
    const x = cr.left + cx - _px
    const y = cr.top + cy - _py
    _x = `left: ${x}px`
    _y = `top: ${y}px`
    elem.style.cssText += `; ${_x}; ${_y};`
    _px = cx
    _py = cy
  }

  function mouseDown(e) {
    elem = document.getElementById("draggable")
    if (props.handle && props.handle !== e.target.id) return
    cx = e.clientX
    cy = e.clientY
    _px = cx
    _py = cy
    isMouseDown = true

    // Отключаем выделение текста
    document.body.style.userSelect = "none"
    document.body.style.webkitUserSelect = "none"
    document.body.style.msUserSelect = "none"
    document.body.style.MozUserSelect = "none"

    document.addEventListener("mousemove", move)
    document.addEventListener("mouseup", mouseUp)
  }

  function mouseUp() {
    isMouseDown = false

    // Включаем выделение текста обратно
    document.body.style.userSelect = ""
    document.body.style.webkitUserSelect = ""
    document.body.style.msUserSelect = ""
    document.body.style.MozUserSelect = ""

    document.removeEventListener("mousemove", move)
    document.removeEventListener("mouseup", mouseUp)
  }

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", move)
      document.removeEventListener("mouseup", mouseUp)
    }
  }, [])

  return (
    <div
      id="draggable"
      className="draggable"
      onMouseDown={mouseDown}
      style={{ position: "absolute" }}
    >
      {props.children}
    </div>
  )
}

export default Draggable