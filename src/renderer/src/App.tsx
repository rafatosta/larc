import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Recuperar from './pages/Recuperar'

function App(): React.JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar" element={<Recuperar />} />
      </Routes>
    </Router>
  )
}

export default App
