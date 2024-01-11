import './bc.scss'
import { useDispatch } from 'react-redux'
import { addDeleteFavorite } from '../../../store/states/appState'
function BtnClose(props) {
    const disp = useDispatch()

    return (
        <button className="btn-close btn" onClick={() => disp(addDeleteFavorite({threadId: props.threadId}))} >
            <svg className='close svg-btn' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="14px" height="14px" version="1.1" viewBox="0 0 14 14">
                <line className="fil0 str0" x1="2.5" y1="2.5" x2="11.5" y2="11.5" />
                <line className="fil0 str0" x1="2.5" y1="11.5" x2="11.5" y2="2.5" />
            </svg>
        </button>
    )
}

export default BtnClose