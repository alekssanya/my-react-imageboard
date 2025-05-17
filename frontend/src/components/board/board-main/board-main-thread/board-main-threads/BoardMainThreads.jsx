import { useState, useEffect } from 'react'
import '../../boardmain.scss'
import AppReq from '../../../../../services/axios/app'
import { useParams } from 'react-router-dom'
import BoardMainThread from '../BoardMainThread'
import { useDispatch } from 'react-redux'
import { clearPosts } from '../../../../../store/states/replyPostsState'

const BoardMainThreads = (() => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [threads, setThreads] = useState([])
    const path = useParams()
    const disp = useDispatch()
    let page = 0
    let dymPageisLoaded = false
    let appreq = new AppReq()

    async function dynamicPaginagtion() {
        if (dymPageisLoaded && window.pageYOffset + window.screen.height >= document.body.scrollHeight) {
            dymPageisLoaded = false
            let resp = await appreq.getAllThreadsOnBoard(Object.values(path)[0], page++)
            if (resp.length > 0) {
                setThreads((oldThreads) => oldThreads.concat(resp))
                dymPageisLoaded = true
            }
        }
    }

    useEffect(() => {
        window.scroll(0, 0)
        async function fetchData() {
            let resp = await appreq.getAllThreadsOnBoard(Object.values(path)[0], page++)
            setThreads(() => resp)
            setIsLoaded(() => true)
            dymPageisLoaded = true
        }
        fetchData()
        window.addEventListener("scroll", dynamicPaginagtion)
        return () => {
            window.removeEventListener("scroll", dynamicPaginagtion)
            disp(clearPosts())
        }
    }, [path]);

    return (
        <>
            {isLoaded
                ? threads.map((elem) => (
                    <BoardMainThread key={elem.rows[0].ThreadId} totalCount={elem.count} posts={elem.rows} />
                ))
                : <div>Loading...</div>
            }
        </>
    );
})

export default BoardMainThreads