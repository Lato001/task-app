import TaskCard from "../Components/TaskCard";
import TaskColumn from "../Components/TaskColumn";
import Header from "../Components/Header";
import EmblaCarousel from "../Components/Carousel";
export default function Home() {
  return (
    <div className="min-h-screen bg-muted transition-colors">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-8">
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1 h-5 rounded-full bg-accent" />
            <h2 className="text-sm font-medium text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              Todas las tareas
            </h2>
          </div>
          <EmblaCarousel />
        </section>

        <section className="flex flex-col sm:flex-row gap-6">
          <TaskColumn title="Pendientes" count={2}>
            <TaskCard
              title="Conectar backend"
              description="Integrar API REST con Express"
              status="pending"
            />
            <TaskCard
              title="Autenticacion"
              description="Login y registro de usuarios"
              status="pending"
            />
          </TaskColumn>

          <TaskColumn title="Completadas" count={3}>
            <TaskCard
              title="Configurar proyecto"
              description="Inicializar Vite con React y Tailwind"
              status="completed"
            />
            <TaskCard
              title="Disenar tema"
              description="Implementar modo claro y oscuro"
              status="completed"
            />
            <TaskCard
              title="Maquetar homepage"
              description="Crear las 3 secciones principales"
              status="completed"
            />
          </TaskColumn>
        </section>
      </main>
    </div>
  );
}
