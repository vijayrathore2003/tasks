import React from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  priority: "Low" | "Medium" | "High";
};

type TaskItemProps = {
  task: Task;
  toggleCompleted: (id: number) => void;
  deleteTask: (id: number) => void;
};

function TaskItem({ task, toggleCompleted, deleteTask }: TaskItemProps) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow flex justify-between items-center border">
      <div>
        <div className="font-semibold text-gray-800 text-lg">{task.title}</div>
        <div className="text-sm text-gray-500">Priority: {task.priority}</div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => toggleCompleted(task.id)}
          className={`px-3 py-2 rounded-xl border font-medium shadow-sm
            ${
              task.completed
                ? "bg-green-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="px-3 py-2 rounded-xl border bg-red-500 text-white hover:bg-red-600 font-medium shadow"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default React.memo(TaskItem);