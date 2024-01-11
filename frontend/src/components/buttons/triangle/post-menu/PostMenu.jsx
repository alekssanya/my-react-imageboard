import './pm.scss'
import { useSelector, useDispatch } from "react-redux"
import { showMovMessageWindow } from '../../../../store/states/messageWindowState'
import { hidePost } from '../../../../store/states/appState'

function PostMenu() {
    const disp = useDispatch()
    const coor = useSelector(state => state.postMenuState.postMenuCoor)
    const postId = useSelector(state => state.postMenuState.postId)
    const threadId = useSelector(state => state.postMenuState.threadId)
    //репорт не работает по причине отсутствия админки
    return (
        <div style={{top: coor[0], left: coor[1]}} className="post-menu">
            <button className="post-menu__btn" onClick={() => disp(showMovMessageWindow([postId, threadId]))}>Ответить</button>
            <button className="post-menu__btn" onClick={() => disp(hidePost(postId))}>Скрыть</button>
            <button className="post-menu__btn" onClick={() => alert("Мамке своей пожалуйся азаза")}>Зарепортить</button>
        </div>
    )
}

export default PostMenu;