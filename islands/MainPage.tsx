import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import Column from "./Column.tsx";
import AniadirTarea from "./AniadirTarea.tsx";
import { useState } from "preact/hooks";
import { signal } from "@preact/signals";

function createTask() {
}

type task = {
  id: number;
  name: string;
  state: string;
};

const MainPage: FunctionComponent = () => {
  const [
    tasks,
    setTasks,
  ] = useState<task[]>([]);

  const [
    show,
    setShow,
  ] = useState(false);

  const [
    selectedTask,
    setSelectedTask,
  ] = useState<task | null>(null);

  return (
    <div className="home">
        {selectedTask !== null  && (
           <>
            <div className="taskDetail">
                
                <h1>{selectedTask.name}</h1>
                <p>{selectedTask.state}</p>
                <button onClick={() => setSelectedTask(null)}>Cerrar</button>
            </div>
            <div className="overlay" onClick={() => setSelectedTask(null)}></div>
           </>
        )}
      <div className="ColumnsContainer">
        <button
          className="CrearColumnaButton"
          onClick={() => {
            setShow(true);
          }}
        >
          Crear Tarea
        </button>
        <Column
          name="Todo"
          tasks={tasks.filter((task) => task.state === "todo")}
          onclick={(task) => {
            setSelectedTask(task);
          }}
        />
        <Column
          name="In progress"
          tasks={tasks.filter((task) => task.state === "inprogress")}
          onclick={(task) => {
            setSelectedTask(task);
          }}
        />
        <Column
          name="In review"
          tasks={tasks.filter((task) => task.state === "inreview")}
          onclick={(task) => {
            setSelectedTask(task);
          }}
        />
        <Column
          name="Done"
          tasks={tasks.filter((task) => task.state === "done")}
          onclick={(task) => {
            setSelectedTask(task);
          }}
        />
      </div>
      {show && (
        <AniadirTarea
          onClose={() => {
            setShow(false);
          }}
          createTask={(task) => {
            setTasks([...tasks, task]);
          }}
        />
      )}
    </div>
  );
};
export default MainPage;
