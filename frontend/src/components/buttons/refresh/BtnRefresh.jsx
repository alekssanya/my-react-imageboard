import './br.scss'
import { updateFavorite } from '../../../store/states/appState'
import { useDispatch } from 'react-redux'
import AppReq from '../../../services/axios/app'

function BtnRefresh(props) {
    const disp = useDispatch()

    async function fetchData() {
        console.log(props.favoriteThreads)
        let appreq = new AppReq()
        if (props.arr.length > 0) {
            let threadsString = props.arr[0]
            for (let i = 1; i < props.arr.length; i++) {
                threadsString += "-" + props.arr[i]
            }
            threadsString += "&lastpost=" + props.favoriteThreads[`${props.arr[0]}`].lastpost
            for (let i = 1; i < props.arr.length; i++) {
                threadsString += "-" + props.favoriteThreads[`${props.arr[i]}`].lastpost
            }
            console.log(threadsString)
            let resp = await appreq.trackerPanelCount(threadsString)
            disp(updateFavorite(resp.data))
        }
    }

    return (
        <button className="btn-refresh btn" onClick={fetchData}>
            <svg className="svg-btn" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="14px" height="14px" version="1.0" viewBox="0 0 14 14">
                <rect className="fil0" width="14" height="14" />
                <circle className="fil1 str0" cx="7" cy="7" r="4.5" />
                <line className="fil1 str1" x1="2.5" y1="11.5" x2="11.5" y2="2.5" />
            </svg>
        </button>
    )
}

export default BtnRefresh