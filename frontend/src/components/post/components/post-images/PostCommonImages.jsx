import "./pci.scss"
import BtnSearch from "../../../buttons/search/BtnSearch"
import BtnDownload from "../../../buttons/download/BtnDownload"
import { useDispatch } from "react-redux"
import { mvSetLink } from "../../../../store/states/mediaViewState"

function PostCommonImages(props) {
    const disp = useDispatch()

    function fileType(elem) {
        let type = elem.split(".")
        if (type[1] === "mp4" || type[1] === "webm" || type[1] === "gif") {
            return <img src={'http://localhost:7000/files/pv_' + type[0] + '.jpg'} onClick={() => disp(mvSetLink(elem))} alt="" className="post-common-images__video" />
        }
        return <img src={'http://localhost:7000/files/pv_' + elem} onClick={() => disp(mvSetLink(elem))} alt="" className="post-common-images__img" />
    }
    return (
        <div className="post-common-images">
            {props.files && props.files.map((elem) => (
                <figure key={elem} className="post-common-images__img-wr">
                    <div className="post-common-images__title">
                        <a href={'http://localhost:7000/files/' + elem} target="_blank" className="post-common-images__name">{elem}</a>
                        <div className="post-common-images__title-btns">
                            <BtnSearch url={'http://localhost:7000/files/' + elem} />
                            <BtnDownload url={'http://localhost:7000/files/'} file={elem} />
                        </div>
                    </div>
                    {fileType(elem)}
                </figure>
            ))}
        </div>
    )
}

export default PostCommonImages