import './bmt.scss'
import BoardMainOppost from '../../post/BoardOppost';
import Post from '../../post/Post';
import { useSelector, useDispatch } from 'react-redux';
import { showPost } from "../../../store/appState"

function BoardMainThread(props) {
  const disp = useDispatch()
  const isHide = useSelector(state => state.state.hiddenPostsAndThreads)

  return (
    <div className="board-main-thread">
      {isHide[props.posts[0].id]
        ? <div className="board-main-oppost" onClick={() => disp(showPost(props.posts[0].id))}>Скрытый тред №{props.posts[0].id} ({props.posts[0].postTitle})</div>
        : <>
          <BoardMainOppost totalCount={props.totalCount} shown={props.posts.slice(1).length + 1} key={props.posts[0].id} post={props.posts[0]} />
          {props.posts.slice(1).map((elem) => (
            <Post key={elem.id} post={elem} />
          ))}
        </>
      }
    </div>
  );
}

export default BoardMainThread;