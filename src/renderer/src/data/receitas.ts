export interface Receita {
  id: number;
  paciente: string;
  data: string; // ISO yyyy-mm-dd
  status: "Emitida" | "Pendente" | "Cancelada";
}

export const receitasData: Receita[] = [
  { id: 101, paciente: "João Silva", data: "2025-01-12", status: "Emitida" },
  { id: 102, paciente: "Maria Oliveira", data: "2025-01-10", status: "Pendente" },
  { id: 103, paciente: "Carlos Pereira", data: "2025-01-09", status: "Emitida" },
  { id: 104, paciente: "Ana Souza", data: "2025-01-08", status: "Cancelada" },
  { id: 105, paciente: "Lucas Almeida", data: "2025-01-07", status: "Emitida" },
  { id: 106, paciente: "Fernanda Lima", data: "2025-01-06", status: "Pendente" },
  { id: 107, paciente: "Beatriz Rocha", data: "2025-01-04", status: "Emitida" },
  { id: 108, paciente: "Paulo Silva", data: "2025-01-03", status: "Emitida" },
  { id: 109, paciente: "Marcos Paulo", data: "2024-12-30", status: "Cancelada" },
];
