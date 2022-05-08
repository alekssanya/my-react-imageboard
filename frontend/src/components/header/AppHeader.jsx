import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
import '../message-board/MessageBoard'
import { useParams } from 'react-router-dom'
import MessageBoard from '../message-board/MessageBoard'

const Header = () => {
    let [messageBoardIsOpen, setMessageBoardIsOpen] = useState(false)
    let [messageBoardIsThread, setMessageBoardIsThread] = useState(false)

    let path = useParams()
    let splitPath = Object.values(path)[0].split('/')

    useEffect(() => {
        return setMessageBoardIsOpen(() => false)
    }, [path]);

    function handleClick(params) {
        document.getElementsByTagName("html")[0].setAttribute('theme_data', params.target.value)
    }

    function showHideMesBoard() {
        setMessageBoardIsOpen(!messageBoardIsOpen)
    }

    return (
        <header className="header">
            <div className="container">
                <nav className="header__menu">
                    <Link to="/" className=''>Главная</Link>
                    <Link to="/price.html" className='header__menu-link'>Реклама</Link>
                    <Link to="/b/arch/" className='header__menu-link'>Архив</Link>
                    <Link to="/abu/res/42375.html" className='header__menu-link'>API</Link>
                    <Link to="/makaba/stickers/" className='header__menu-link'>Каталог стикеров</Link>
                </nav>
                <nav className="header__menu">
                    <span className="adminbar__cat">
                        <Link to="/" className="header__menu-link">Главная</Link>
                        <Link to="/userboards.html" className="header__menu-link" title="Юзердоски">Юзердоски</Link>
                        <Link to="/news/catalog.html" className="header__menu-link">Каталог</Link>
                        <Link to="/tracker.html" className="header__menu-link">Трекер</Link>
                        <Link to="#" className="header__menu-link">NSFW</Link>
                        <Link to="#" className="header__menu-link">Настройки</Link>
                    </span>
                    <div className="selectbox">
                        <select onChange={(e) => handleClick(e)} defaultValue="" className="header__color-selector select">
                            <option key="makaba" value="">Makaba</option>
                            <option key="gurochan" value="gurochan">Gurochan</option>
                            <option key="neutron" value="neutron">Neutron</option>
                        </select>
                    </div>
                </nav>
            </div>
            <div className="header__message-board">
                <p className="header__message-board-title">
                    {'/' + splitPath[0] + '/'}
                </p>
                {messageBoardIsOpen
                    ? <button className="header__message-board-btn" onClick={() => showHideMesBoard()}>Закрыть форму постинга</button>
                    : <div className="ew">
                        {splitPath.length > 1
                            ? <button onClick={() => showHideMesBoard()} className="header__message-board-btn">Ответить в тред</button>
                            : <button onClick={() => showHideMesBoard()} className="header__message-board-btn">Создать тред</button>
                        }
                    </div>
                }

                {messageBoardIsOpen && <MessageBoard isThread={splitPath.length > 1} id="header-message-board" key={"header-message-board"} />}
            </div>
        </header>
    )
}

export default Header;

