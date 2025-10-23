import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Recuperar from './pages/Recuperar'
import NotFound from './pages/NotFound'

function App(): React.JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar" element={<Recuperar />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
