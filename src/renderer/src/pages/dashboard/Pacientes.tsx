// src/pages/Pacientes.tsx
import { useState, useMemo } from "react";
import {
    Button,
    Card,
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeadCell,
    TableRow,
    TextInput,
} from "flowbite-react";
import { Search, UserPlus } from "lucide-react";
import { patientsData } from "@renderer/data/patients";


export default function Pacientes() {
    const [search, setSearch] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const pageSize = 15;

    // proteção: se patientsData for undefined, evita quebrar
    const allPatients = Array.isArray(patientsData) ? patientsData : [];

    const filteredPatients = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return allPatients;
        return allPatients.filter((p) => p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q));
    }, [search, allPatients]);

    const totalPages = Math.max(1, Math.ceil(filteredPatients.length / pageSize));
    const visiblePatients = filteredPatients.slice((page - 1) * pageSize, page * pageSize);

    // garantir que a página atual esteja dentro do intervalo quando a lista mudar
    if (page > totalPages) setPage(totalPages);

    return (
        <div className="flex flex-col h-full space-y-6 animate-fade-in">
            {/* Cabeçalho */}
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h1 className="text-2xl font-bold">Pacientes</h1>
                    <h3>Gerencie e adicione novos pacientes para atendimento.</h3>
                </div>

                <Button color="primary" pill>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Novo Paciente
                </Button>
            </div>

            {/* Busca */}
            <Card className="p-4">
                <TextInput
                    icon={Search}
                    placeholder="Buscar paciente pelo nome ou ID..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                    }}
                    className="w-full"
                />
            </Card>

            {/* Tabela ocupando o restante da tela */}
            <Card className="flex flex-col flex-1 p-0 overflow-hidden">
                <div className="overflow-x-auto overflow-y-auto flex-1">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableHeadCell>ID</TableHeadCell>
                                <TableHeadCell>Nome</TableHeadCell>
                                <TableHeadCell>Nascimento</TableHeadCell>
                                <TableHeadCell>Última Consulta</TableHeadCell>
                                <TableHeadCell>Ações</TableHeadCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {visiblePatients.length > 0 ? (
                                visiblePatients.map((p) => (
                                    <TableRow
                                        key={p.id}
                                        className="hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                                    >
                                        <TableCell className="font-medium">{p.id}</TableCell>
                                        <TableCell>{p.name}</TableCell>
                                        <TableCell className="text-gray-500">{p.birth}</TableCell>
                                        <TableCell className="text-gray-500">{p.lastVisit}</TableCell>
                                        <TableCell>
                                            <Button size="xs" color="light">Ver</Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center text-gray-500 py-6">
                                        Nenhum paciente encontrado.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Paginação */}
                <div className="flex justify-center py-4 border-t border-gray-200 dark:border-gray-700">
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onPageChange={(p) => setPage(p)}
                        showIcons
                    />
                </div>
            </Card>
        </div>
    );
}
