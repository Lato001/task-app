import type { Task } from "../Types/Task";


export const MockTasks: Task[] = [
  {
    _id: "1",
    header: "Configurar proyecto",
    body: "Inicializar Vite con React, TypeScript y Tailwind CSS",
    footer: "Prior_idad alta",
    createdAt: new Date("2026-05-20"),
    status: "pending",
  },
  {
    _id: "2",
    header: "Disenar tema",
    body: "Implementar modo claro y oscuro con acento violeta",
    footer: "UI/UX",
    createdAt: new Date("2026-05-21"),
    status: "pending",
  },
  {
    _id: "3",
    header: "Maquetar homepage",
    body: "Crear las 3 secciones: carrusel, pendientes y completadas",
    footer: "Frontend",
    createdAt: new Date("2026-05-22"),
    status: "attended",
  },
  {
    _id: "4",
    header: "Conectar backend",
    body: "Integrar API REST con Express y MongoDB",
    footer: "Pendiente de definir",
    createdAt: new Date("2026-05-23"),
    status: "attended",
  },
  {
    _id: "5",
    header: "Autenticacion",
    body: "Login y registro de usuarios con JWT",
    footer: "Segur_idad",
    createdAt: new Date("2026-05-23"),
    status: "attended",
  },
  {
    _id: "6",
    header: "Desplegar en produccion",
    body: "Subir frontend a Vercel y backend a Railway",
    footer: "DevOps",
    createdAt: new Date("2026-05-24"),
    status: "completed",
  },
]
