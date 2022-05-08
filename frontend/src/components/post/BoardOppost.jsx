import './board-oppost.scss'
import { Link } from 'react-router-dom';
import PostCommonHeader from "./post-comp/post-header/PostCommonHeader";
import PostCommonBody from "./post-comp/post-body/PostCommonBody";
import PostCommonAnswers from "./post-comp/post-answers/PostCommonAnswers";
import BtnTriangle from "../buttons/triangle/BtnTriangle";
import BtnFavorite from '../buttons/favorite/BtnFavorite';
import BtnHide from '../buttons/hide/BtnHide';

function BoardMainOppost(props) {
    return (
        <div className='board-oppost'>
            <div className="board-oppost__header">
                <PostCommonHeader createdat={props.post.createdAt} id={props.post.id} username={props.post.userName} />
                <Link key={props.post.ThreadId} to={`${props.post.ThreadId}`} className='board-oppost__post-id'>Ответ</Link>
                <div className="board-oppost__btns">
                    <div className="board-oppost__btns-wr">
                        <BtnFavorite idparams={{threadId: props.post.ThreadId}} />
                    </div>
                    <div className="board-oppost__btns-wr">
                        <BtnHide idparams={{ postId: props.post.id }}/>
                        <BtnTriangle idparams={{threadId: props.post.ThreadId, postId: props.post.id}} />
                    </div>
                </div>
            </div>
            <PostCommonBody text={props.post.text} />
            <PostCommonAnswers answers={props.post.answers}/>
            <div className="board-oppost__footer">
                <p className="">Пропущено {props.totalCount - props.shown} сообщений, 0 с картинками.</p>
            </div>
        </div>
    );
}

export default BoardMainOppost;