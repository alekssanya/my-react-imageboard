import PostCommonText from "../post-text/PostCommonText"
import PostCommonAnswers from "../post-answers/PostCommonAnswers"
import PostCommonImages from '../post-images/PostCommonImages'
import { mouseEnter, mouseLeave } from "../../../../store/actions/replyPostsMouseEvents"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

function PostCommonBody(props) {
    const disp = useDispatch()
    const navigate = useNavigate()

    function replyLinksListener(e) {
        if (e.target.className === "reply-link") {
            disp(mouseEnter(e))
        }
    }

    function goTo(e) {
        if (e.target.className === "reply-link") {
            let path = window.location.pathname.split("/")
            let linkPath = e.target.dataset.path
            if (path.length === 4) {
                if (path[3] === linkPath.split(/(?:#|\/)/g)[1]) {
                    document.getElementById(linkPath.split("#")[1]).scrollIntoView()
                    window.history.pushState(null, null, '#' + linkPath.split("#")[1])
                } else navigate("/board/" + linkPath, { replace: true })
            } else {
                navigate(linkPath.split("/")[1])
            }
        }
    }

    function onMouseOutHandler(e) {
        if (e.target.className === "reply-link") {
            disp(mouseLeave(e))
        }
    }


    return (
        <div className="post__body" onClick={(e) => goTo(e)} onMouseOut={(e) => onMouseOutHandler(e)} onMouseOver={(e) => replyLinksListener(e)}>
            {props.post.mediaFiles && <PostCommonImages files={props.post.mediaFiles} />}
            <PostCommonText text={props.post.text} />
            <PostCommonAnswers answers={props.post.answers} />
        </div>
    )
}


export default PostCommonBody