import { Route, Routes } from 'react-router-dom'
import Home from '../views/home/Home'
import Board from '../views/board/Board'
import BoardMain from '../components/board-main/BoardMain'
import NotFound from '../views/404/NotFound';
import Thread from '../components/thread/Thread'

function AppRouter() {
  const routerRoads = ["b", "o", "soc", "media", "r", "api",
  "rf", "int", "po", "news", "hry", "au", "bi", "biz",
  "bo", "c", "em", "fa", "fiz", "fl", "ftb", "hh", "hi",
  "me", "mg", "mlp", "mo", "mov", "mu", "ne", "psy", "re",
  "sci", "sf", "sn", "sp", "spc", "tv", "un", "w", "wh", "wm",
  "wp", "zog", "de", "di", "diy", "mus", "pa", "p", "wrk", "trv",
  "gd", "hw", "mobi", "pr", "ra", "s", "t", "web", "bg", "cg", "gsg",
  "ruvn", "tes", "v", "vg", "wr", "a", "fd", "ja", "ma", "vn"]
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='board/*' element={<Board />}>
          {routerRoads.map((elem, index) => (
            <Route key={index}>
              <Route key={elem} path={`${elem}`} element={<BoardMain />} />
              <Route key={index} path={`${elem}/:${elem}Id`} element={<Thread />} />
            </Route>
          ))}
          <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRouter;
