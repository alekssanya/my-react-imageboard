import './pcb.scss'
import AppReq from '../../../../services/axios/app';
import { useDispatch } from 'react-redux';
import { pushPost } from '../../../../store/postLinkAnswersState';

//onClick={(e) => showHideMenu(e)}
function PostCommonBody(props) {
    const disp = useDispatch()

    async function answerLinksLisnter(e) {
        if (e.target.tagName === "A") {
            let pos = e.target.getBoundingClientRect()
            console.log(pos)
            let req = new AppReq()
            let post = await req.getPost(Number(e.target.getAttribute("data-num")))
            post.data.pos= {
                left: pos.left,
                top: pos.bottom + window.pageYOffset,
                zindex: 1000
            }
            disp(pushPost(post.data))
        }
    }

    return (
        <div className="post-common__body" >
            <p onMouseOver={(e) => answerLinksLisnter(e)} className="post-common__text" dangerouslySetInnerHTML={{ __html: props.text }} />
        </div>
    );
}

export default PostCommonBody;