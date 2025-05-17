import './bd.scss'
import { saveAs } from "file-saver"

function BtnDownload(props) {
    function download() {
        saveAs(
            props.url + props.file,
            props.file
        )
    }

    return (
        <button className="btn-download btn" onClick={() => download()} >
            <svg className='download svg-btn' xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="14px" height="14px" version="1.1" viewBox="0 0 14 14">
                <rect className="fil0 str1" x="3.97" y="1.985" width="6.029" height="7.015" />
                <polygon className="fil0 str0" points="7,12.5 5.052,11 3.103,9.5 7,9.5 10.897,9.5 8.948,11 " />
            </svg>
        </button>
    )
}

export default BtnDownload