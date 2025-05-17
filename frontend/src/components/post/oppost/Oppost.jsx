import './oppost.scss'
import PostCommonHeader from "../components/post-header/PostCommonHeader"
import PostCommonBody from "../components/post-body/PostCommonBody"
import BtnTriangle from "../../buttons/triangle/BtnTriangle"
import BtnFavorite from '../../buttons/favorite/BtnFavorite'
import BtnHide from '../../buttons/hide/BtnHide'

function Oppost(props) {
    return (
        <div className="oppost" id={props.post.id}>
            <div className="oppost__header">
                <PostCommonHeader createdat={props.post.createdAt} id={props.post.id} username={props.post.userName} />
                <div className="oppost__btns">
                    <div className="oppost__btns-wr">
                        <BtnFavorite params={{ threadId: props.post.ThreadId, lastpost: props.lastpost, postTitle: props.post.postTitle }} />
                    </div>
                    <div className="oppost__btns-wr">
                        <BtnHide idparams={{ postId: props.post.id }} />
                        <BtnTriangle idparams={{ threadId: props.post.ThreadId, postId: props.post.id }} />
                    </div>
                </div>
            </div>
            <PostCommonBody post={props.post} />
        </div>
    )
}

export default Oppost