import './board.scss';
import { Outlet } from "react-router-dom";
import AsideLinkMenu from "../../components/aside-link-menu/AsideLinkMenu"
import AppHeader from "../../components/header/AppHeader";
import AppFooter from "../../components/footer/AppFooter";
import Tracker from "../../components/tracker/TrackerPanel"
import MessageLog from '../../components/message-log/MessageLog';
import MessageBoardMovable from '../../components/message-board/message-board-movable/MessageBoardMovable';
import PostMenuModal from '../../components/post-menu-modal/PostMenuModal';
import BoardHeader from '../../components/board-header/BoardHeader';
import MovMediaBoard from '../../components/mov-media-board/MovMediaBoard';
import { useSelector, useDispatch } from 'react-redux'
import { hidePostModalMenu } from '../../store/messageBoardState'
import { mmbSetLink } from '../../store/movMediaBoardState';
function Board() {
  const postModalMenuIsOpen = useSelector(state => state.messageBoardState.postModalMenuIsOpen)
  const movMessageBoardisOpen = useSelector(state => state.messageBoardState.movMessageBoardisOpen)
  const mediaFileName = useSelector(state => state.movMediaBoardState.mmbLink)
  const alerts = useSelector(state => state.alertsState.alertsArr)
  const disp = useDispatch()

  function closeAll() {
    if (postModalMenuIsOpen) disp(hidePostModalMenu())
    if (mediaFileName) disp(mmbSetLink(""))
  }

  return (
    <div className="wr" onClick={() => closeAll()}>
      {mediaFileName && <MovMediaBoard />}
      {movMessageBoardisOpen && <MessageBoardMovable />}
      <div className="container">
        {alerts && alerts.map((elem) => <MessageLog key={Math.random(0, 1000)} text={elem}/>)}
        <div className="board">
          <AppHeader />
          <div className="board__inner">
            <AsideLinkMenu />
            <div className="board__wr">
              <BoardHeader />
              <Outlet />
              <AppFooter />
            </div>
          </div>
          <Tracker />
        </div>
        {postModalMenuIsOpen && <PostMenuModal />}
      </div>
    </div>
  );
}

export default Board;
