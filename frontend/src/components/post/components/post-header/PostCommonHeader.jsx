import "./pch.scss"

function PostCommonHeader(props) {
    let time = props.createdat.split(".")[0].split("T")
    return (
            <div className="post-common-header">
                {
                    props.username === "sage"
                        ? <p className='post-common-header__user link-color'>Аноним</p>
                        : <p className="post-common-header__user">{props.username}</p>
                }
                <span className="post-common-header__time-date">{time[0].replaceAll("-", "/")}</span><span className="post-common-header__time-clock">{time[1]}</span>
                <p className='post-common-header__post-id'>№{props.id}</p>
            </div>
    )
}

export default PostCommonHeader