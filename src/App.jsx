import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './features/landing/components/Header'
import { Main } from './features/landing/components/Main'
import { Footer } from './features/landing/components/Footer'

// Páginas cargadas bajo demanda (solo se descargan al visitarlas)
const Login = lazy(() =>
  import('./features/auth/components/Login').then((m) => ({ default: m.Login }))
)
const SignUp = lazy(() =>
  import('./features/auth/components/Registrer').then((m) => ({ default: m.SignUp }))
)
const Contrasena = lazy(() =>
  import('./features/auth/components/Contrasena').then((m) => ({ default: m.Contrasena }))
)
const Rickandmorty = lazy(() =>
  import('./features/landing/components/Rickandmorty').then((m) => ({ default: m.Rickandmorty }))
)
const Props = lazy(() =>
  import('./features/landing/components/Props').then((m) => ({ default: m.Props }))
)

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<p className="text-center my-5">Cargando...</p>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<SignUp />} />
          <Route path="/recuperarcontra" element={<Contrasena />} />
          <Route path="/rickandmorty" element={<Rickandmorty />} />
          <Route path="/prop" element={<Props />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  )
}

export default App