import { Home, LineChart, Folder, Users, Database, FileText, Settings, HelpCircle, Search, Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const items = [
  { icon: Home, label: "Visão Geral", to: "/dashboard" },
  { icon: LineChart, label: "Receitas", to: "/dashboard/receita" },
  { icon: Folder, label: "Pacientes", to: "/dashboard/pacientes" },
  { icon: Users, label: "Histórico", to: "/dashboard/historico" },
];

const documents = [
  { icon: Database, label: "Meus dados", to: "/dashboard/usuario" },
  
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 h-screen flex flex-col justify-between dark:bg-sidebar-dark p-4">
      {/* Top Section */}
      <div>
        <h1 className="text-lg font-semibold mb-6">Larc</h1>

        <nav className="space-y-1">
          {items.map(({ icon: Icon, label, to }) => (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-3 p-2 rounded-lg text-sm font-medium ${
                pathname === to
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  : "text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>

        <p className="text-xs uppercase mt-6 mb-2 text-gray-400">Configurações</p>
        <nav className="space-y-1">
          {documents.map(({ icon: Icon, label, to }) => (
            <Link
              key={label}
              to={to}
              className={`flex items-center gap-3 p-2 rounded-lg text-sm font-medium ${
                pathname === to
                  ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                  : "text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="space-y-1 border-t pt-4">
        <Link to="/dashboard/settings" className="flex items-center gap-3 p-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400">
          <Settings size={18} /> Settings
        </Link>
        <Link to="/dashboard/help" className="flex items-center gap-3 p-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400">
          <HelpCircle size={18} /> Get Help
        </Link>
        <Link to="/dashboard/search" className="flex items-center gap-3 p-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-400">
          <Search size={18} /> Search
        </Link>
        <div className="mt-4 flex items-center gap-3">
          <img src="https://api.dicebear.com/9.x/initials/svg?seed=Shadcn" alt="avatar" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-medium">shadcn</p>
            <p className="text-xs text-gray-400">m@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
