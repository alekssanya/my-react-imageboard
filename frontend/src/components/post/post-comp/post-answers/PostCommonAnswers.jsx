import './pca.scss'
function PostCommonAnswers(props) {
    return (
        <div className="post-common-answers">
            {props.answers && props.answers.map((elem) => (
                <a className="link-color post-common-answers__link">{">>" + elem}</a>
            ))}
        </div>
    );
}

export default PostCommonAnswers;