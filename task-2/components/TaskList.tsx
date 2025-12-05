import React from "react";
import TaskItem from "./TaskItem";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  priority: "Low" | "Medium" | "High";
};

type TaskListProps = {
  tasks: Task[];
  toggleCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
};

function TaskList({ tasks, toggleCompleted, deleteTask }: TaskListProps) {
  if (tasks.length === 0)
    return <div className="text-center text-gray-500 mt-6">No tasks found</div>;

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleCompleted={toggleCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default React.memo(TaskList);

