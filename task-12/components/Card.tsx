import type { Task } from "../types/types";

import { Draggable, DraggableStateSnapshot, type DraggableProvided } from "@hello-pangea/dnd";

type propType = {
  cardData: Task;
  provided: DraggableProvided;
  transition: DraggableStateSnapshot
};

function Card({ cardData, provided, transition }: propType) {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className={`flex flex-col gap-2 bg-white justify-start hover:bg-gray-200  hover:cursor-pointer p-3 rounded-lg ${transition.isDragging ? '"rotate-6 shadow-xl"' : ''}`}
    >
      <div>
        <h6 className="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
          {cardData.title}
        </h6>
      </div>
    </div>
  );
}

export default Card;
