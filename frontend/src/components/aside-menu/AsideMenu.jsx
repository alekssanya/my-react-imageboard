import { Link } from "react-router-dom"
import './aside.scss'
import { useSelector } from 'react-redux'

function AsideMenu() {
    const asideIsOpen = useSelector(state => state.appState.asideIsOpen)
    let asideInnerState = JSON.parse(localStorage.getItem("asideInnerState")) || {"0":"1","1":"1","2":"1","3":"1","4":"1","5":"1","6":"1"}

    function showHide(pointer) {
        let elem = document.getElementsByClassName('aside__menu-item')[pointer].children[1]
        asideInnerState[`${pointer}`] = asideInnerState[`${pointer}`] === "1" ? "0" : "1"
        localStorage.setItem("asideInnerState", JSON.stringify(asideInnerState))
        let elemStyle = getComputedStyle(elem).display
        if (elemStyle === "none") {
            elem.style.display = "block"
        } else {
            elem.style.display = "none"
        }
    }

    return (
        < aside id="aside" className="aside" style={{ display: asideIsOpen ? "block" : "none" }}>
            <ul className="aside__menu">
                <li className="aside__menu-item">
                    <div className="aside__menu-item-header" onClick={() => showHide(0)}>Разное</div>
                    <ul className="aside__menu-item-submenu" style={{ display: asideInnerState[0] === "1" ? "block" : "none" }}>
                        <li><Link to="/board/b">/b/ - бред</Link></li>
                        <li><Link to="/board/o">/o/ - оэкаки</Link></li>
                        <li><Link to="/board/soc">/soc/ - общение</Link></li>
                        <li><Link to="/board/media">/media/ - анимация</Link></li>
                        <li><Link to="/board/r">/r/ - просьбы</Link></li>
                        <li><Link to="/board/api">/api/ - API</Link></li>
                        <li><Link to="/board/rf">/rf/ - убежище</Link></li>
                    </ul>
                </li>
                <li className="aside__menu-item">
                    <div className="aside__menu-item-header" onClick={() => showHide(1)}>Политика</div>
                    <ul className="aside__menu-item-submenu" style={{ display: asideInnerState[1] === "1" ? "block" : "none" }}>
                        <li><Link to="/board/int">/int/ - international</Link></li>
                        <li><Link to="/board/po">/po/ - политика</Link></li>
                        <li><Link to="/board/news">/news/ - новости</Link></li>
                        <li><Link to="/board/hry">/hry/ - х р ю</Link></li>
                    </ul>
                </li>

                <li className="aside__menu-item">
                    <div className="aside__menu-item-header" onClick={() => showHide(2)}>Тематика</div>
                    <ul className="aside__menu-item-submenu" style={{ display: asideInnerState[2] === "1" ? "block" : "none" }}>
                        <li><Link to="/board/au">/au/ - автомобили и транспорт</Link></li>
                        <li><Link to="/board/bi">/bi/ - велосипеды</Link></li>
                        <li><Link to="/board/biz">/biz/ - бизнес</Link></li>
                        <li><Link to="/board/bo">/bo/ - книги</Link></li>
                        <li><Link to="/board/c">/c/ - комиксы и мультфильмы</Link></li>
                        <li><Link to="/board/em">/em/ - другие страны и туризм</Link></li>
                        <li><Link to="/board/fa">/fa/ - мода и стиль</Link></li>
                        <li><Link to="/board/fiz">/fiz/ - физкультура</Link></li>
                        <li><Link to="/board/fl">/fl/ - иностранные языки</Link></li>
                        <li><Link to="/board/ftb">/ftb/ - футбол</Link></li>
                        <li><Link to="/board/hh">/hh/ - hip-hop</Link></li>
                        <li><Link to="/board/hi">/hi/ - история</Link></li>
                        <li><Link to="/board/me">/me/ - медицина</Link></li>
                        <li><Link to="/board/mg">/mg/ - магия</Link></li>
                        <li><Link to="/board/mlp">/mlp/ - my little pony</Link></li>
                        <li><Link to="/board/mo">/mo/ - мотоциклы</Link></li>
                        <li><Link to="/board/mov">/mov/ - Фильмы</Link></li>
                        <li><Link to="/board/mu">/mu/ - музыка</Link></li>
                        <li><Link to="/board/ne">/ne/ - животные и природа</Link></li>
                        <li><Link to="/board/psy">/psy/ - психология</Link></li>
                        <li><Link to="/board/re">/re/ - религия</Link></li>
                        <li><Link to="/board/sci">/sci/ - наука</Link></li>
                        <li><Link to="/board/sf">/sf/ - научная фантастика</Link></li>
                        <li><Link to="/board/sn">/sn/ - паранормальные явления</Link></li>
                        <li><Link to="/board/sp">/sp/ - спорт</Link></li>
                        <li><Link to="/board/spc">/spc/ - космос и астрономия</Link></li>
                        <li><Link to="/board/tv">/tv/ - тв и кино</Link></li>
                        <li><Link to="/board/un">/un/ - образование</Link></li>
                        <li><Link to="/board/w">/w/ - оружие</Link></li>
                        <li><Link to="/board/wh">/wh/ - warhammer</Link></li>
                        <li><Link to="/board/wm">/wm/ - военная техника и оружие</Link></li>
                        <li><Link to="/board/wp">/wp/ - обои и высокое разрешение</Link></li>
                        <li><Link to="/board/zog">/zog/ - теории заговора</Link></li>
                    </ul>
                </li>

                <li className="aside__menu-item">
                    <div className="aside__menu-item-header" onClick={() => showHide(3)}>Творчество</div>
                    <ul className="aside__menu-item-submenu" style={{ display: asideInnerState[3] === "1" ? "block" : "none" }}>
                        <li><Link to="/board/de">/de/ - дизайн</Link></li>
                        <li><Link to="/board/di">/di/ - столовая</Link></li>
                        <li><Link to="/board/diy">/diy/ - хобби</Link></li>
                        <li><Link to="/board/izd">Графомания</Link></li>
                        <li><Link to="/board/mus">/mus/ - музыканты</Link></li>
                        <li><Link to="/board/pa">/pa/ - живопись</Link></li>
                        <li><Link to="/board/p">/p/ - фото</Link></li>
                        <li><Link to="/board/wrk">/wrk/ - РАБота и карьера</Link></li>
                        <li><Link to="/board/trv">/trv/ - путешествия</Link></li>
                    </ul>
                </li>

                <li className="aside__menu-item">
                    <div className="aside__menu-item-header" onClick={() => showHide(4)}>Техника и софт</div>
                    <ul className="aside__menu-item-submenu" style={{ display: asideInnerState[4] === "1" ? "block" : "none" }}>
                        <li><Link to="/board/gd">/gd/ - gamedev</Link></li>
                        <li><Link to="/board/hw">/hw/ - компьютерное железо</Link></li>
                        <li><Link to="/board/mobi">/mobi/ - мобильные устройства и приложения</Link></li>
                        <li><Link to="/board/pr">/pr/ - программирование</Link></li>
                        <li><Link to="/board/ra">/ra/ - радиотехника</Link></li>
                        <li><Link to="/board/s">/s/ - программы</Link></li>
                        <li><Link to="/board/t">/t/ - техника</Link></li>
                        <li><Link to="/board/web">/web/ - веб-мастера</Link></li>
                    </ul>
                </li>
                <li className="aside__menu-item">
                    <div className="aside__menu-item-header" onClick={() => showHide(5)}>Игры</div>
                    <ul className="aside__menu-item-submenu" style={{ display: asideInnerState[5] === "1" ? "block" : "none" }}>
                        <li><Link to="/board/bg">/bg/ - настольные игры</Link></li>
                        <li><Link to="/board/cg">/cg/ - консоли</Link></li>
                        <li><Link to="/board/gsg">/gsg/ - grand strategy games</Link></li>
                        <li><Link to="/board/ruvn">/ruvn/ - российские визуальные новеллы</Link></li>
                        <li><Link to="/board/tes">/tes/ - the elder scrolls</Link></li>
                        <li><Link to="/board/v">/v/ - video games</Link></li>
                        <li><Link to="/board/vg">/vg/ - video games general</Link></li>
                        <li><Link to="/board/wr">/wr/ - текстовые авторские рпг</Link></li>
                    </ul>
                </li>

                <li className="aside__menu-item">
                    <div className="aside__menu-item-header" onClick={() => showHide(6)}>Японская культура</div>
                    <ul className="aside__menu-item-submenu" style={{ display: asideInnerState[6] === "1" ? "block" : "none" }} id="fm__weeaboo">
                        <li><Link to="/board/a">/a/ - аниме</Link></li>
                        <li><Link to="/board/fd">/fd/ - фэндом</Link></li>
                        <li><Link to="/board/ja">/ja/ - японская культура</Link></li>
                        <li><Link to="/board/ma">/ma/ - манга</Link></li>
                        <li><Link to="/board/vn">/vn/ - визуальные новеллы</Link></li>
                    </ul>
                </li>
            </ul>
        </aside >
    )
}

export default AsideMenu
