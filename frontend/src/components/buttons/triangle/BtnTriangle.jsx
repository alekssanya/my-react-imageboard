import { useRef } from "react"
import './bt.scss'
import { useDispatch } from 'react-redux'
import { showPostModalMenu } from '../../../store/messageBoardState'


function BtnTriangle(props) {
    const dispatch = useDispatch()
    const ref = useRef(null)

    function coor() {
        let elemCoor = ref.current.getBoundingClientRect()
        let top = elemCoor.top + window.pageYOffset
        let right = elemCoor.right + window.pageXOffset
        return {top: top, right: right, postId: props.idparams.postId, threadId: props.idparams.threadId}
    }

    return (
        <button ref={ref} className="btn-triangle" onClick={() => dispatch(showPostModalMenu(coor()))}>
            <svg className="triangle svg-btn" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" version="1.1" viewBox="0 0 14 14">
                <rect className="fil0" width="14" height="14" />
                <g id="Слой_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <polygon className="fil1 str0" points="10.902,7.158 7.051,4.828 3.2,2.498 3.2,7.158 3.2,11.818 7.051,9.488 " />
                </g>
            </svg>
        </button>
    )
}

export default BtnTriangle