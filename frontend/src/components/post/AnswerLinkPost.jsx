import './alp.scss'
import PostCommonHeader from "./post-comp/post-header/PostCommonHeader";
import PostCommonImages from './post-comp/post-images/PostCommonImages';
import PostCommonBody from "./post-comp/post-body/PostCommonBody";
import PostCommonAnswers from "./post-comp/post-answers/PostCommonAnswers";
import BtnTriangle from "../buttons/triangle/BtnTriangle";

function AnswerLinkPost(props) {
    console.log(props)
    return (
        <div className="answer-link-post-wr" style={{left: props.post.pos.left, top: props.post.pos.top, "zIndex": props.post.pos.zindex}}>
            <div className='post'>
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
            </div>
        </div>
    );
}

export default AnswerLinkPost;