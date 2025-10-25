export interface Patient {
    id: string;
    name: string;
    birth: string;
    lastVisit: string;
}

export const patientsData: Patient[] = Array.from({ length: 50 }).map((_, i) => ({
    id: `PT-${String(i + 1).padStart(3, "0")}`,
    name: `Paciente ${i + 1}`,
    birth: `19${(70 + (i % 30)).toString().slice(-2)}-0${(i % 9) + 1}-15`,
    lastVisit: `2025-01-${String((i % 28) + 1).padStart(2, "0")}`,
}));