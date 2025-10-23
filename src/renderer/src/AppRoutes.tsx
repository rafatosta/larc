import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Recuperar from "./pages/Recuperar";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import Receitas from "./pages/dashboard/Receitas";
import NovaReceita from "./pages/dashboard/NovaReceita";
import Pacientes from "./pages/dashboard/Pacientes";
import Historico from "./pages/dashboard/Historico";
import MeusDados from "./pages/dashboard/MeusDados";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Páginas públicas */}
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/recuperar" element={<Recuperar />} />

        {/* Dashboard com layout e subrotas */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="receita" element={<Receitas />} />
          <Route path="receita/nova" element={<NovaReceita />} />
          <Route path="pacientes" element={<Pacientes />} />
          <Route path="historico" element={<Historico />} />
          <Route path="usuario" element={<MeusDados />} />
        </Route>

        {/* Rota padrão para páginas não encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
