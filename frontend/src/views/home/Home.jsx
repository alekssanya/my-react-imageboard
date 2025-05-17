import logo from "../../assets/img/logo.svg"
import './home.scss'
import { Link } from "react-router-dom"

function Home() {

  return (
    <div className="home">
      <header className="home-header">
        <div className="container">
          <div className="home-header__inner">
            <img className="home-header__logo" src={logo} alt="" />
            <div className="home-header__wr">
              <p className="home-header__word">My</p>
              <p className="home-header__word">React</p>
              <p className="home-header__word">ImageBoard</p>
            </div>
          </div>
        </div>
      </header>
      <main className="home-main">
        <section className="home-main__links section">
          <ul className="home-main__links-menu">
            <li className="home-main__links-title">Тематика</li>
            <li><Link to="/board/au">Автомобили</Link></li>
            <li><Link to="/board/bi">Велосипеды</Link></li>
            <li><Link to="/board/biz">Бизнес</Link> </li>
            <li><Link to="/board/bo">Книги</Link> </li>
            <li><Link to="/board/c">Комиксы</Link></li>
            <li><Link to="/board/cc">Криптовалюты</Link></li>
            <li><Link to="/board/em">Другие страны</Link> </li>
            <li><Link to="/board/fa">Мода и стиль</Link></li>
            <li><Link to="/board/fiz">Физкультура</Link></li>
            <li><Link to="/board/fl">Ин.языки</Link></li>
            <li><Link to="/board/ftb">Футбол</Link></li>
            <li><Link to="/board/hi">История</Link></li>
            <li><Link to="/board/me">Медицина</Link></li>
            <li><Link to="/board/mg">Магия</Link></li>
            <li><Link to="/board/mlp">Пони</Link></li>
            <li><Link to="/board/mo">Мотоциклы</Link></li>
            <li><Link to="/board/mov">Фильмы</Link></li>
            <li><Link to="/board/mu">Музыка</Link></li>
            <li><Link to="/board/ne">Животные</Link></li>
            <li><Link to="/board/psy">Психология</Link></li>
            <li><Link to="/board/re">Религия</Link></li>
            <li><Link to="/board/sci">Наука</Link></li>
            <li><Link to="/board/sf">Науч. фантастика</Link></li>
          </ul>
          <ul className="home-main__links-menu">
            <li><Link to="/board/sn">Паранормальное</Link></li>
            <li><Link to="/board/sp">Спорт</Link></li>
            <li><Link to="/board/spc">Космос</Link></li>
            <li><Link to="/board/tv">Сериалы</Link></li>
            <li><Link to="/board/un">Образование</Link></li>
            <li><Link to="/board/w">Оружие</Link></li>
            <li><Link to="/board/wh">Warhammer</Link></li>
            <li><Link to="/board/wm">Военная техника</Link></li>
            <li><Link to="/board/wp">Обои и хайрез</Link></li>
            <li><Link to="/board/zog">Теории заговора</Link></li>
            <li className="home-main__links-title">Творчество</li>
            <li><Link to="/board/de">Дизайн</Link></li>
            <li><Link to="/board/di">Столовая</Link></li>
            <li><Link to="/board/diy">Хобби</Link></li>
            <li><Link to="/board/izd">Графомания</Link></li>
            <li><Link to="/board/mus">Музыканты</Link></li>
            <li><Link to="/board/pa">Живопись</Link></li>
            <li><Link to="/board/p">Фотография</Link></li>
            <li><Link to="/board/wrk">Работа</Link></li>
            <li className="home-main__links-title">Политика и новости</li>
            <li><Link to="/board/po">Политика</Link></li>
            <li><Link to="/board/news">Новости</Link></li>
            <li><Link to="/board/int">International</Link></li>
            <li><Link to="/board/hry">Х Р Ю</Link></li>
          </ul>
          <ul className="home-main__links-menu">
            <li className="home-main__links-title">Техника и софт</li>
            <li><Link to="/board/gd">Gamedev</Link></li>
            <li><Link to="/board/hw">Комп. железо</Link></li>
            <li><Link to="/board/mobi">Моб. устройства</Link></li>
            <li><Link to="/board/pr">Программирование</Link></li>
            <li><Link to="/board/ra">Радиотехника</Link></li>
            <li><Link to="/board/s">Программы</Link></li>
            <li><Link to="/board/t">Техника</Link></li>
            <li className="home-main__links-title">Игры</li>
            <li><Link to="/board/bg">Настольные игры</Link></li>
            <li><Link to="/board/cg">Консоли</Link></li>
            <li><Link to="/board/ruvn">RU виз.новеллы</Link></li>
            <li><Link to="/board/tes">The Elder Scrolls</Link></li>
            <li><Link to="/board/v">Video Games</Link></li>
            <li><Link to="/board/vg">Video Games General</Link></li>
            <li><Link to="/board/wr">Текстовые РПГ</Link></li>
          </ul>
          <ul className="home-main__links-menu">
            <li className="home-main__links-title">Японская культура</li>
            <li><Link to="/board/a">Аниме</Link></li>
            <li><Link to="/board/fd">Фэндом</Link></li>
            <li><Link to="/board/ja">Японская культура</Link></li>
            <li><Link to="/board/ma">Манга</Link></li>
            <li><Link to="/board/vn">Виз-ые новеллы</Link></li>
            <li className="home-main__links-title">Разное</li>
            <li><Link to="/board/d">Дискуссии о Два.ч</Link></li>
            <li><Link to="/board/b">Бред</Link></li>
            <li><Link to="/board/soc">Общение</Link></li>
            <li><Link to="/board/media">Анимация</Link></li>
            <li><Link to="/board/r">Реквесты</Link></li>
            <li><Link to="/board/api">API</Link></li>
            <li><Link to="/board/rf">Убежище</Link></li>
            <li><Link to="/board/o">Рисовач</Link></li>
          </ul>
        </section>
        <section className="home-news section">
          <div className="home-news__title">Новости
            <span className="home-news__pager">
              <button className="home-news__btn">←</button>
              <span id="cur_page">0</span>
              <button className="home-news__btn">→</button>
            </span>
          </div>
          <div className="home-news__page">
            <div className="home-news__col">
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrvwvffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
            </div>
            <div className="home-news__col">
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
              <div className="home-news__news">
                <Link to={"/news"} className="home-news__link">qweertyuytrfdcvgvfcvtbrcdrv</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="home-footer">
        <div className="home-footer__wr">
          <a href="/rules.html">правила</a>
          /<a href="/contacts.html">контакты</a>
          /<a href="/donate.html">пожертвования</a>
          /<a href="/d/">идеи и предложения</a>
          /<a href="//t.me/hannel" target="blank">telegram канал</a>
        </div>
      </footer>
    </div>
  )
}
export default Home
