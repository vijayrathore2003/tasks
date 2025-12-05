import { useCallback, useMemo, useRef, useState } from "react";
import FilterButton from "./components/FilterButton";
import TaskList from './components/TaskList'
import type { Filter, Priority, PriorityFilter, Task } from "./types/types";
import Header from "./components/Header";


export default function Task2() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const titleRef = useRef<HTMLInputElement>(null);
  const [newPriority, setNewPriority] = useState<Priority>("Low");
  const [filter, setFilter] = useState<Filter>("ALL");
  const [priorityFilter, setPriorityFilter] = useState<PriorityFilter>("ALL");

  function addTask() {
    const newTitle = titleRef.current?.value || ""
    if (!newTitle.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      title: newTitle,
      completed: false,
      priority: newPriority,
    };
    setTasks([newTask, ...tasks]);
    setNewPriority("Low");
    console.log("tasks : ", [newTask, ...tasks])
  }

  const toggleCompleted = useCallback((id: number) => {
    setTasks(
      (prevTasks) => prevTasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }, [])

  const deleteTask = useCallback((id: number) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));
  }, [])

  const filteredTasks = useMemo(() =>
    tasks.filter((t) => {
      if (filter === "ACTIVE" && t.completed) return false;
      if (filter === "COMPLETED" && !t.completed) return false;
      if (priorityFilter !== "ALL" && t.priority !== priorityFilter) return false;
      return true;
    })
    , [tasks, filter, priorityFilter])


  const setCompletedFilter = useCallback(() => {
    setFilter("COMPLETED");
  }, [setFilter]);

  const setAllFilter = useCallback(() => {
    setFilter("ALL");
  }, [setFilter]);

  const setActiveFilter = useCallback(() => {
    setFilter("ACTIVE");
  }, [setFilter]);

  const setPriorityAll = useCallback(() => {
    setPriorityFilter("ALL");
  }, [setPriorityFilter]);

  const setPriorityLow = useCallback(() => {
    setPriorityFilter("Low");
  }, [setPriorityFilter]);

  const setPriorityMedium = useCallback(() => {
    setPriorityFilter("Medium");
  }, [setPriorityFilter]);

  const setPriorityHigh = useCallback(() => {
    setPriorityFilter("High");
  }, [setPriorityFilter]);

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex justify-center">
      <div className="w-full max-w-6xl flex gap-6">

        {/* LEFT SIDE - TASK FORM */}
        <div className="bg-white p-6 rounded-2xl shadow h-fit">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Task</h2>

          <input
            ref={titleRef}
            placeholder="Task title..."
            className="w-full p-3 border rounded-xl mb-3 outline-none"
          />

          <select
            value={newPriority}
            onChange={(e) => setNewPriority(e.target.value as any)}
            className="w-full p-3 border rounded-xl mb-4 focus:ring focus:ring-blue-300 outline-none"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>

          <button
            onClick={addTask}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow"
          >
            Add Task
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full">
          <Header />

          {/* Top Filters */}
          <div className="flex flex-wrap gap-3 mb-5">
            <FilterButton
              label="All"
              active={filter === "ALL"}
              onClick={setAllFilter}
            />
            <FilterButton
              label="Active"
              active={filter === "ACTIVE"}
              onClick={setActiveFilter}
            />
            <FilterButton
              label="Completed"
              active={filter === "COMPLETED"}
              onClick={setCompletedFilter}
            />
          </div>

          {/* Priority Filters */}
          <div className="flex flex-wrap gap-3 mb-6">
            <FilterButton
              label="All"
              active={priorityFilter === "ALL"}
              onClick={setPriorityAll}
            />
            <FilterButton
              label="Low"
              active={priorityFilter === "Low"}
              onClick={setPriorityLow}
            />
            <FilterButton
              label="Medium"
              active={priorityFilter === "Medium"}
              onClick={setPriorityMedium}
            />
            <FilterButton
              label="High"
              active={priorityFilter === "High"}
              onClick={setPriorityHigh}
            />
          </div>

          <TaskList
            tasks={filteredTasks}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
          />
        </div>

      </div>
    </div>
  );
}









