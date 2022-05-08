import "./pci.scss"
import BtnMagnifier from "../../../buttons/magnifier/BtnFavorite";
import BtnDownload from "../../../buttons/download/BtnFavorite";
function PostCommonImages(props) {
    if(props.files) {
        console.log(props.files)
    }
    return (
        <div className="post-common-images">
            {props.files && props.files.map((elem) => (
                <img  src={'http://localhost:7000/files/' + elem} alt="" className="post-common-images__img" />
            ))}
        </div>
    );
}

export default PostCommonImages;