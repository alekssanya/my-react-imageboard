import { useState, useEffect } from 'react'
import './boardmain.scss'
import AppReq from '../../services/axios/app'
import { useParams } from 'react-router-dom'
import BoardMainThread from './board-main-thread/BoardMainThread'
import AnswersCont from '../answers-cont/AnswersCont'
const BoardMain = (() => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [threads, setThreads] = useState()
  const path = useParams()

  useEffect(() => {
    async function fetchData() {
      let appreq = new AppReq()
      let answ = await appreq.getAllThreadsOnBoard(Object.values(path)[0])
      setThreads(() => answ)
      setIsLoaded(() => true)
    }
    fetchData()
  }, [path]);

  return (
    <main className='board-main'>
      {isLoaded
        ? threads.map((elem) => (
          <BoardMainThread key={elem.rows[0].ThreadId} totalCount={elem.count} posts={elem.rows} />
        ))
        : <div>Loading...</div>
      }
      <AnswersCont />
    </main>
  );
})

export default BoardMain;