import './bf.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addDeleteFavorite } from '../../../store/appState'

function BtnFavorite(props) {
    const disp = useDispatch()
    const isFavorite = useSelector(state => state.state.favoriteThreads)

    return (
        <button className="btn-favorite" onClick={() => disp(addDeleteFavorite(props.idparams.threadId))}>
            <svg className={isFavorite[props.idparams.threadId] === undefined ? "favorite svg-btn" : "favorite svg-btn favorite--active"} xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="14px" height="14px" version="1.1"
                viewBox="0 0 14 14">
                <rect className="fil0" x="-0.03" y="0.03" width="14" height="14" />
                <g id="Слой_x0020_1">
                    <polygon className="fil1 str0" points="6.97,3.09 6.02,6.1 2.91,6.1 5.43,7.96 4.46,10.97 6.97,9.1 9.49,10.97 8.52,7.96 11.04,6.1 7.93,6.1 " />
                </g>
            </svg>
        </button>
    )
}

export default BtnFavorite