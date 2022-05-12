import { useSelector } from 'react-redux'
import AnswerLinkPost from '../post/AnswerLinkPost'

const AnswersCont = (() => {
    const linkAnswerPosts = useSelector(state => state.postLinkAnswersState.posts)
    return (
        <>
            {linkAnswerPosts &&
                linkAnswerPosts.map((elem, index) => (
                    <AnswerLinkPost key={elem.id + `${index}`} post={elem} />
                ))
            }
        </>
    )
})

export default AnswersCont;