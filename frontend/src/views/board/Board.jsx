import './board.scss'
import { Outlet } from "react-router-dom"
import AsideMenu from "../../components/aside-menu/AsideMenu"
import AppHeader from "../../components/header/AppHeader"
import AppFooter from "../../components/footer/AppFooter"
import Tracker from "../../components/tracker/TrackerPanel"
import PostMenu from '../../components/buttons/triangle/post-menu/PostMenu'
import BoardHeader from '../../components/board/board-header/BoardHeader'
import ScrollPageBtns from '../../components/buttons/scroll-page-btns/ScrollPageBtns'
import MediaView from '../../components/media-view/MediaView'
import MessageWindowMovable from '../../components/message-window/message-window-movable/MessageWindowMovable'
import AlertsCont from '../../components/containers/alerts-cont/AlertsCont'
import { mvSetLink } from '../../store/states/mediaViewState'
import { hidePostMenu } from '../../store/states/postMenuState'
import { useDispatch, useSelector } from 'react-redux'

function Board() {
  const postMenuIsOpen = useSelector(state => state.postMenuState.postMenuIsOpen)
  const movMessageWindowIsOpen = useSelector(state => state.messageWindowState.movMessageWindowisOpen)
  const mediaFileName = useSelector(state => state.mediaViewState.mvLink)
  const disp = useDispatch()

  function closeAll() {
    if (postMenuIsOpen) disp(hidePostMenu())
    if (mediaFileName) disp(mvSetLink(""))
  }

  return (
    <div className="wr" onClick={() => closeAll()}>
      {mediaFileName && <MediaView />}
      {movMessageWindowIsOpen && <MessageWindowMovable />}
      <ScrollPageBtns />
      <div className="container">
        <AlertsCont />
        <div className="board" id='board'>
          <AppHeader />
          <div className="board__inner">
            <AsideMenu />
            <div className="board__wr">
              <BoardHeader />
              <Outlet />
              <AppFooter />
            </div>
          </div>
          <Tracker />
        </div>
        {postMenuIsOpen && <PostMenu />}
      </div>
    </div>
  )
}

export default Board
