import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('../views/home/Home'))
const Board = lazy(() => import('../views/board/Board'))
const BoardMain = lazy(() => import('../components/board/board-main/BoardMain'))
const NotFound = lazy(() => import('../views/404/NotFound'))
const Thread = lazy(() => import('../components/thread/Thread'))

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
      <Route path='/' element={
        <Suspense fallback={<>...</>}>
          <Home />
        </Suspense>}
      />
      <Route path='board/*' element={<Suspense fallback={<>...</>}><Board /></Suspense>}>
        {routerRoads.map((elem, index) => (
          <Route key={index}>
            <Route key={elem} path={`${elem}`} element={<Suspense fallback={<>...</>}><BoardMain /></Suspense>} />
            <Route key={index} path={`${elem}/:${elem}Id`} element={<Suspense fallback={<>...</>}><Thread /></Suspense>} />
          </Route>
        ))}
        <Route path="*" element={<Suspense fallback={<>...</>}><NotFound /></Suspense>} />
      </Route>
      <Route path="*" element={<Suspense fallback={<>...</>}><NotFound /></Suspense>} />
    </Routes>
  )
}

export default AppRouter
