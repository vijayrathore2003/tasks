import AddCard from "./AddCard";
import type { ListType } from "../types/types";
import { useBoardStore } from "../store/store";
import Card from "./Card";

import {
  Draggable,
  Droppable,
  type DraggableProvided,
  type DroppableProvided,
} from "@hello-pangea/dnd";
import { ListTitles } from "../constants";

type propType = {
  list: ListType;
};

const getBgColor = (type: string) => {
  console.log("type: ", type)
  switch (type) {
    case ListTitles.TO_DO:
      return "bg-blue-700";
    case ListTitles.IN_PROGRESS:
      return "bg-orange-500";
    case ListTitles.DONE:
      return "bg-green-600";
    default:
      return "bg-gray-200";
  }
}

function List({ list }: propType) {
  const { cards } = useBoardStore();

  return (
    <div className="max-w-md h-fit bg-gray-100 shadow-lg rounded-2xl w-sm mx-auto">
      <div className="relative h-full flex w-96 rounded-2xl flex-col  bg-clip-border text-gray-700 shadow-md">
        <div className=" rounded-2xl ">
          <div className={`mb-4 flex items-center  justify-between ${getBgColor(list.title)} rounded-t-2xl`}>
            <h5 className="block p-3 font-sans text-xl text-white font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {list.title}
            </h5>
          </div>

          <Droppable droppableId={list.id} type="LIST">
            {(provided, transition) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`divide-y flex flex-col px-2 py-2 gap-5 divide-gray-200 ${transition.isDraggingOver ? 'bg-gray-200' : ''}`}
              >
                {list.tasks.map((cardId, idx) => (
                  <Draggable draggableId={cardId} index={idx} key={cardId}>
                    {(provided, transition) => (
                      <Card cardData={cards[cardId]} provided={provided} transition={transition} />
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}

                <AddCard listId={list.id} />
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </div>
  );
}

export default List;
