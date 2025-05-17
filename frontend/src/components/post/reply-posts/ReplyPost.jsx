import './rp.scss'
import PostCommonHeader from "../components/post-header/PostCommonHeader"
import PostCommonBody from "../components/post-body/PostCommonBody"
import BtnTriangle from "../../buttons/triangle/BtnTriangle"
import { useDispatch } from 'react-redux'
import { mouseEnterReplyPost, mouseLeaveReplyPost } from '../../../store/actions/replyPostsMouseEvents'

function ReplyPost(props) {
    const disp = useDispatch()

    function mouseEnter(e) {
        disp(mouseEnterReplyPost())
    }

    function mouseLeave(e) {
        disp(mouseLeaveReplyPost())
    }

    return (
        <div className='reply-post' onMouseOver={(e) => mouseEnter(e)} onMouseLeave={(e) => mouseLeave(e)} style={props.pos}>
            <div className="post__header">
                <PostCommonHeader createdat={props.post.createdAt} id={props.post.id} username={props.post.userName} />
                <div className="post__btns">
                    <div className="post__btns-wr">
                        <BtnTriangle idparams={{ threadId: props.post.ThreadId, postId: props.post.id }} />
                    </div>
                </div>
            </div>
            <PostCommonBody post={props.post} />
        </div>
    )
}

export default ReplyPost