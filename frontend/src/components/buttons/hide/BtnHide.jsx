import './bh.scss'
import { useDispatch } from 'react-redux'
import { hidePost } from '../../../store/states/appState'

function BtnHide(props) {
    const disp = useDispatch()

    return (
        <button className="btn-hide btn" onClick={() => disp(hidePost(props.idparams.postId))}>
            <svg className="hide svg-btn" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="14px" height="14px" version="1.1" viewBox="0 0 14 14">
                <rect className="fil0" width="14" height="14" />
                <line className="fil1 str0" x1="2.5" y1="2.5" x2="11.5" y2="11.5" />
                <line className="fil1 str0" x1="11.5" y1="2.5" x2="2.5" y2="11.5" />
            </svg>
        </button>
    )
}

export default BtnHide