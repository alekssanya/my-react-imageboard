import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Oppost from "../post/oppost/Oppost"
import Post from "../post/post/Post"
import AppReq from "../../services/axios/app"
import "./thread.scss"
import { useSelector, useDispatch } from 'react-redux'
import { setThread, showPost, checkFavorite } from "../../store/states/appState"
import { addThread } from '../../store/states/replyPostsState'
import ReplyPostsCont from '../containers/reply-posts-cont/ReplyPostsCont'

function Thread() {
  let path = Object.values(useParams())[0].split('/')
  const disp = useDispatch()
  const thread = useSelector(state => state.appState.thread)
  const isHide = useSelector(state => state.appState.hiddenPostsAndThreads)
  const favoriteThreads = useSelector(state => state.appState.favoriteThreads)

  useEffect(() => {
    window.scroll(0, 0)
    async function fetchData() {
      let req = new AppReq()
      let thread = await req.getThread(path[1], path[0])
      disp(setThread(thread))
      let postId = window.location.href.split("#")[1]
      if (postId) {
        document.getElementById(postId).scrollIntoView()
      }
      if (favoriteThreads[thread[0].ThreadId]) {
        disp(checkFavorite([thread[0].ThreadId, thread[thread.length - 1].id]))
      }
    }
    fetchData()
  }, [path[1]])

  useEffect(() => {
    if (thread && favoriteThreads[thread[0].ThreadId]) {
      disp(checkFavorite([thread[0].ThreadId, thread[thread.length - 1].id]))
    }
  }, [thread])

  return (
    <main className='thread'>
      {thread ?
        <div>
          <Oppost key={thread[0].id} post={thread[0]} lastpost={thread[thread.length - 1].id} />
          {thread.slice(1).map(elem =>
            isHide[elem.id]
              ? <div onClick={() => disp(showPost(elem.id))}>Скрытый пост №{elem.id} ({elem.postTitle})</div>
              : <Post key={elem.id} posttype={"post"} post={elem} />
          )}
        </div>
        : <div>Loading...</div>
      }
      <ReplyPostsCont />
    </main>
  )
}
export default Thread
