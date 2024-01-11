import './boardmain.scss'
import ReplyPostsCont from '../../containers/reply-posts-cont/ReplyPostsCont'
import BoardMainThreads from './board-main-thread/board-main-threads/BoardMainThreads'

const BoardMain = (() => {

  return (
    <main className='board-main'>
      <BoardMainThreads />
      <ReplyPostsCont />
    </main>
  );
})

export default BoardMain;