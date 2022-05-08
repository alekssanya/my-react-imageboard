import './pcb.scss'

//onClick={(e) => showHideMenu(e)}
function PostCommonBody(props) {
    return (
        <div className="post-common__body" >
            <p className="post-common__text" dangerouslySetInnerHTML={{ __html: props.text }} />
        </div>
    );
}

export default PostCommonBody;