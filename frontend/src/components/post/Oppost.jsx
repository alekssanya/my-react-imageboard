import './oppost.scss'
import PostCommonHeader from "./post-comp/post-header/PostCommonHeader";
import PostCommonBody from "./post-comp/post-body/PostCommonBody";
import PostCommonAnswers from "./post-comp/post-answers/PostCommonAnswers";
import BtnTriangle from "../buttons/triangle/BtnTriangle";
import BtnFavorite from '../buttons/favorite/BtnFavorite';
import BtnHide from '../buttons/hide/BtnHide';

function Oppost(props) {
    return (
        <div className="oppost">
            <div className="oppost__header">
                <PostCommonHeader createdat={props.post.createdAt} id={props.post.id} username={props.post.userName}/>
                <div className="oppost__btns">
                    <div className="oppost__btns-wr">
                        <BtnFavorite idparams={{threadId: props.post.ThreadId}} />
                    </div>
                    <div className="oppost__btns-wr">
                        <BtnHide idparams={{ postId: props.post.id }} />
                        <BtnTriangle idparams={{threadId: props.post.ThreadId, postId: props.post.id}}/>
                    </div>
                </div>
            </div>
            <PostCommonBody text={props.post.text}/>
            <PostCommonAnswers answers={props.post.answers}/>
        </div>
    );
}

export default Oppost;