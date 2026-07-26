import TaskCard from "./TaskCard";

function TaskList({ tasks, refreshTasks }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          refreshTasks={refreshTasks}
        />
      ))}
    </>
  );
}

export default TaskList;