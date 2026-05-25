//import TaskForm from "../Components/TaskForm";
import { MockTasks } from "../data/MockTasks";
import type { Task } from "../Types/Task";
import TaskColumn from "../Components/TaskColumn";
import TaskCard from "../Components/TaskCard";
import Header from "../Components/Header";
import { useState } from "react";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import TaskForm from "../Components/TaskForm";
export default function Home() {
  const initialTasks = MockTasks;

  const [tasks, setTask] = useState<Task[]>(initialTasks);
  const [isOpenTaskModal, setOpenTaskModal] = useState(false);

  const filteredTaskByStatus = (status: string) => {
    const filteredTasks = tasks.filter((t) => t.status === status);
    return filteredTasks;
  };
  const handleChangeStatus = (id: string, newStatus: Task["status"]) => {
    setTask((prev) =>
      prev.map((task) =>
        task._id === id ? { ...task, status: newStatus } : task,
      ),
    );
  };

  return (
    <>
      {
        //<TaskForm />;}
      }
      <Header title="Tasks App">
        <Button
          text="Create Task"
          onClick={() => setOpenTaskModal(true)}
        ></Button>
      </Header>

      <section className="flex flex-col sm:flex-row gap-6">
        <TaskColumn
          title="Pending"
          count={filteredTaskByStatus("pending").length}
        >
          {filteredTaskByStatus("pending").map((task) => (
            <TaskCard
              key={task._id}
              title={task.header}
              description={task.body}
              status={task.status}
            >
              <Button
                text="Change Status"
                onClick={() => handleChangeStatus(task._id, "completed")}
              ></Button>
            </TaskCard>
          ))}
        </TaskColumn>

        <TaskColumn
          title="Completed"
          count={filteredTaskByStatus("completed").length}
        >
          {filteredTaskByStatus("completed").map((task) => (
            <div>
              <TaskCard
                key={task._id}
                title={task.header}
                description={task.body}
                status={task.status}
              >
                <Button
                  text="Change Status"
                  onClick={() => handleChangeStatus(task._id, "pending")}
                ></Button>
              </TaskCard>
            </div>
          ))}
        </TaskColumn>
      </section>
      <Modal isOpen={isOpenTaskModal} onClose={() => setOpenTaskModal(false)}>
        <TaskForm></TaskForm>
      </Modal>
    </>
  );
}
