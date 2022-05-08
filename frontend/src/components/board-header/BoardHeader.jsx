import BoardHeaderBtn from './board-header-btn/BoardHeaderBtn';
import { useParams, useNavigate } from 'react-router-dom';
import "./bh.scss"

function BoardHeader() {
    const navigate = useNavigate()
    let splitPath = Object.values(useParams())[0].split('/')

    return (
        <div className="board-header">
            <div className="ew">
                {splitPath.length > 1
                    ? <div className="board-header">
                        <BoardHeaderBtn />
                        <a onClick={() => navigate(-1)}>Назад</a>|
                        <a href="#bottom">Вниз</a>|
                        <a href="/b/catalog.html" className="desktop" target="_blank">Каталог</a>|
                        <a href="#" className="postbtn-update">Обновить тред</a>|
                        <span className="autorefresh" style={{ display: "inline-block" }}>
                            <input type="checkbox" className="autorefresh-checkbox" id="autorefresh-checkbox-top" /> Автообновление <span className="autorefresh-countdown"></span>
                        </span>
                    </div>
                    : <div className="board-header">
                        <BoardHeaderBtn />
                        <a href="/b/catalog.html" className="catalog" target="_blank">Каталог</a>
                    </div>
                }
            </div>
        </div>
    );
}

export default BoardHeader;