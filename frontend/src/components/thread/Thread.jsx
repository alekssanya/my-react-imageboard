import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Oppost from "../post/Oppost"
import Post from "../post/Post";
import AppReq from "../../services/axios/app";
import "./thread.scss"

function Thread() {
  let [isLoaded, setIsLoaded] = useState(false)
  let [thread, setThread] = useState()
  let path = Object.values(useParams())[0]
  
  useEffect(() => {
    async function fetchData() {
      let req = new AppReq()
      let qwe = path.split('/') 
      let answer = await req.getThread(qwe[1], qwe[0])
      setThread(() => answer)
      setIsLoaded(() => true)
    }
    fetchData()
    return setIsLoaded(() => false)
  }, [path]);

  return (
    <main className='thread'>
      {isLoaded ?
        <div>
          <Oppost key={thread[0].id} post={thread[0]} />
          {thread.slice(1).map(elem => <Post key={elem.id} post={elem} />)}
        </div>
        : <div>Loading...</div>
      }
    </main>
  )
}
export default Thread;
