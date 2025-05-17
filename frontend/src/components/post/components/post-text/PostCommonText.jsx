import './pcb.scss'

function PostCommonText(props) {
    return (
        <div className="post-common__wr" >
            <p className="post-common__text" dangerouslySetInnerHTML={{ __html: props.text }} />
        </div>
    )
}

export default PostCommonText