import './pca.scss'

function PostCommonAnswers(props) {
    return (
        <div className="post-common-answers">
            {props.answers && props.answers.map((elem) => (
                <a key={elem.id} data-path={elem.boardName + "/" + elem.ThreadId + "#" + elem.id} className="reply-link">{">>" + elem.id}</a>
            ))}
        </div>
    )
}

export default PostCommonAnswers