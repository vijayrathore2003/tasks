import List from "./List";
// import type { ListType } from "../types/types";
import { useBoardStore } from "../store/store";

import {
  DragDropContext,
  Draggable,
  Droppable,
  type DropResult,
} from "@hello-pangea/dnd";

function Board() {
  const { lists, updateListTask } = useBoardStore();

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const originalIndex = source.index;
    const newIndex = destination.index;

    const originalColIndex = parseInt(source.droppableId)-1;
    const newColIndex = parseInt(destination.droppableId)-1;

    // dropped within same list
    // reorder the tasks array
    if(originalColIndex === newColIndex){
      const originalTasks = [...lists[originalColIndex].tasks]
      const temp = originalTasks[originalIndex]
      originalTasks[originalIndex] = originalTasks[newIndex]
      originalTasks[newIndex] = temp
      updateListTask(originalTasks, lists[originalColIndex].id)
      return;
    }else {
      // moved to different list
      const sourceTasks = [...lists[originalColIndex].tasks];
      let destTasks = [...lists[newColIndex].tasks];
      
      const taskOnHand = sourceTasks.splice(originalIndex,1);
      updateListTask(sourceTasks, lists[originalColIndex].id)

      destTasks = destTasks.slice(0, newIndex).concat(taskOnHand).concat(destTasks.slice(newIndex));

      updateListTask(destTasks, lists[newColIndex].id)
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="w-full h-screen flex py-5 bg-white">
        {Object.entries(lists).map(([listId, list], idx) => (
          <List list={list} />
        ))}
      </div>
    </DragDropContext>
  );
}

export default Board;
