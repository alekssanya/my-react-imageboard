import './post.scss'
import PostCommonHeader from "../components/post-header/PostCommonHeader"
import PostCommonBody from "../components/post-body/PostCommonBody"
import BtnTriangle from "../../buttons/triangle/BtnTriangle"

function Post(props) {
    return (
        <div className='post' id={props.post.id}>
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

export default Post