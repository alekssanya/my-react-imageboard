import './post.scss'
import PostCommonHeader from "./post-comp/post-header/PostCommonHeader";
import PostCommonImages from './post-comp/post-images/PostCommonImages';
import PostCommonBody from "./post-comp/post-body/PostCommonBody";
import PostCommonAnswers from "./post-comp/post-answers/PostCommonAnswers";
import BtnTriangle from "../buttons/triangle/BtnTriangle";
import { useDispatch, useSelector } from "react-redux";
import { showPost } from "../../store/appState"

function Post(props) {
    const isHide = useSelector(state => state.state.hiddenPostsAndThreads)
    const disp = useDispatch()
    console.log(props)
    return (
        <div className='post'>
            {isHide[props.post.id]
                ? <div className="board-main-oppost" onClick={() => disp(showPost(props.post.id))}>Скрытый пост №{props.post.id} ({props.post.postTitle})</div>
                : <>
                    <div className="post__header">
                        <PostCommonHeader createdat={props.post.createdAt} id={props.post.id} username={props.post.userName} />
                        <div className="post__btns">
                            <div className="post__btns-wr">
                                <BtnTriangle idparams={{ threadId: props.post.ThreadId, postId: props.post.id }} />
                            </div>
                        </div>
                    </div>
                    <PostCommonImages files={props.post.mediaFiles} />
                    <PostCommonBody text={props.post.text} />
                    <PostCommonAnswers answers={props.post.answers} />
                </>
            }
        </div>
    );
}

export default Post;