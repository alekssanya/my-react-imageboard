import "./pci.scss"
import BtnMagnifier from "../../../buttons/magnifier/BtnFavorite";
import BtnDownload from "../../../buttons/download/BtnFavorite";
import { useDispatch } from "react-redux";
import { mmbSetLink } from "../../../../store/movMediaBoardState"

function PostCommonImages(props) {
    const disp = useDispatch()

    function fileType(elem) {
        let type = elem.split(".")
        if (type[1] === "mp4" || type[1] === "webm" || type[1] === "gif") {
            return <img src={'http://localhost:7000/files/pv_' + type[0] + '.jpg'} onClick={() => disp(mmbSetLink(elem))} alt="" className="post-common-images__video" />
        }
        return <img src={'http://localhost:7000/files/pv_' + elem} onClick={() => disp(mmbSetLink(elem))} alt="" className="post-common-images__img" />
    }
    return (
        <div className="post-common-images">
            {props.files && props.files.map((elem) => (
                <figure className="post-common-images__img-wr">
                    <div className="post-common-images__title">
                        <a href={'http://localhost:7000/files/' + elem} target="_blank" className="post-common-images__name">{elem}</a>
                        <div className="post-common-images__title-btns">
                            <BtnMagnifier />
                            <BtnDownload />
                        </div>
                    </div>
                    {fileType(elem)}
                </figure>
            ))}
        </div>
    );
}

export default PostCommonImages;