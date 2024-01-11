import { useSelector } from 'react-redux'
import ReplyPost from '../../post/reply-posts/ReplyPost'

const ReplyPostsCont = (() => {
    const order = useSelector(state => state.replyPostsState.order)
    const orderData = useSelector(state => state.replyPostsState.orderData)
    const threads = useSelector(state => state.replyPostsState.threads)

    return (
        <>
            {orderData &&
                order.map((elem) => (
                    <ReplyPost key={elem} post={threads[orderData[elem].threadId][elem]} pos={orderData[elem].pos}/>
                ))
            }
        </>
    )
})

export default ReplyPostsCont