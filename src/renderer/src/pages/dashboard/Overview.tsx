import { Card } from "flowbite-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow
} from "flowbite-react";
import { FileText, Users, CheckCircle, Clock } from "lucide-react";

const stats = [
    { title: "Total de Prescrições", value: "248", change: "+12%", icon: FileText },
    { title: "Pacientes Atendidos", value: "156", change: "+8%", icon: Users },
    { title: "Prescrições Dispensadas", value: "203", change: "+15%", icon: CheckCircle },
    { title: "Aguardando Dispensação", value: "45", change: "-3%", icon: Clock }
];

const recentPrescriptions = [
    { id: "RX-001", patient: "Maria Silva", type: "Receita", date: "2025-01-15", status: "Dispensada" },
    { id: "RX-002", patient: "João Santos", type: "Atestado", date: "2025-01-15", status: "Pendente" },
    { id: "RX-003", patient: "Ana Costa", type: "Receita", date: "2025-01-14", status: "Dispensada" },
    { id: "RX-004", patient: "Pedro Lima", type: "Exame", date: "2025-01-14", status: "Enviada" }
];

export default function Overview() {
    return (
        <div className="space-y-6 animate-fade-in">
            <div>
                <h1 className="text-3xl font-bold">Bem-vindo ao Dashboard</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Acompanhe suas prescrições e métricas em tempo real
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <Card key={index} className="p-6">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm text-gray-500">{stat.title}</p>
                                <p className="text-3xl font-bold">{stat.value}</p>
                                <p className="text-sm text-gray-400">{stat.change} este mês</p>
                            </div>
                            <div className="h-12 w-12 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                <stat.icon className="h-6 w-6" />
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                    Prescrições Recentes
                </h2>

                <div className="overflow-x-auto">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeadCell>ID</TableHeadCell>
                                <TableHeadCell>Paciente</TableHeadCell>
                                <TableHeadCell>Tipo</TableHeadCell>
                                <TableHeadCell>Data</TableHeadCell>
                                <TableHeadCell>Status</TableHeadCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {recentPrescriptions.map((p) => (
                                <TableRow
                                    key={p.id}
                                    className="hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                                >
                                    <TableCell className="font-medium">{p.id}</TableCell>
                                    <TableCell>{p.patient}</TableCell>
                                    <TableCell>{p.type}</TableCell>
                                    <TableCell className="text-gray-500">{p.date}</TableCell>
                                    <TableCell>
                                        <span
                                            className={`px-2 py-1 text-xs rounded-full ${p.status === "Dispensada"
                                                    ? "bg-green-100 text-green-700"
                                                    : p.status === "Pendente"
                                                        ? "bg-red-100 text-red-700"
                                                        : "bg-yellow-100 text-yellow-700"
                                                }`}
                                        >
                                            {p.status}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </Card>
        </div>
    );
}
