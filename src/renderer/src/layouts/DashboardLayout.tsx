import { Outlet, NavLink } from "react-router-dom";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { LayoutDashboard, FileText, Users, Clock, Plus, User } from "lucide-react";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar aria-label="Menu do Dashboard" className="w-64">
        <SidebarItems>
          <SidebarItemGroup>
            <NavLink to="/dashboard" end>
              {({ isActive }) => (
                <SidebarItem
                  icon={LayoutDashboard}
                  className={isActive ? "bg-blue-100 dark:bg-gray-700" : ""}
                >
                  Visão Geral
                </SidebarItem>
              )}
            </NavLink>
            <NavLink to="/dashboard/receita">
              {({ isActive }) => (
                <SidebarItem
                  icon={FileText}
                  className={isActive ? "bg-blue-100 dark:bg-gray-700" : ""}
                >
                  Receitas
                </SidebarItem>
              )}
            </NavLink>
            <NavLink to="/dashboard/pacientes">
              {({ isActive }) => (
                <SidebarItem
                  icon={Users}
                  className={isActive ? "bg-blue-100 dark:bg-gray-700" : ""}
                >
                  Pacientes
                </SidebarItem>
              )}
            </NavLink>
            <NavLink to="/dashboard/historico">
              {({ isActive }) => (
                <SidebarItem
                  icon={Clock}
                  className={isActive ? "bg-blue-100 dark:bg-gray-700" : ""}
                >
                  Histórico
                </SidebarItem>
              )}
            </NavLink>
            <NavLink to="/dashboard/receita/nova">
              {({ isActive }) => (
                <SidebarItem
                  icon={Plus}
                  className={isActive ? "bg-blue-100 dark:bg-gray-700" : ""}
                >
                  Nova Receita
                </SidebarItem>
              )}
            </NavLink>
            <NavLink to="/dashboard/usuario">
              {({ isActive }) => (
                <SidebarItem
                  icon={User}
                  className={isActive ? "bg-blue-100 dark:bg-gray-700" : ""}
                >
                  Meus Dados
                </SidebarItem>
              )}
            </NavLink>
          </SidebarItemGroup>
        </SidebarItems>
      </Sidebar>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
