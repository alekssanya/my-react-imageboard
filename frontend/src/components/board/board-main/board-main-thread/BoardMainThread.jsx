import './bmt.scss'
import BoardMainOppost from '../../../post/board-oppost/BoardOppost';
import Post from '../../../post/post/Post';
import { useSelector, useDispatch } from 'react-redux';
import { showPost } from "../../../../store/states/appState"

const BoardMainThread = (props) => {
  const disp = useDispatch()
  const isHide = useSelector(state => state.appState.hiddenPostsAndThreads)

  return (
    <div className="board-main-thread">
      {isHide[props.posts[0].id]
        ? <div className="board-main-oppost" onClick={() => disp(showPost(props.posts[0].id))}>Скрытый тред №{props.posts[0].id} ({props.posts[0].postTitle})</div>
        : <>
          <BoardMainOppost totalCount={props.totalCount} shown={props.posts.slice(1).length + 1} key={props.posts[0].id} post={props.posts[0]} lastpost={props.posts[props.posts.length - 1].id}/>
          {props.posts.slice(1).map((elem) => (
            isHide[elem.id]
              ? <div onClick={() => disp(showPost(elem.id))}>Скрытый пост №{elem.id} ({elem.postTitle})</div>
              : <Post key={elem.id} posttype={"post"} post={elem} />
          ))}
        </>
      }
    </div>
  );
}

export default BoardMainThread