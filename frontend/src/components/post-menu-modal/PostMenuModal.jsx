import './pmp.scss'
import { useSelector, useDispatch } from "react-redux"
import { showMovMessageBoard } from '../../store/messageBoardState'
import { hidePost } from '../../store/appState'

function PostMenuModal() {
    const disp = useDispatch()
    const coor = useSelector(state => state.messageBoardState.postModalMenuCoor)
    const postId = useSelector(state => state.messageBoardState.postId)
    //репорт не работает по причине отсутствия админки
    return (
        <div style={{top: coor[0], left: coor[1]}} className="post-menu-modal">
            <button className="post-menu-modal__btn" onClick={() => disp(showMovMessageBoard())}>Ответить</button>
            <button className="post-menu-modal__btn" onClick={() => disp(hidePost(postId))}>Скрыть</button>
            <button className="post-menu-modal__btn" onClick={() => alert("Мамке своей пожалуйся азаза")}>Зарепортить</button>
        </div>
    )
}

export default PostMenuModal;