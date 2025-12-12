import { useState } from "react";
import { useBoardStore } from "../store/store";

type propType = {
  listId: string;
};

function AddCard({ listId }: propType) {
  const [openInput, setOpenInput] = useState(false);
  const [text, setText] = useState("");
  const { addTask } = useBoardStore();

  const handleAddCard = (e: any) => {
    e.stopPropagation();
    if(text.trim() === "") return alert("Please enter some text")
    addTask(listId, text);
    setOpenInput(false);
    setText("")
    console.log("handle add card");
  };

  return (
    <div
      className={`flex flex-col gap-2 mt-5 justify-start   hover:cursor-pointer p-3 rounded-lg ${openInput ? 'bg-white' : 'hover:bg-gray-200'}`}
      onClick={() => setOpenInput(true)}
    >
      <div className="flex items-center h-fit gap-2">
        <div className="text-xl">+</div>
        <div>Add a Card</div>
      </div>

      {openInput && (
        <div>
          <input
            type="text"
            className="border p-1 w-full rounded-sm"
            placeholder="Enter some text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex items-center gap-5 mt-3">
            <button
              className="bg-blue-500 hover:cursor-pointer p-2 rounded-sm text-white font-bold hover:bg-blue-700"
              onClick={handleAddCard}
            >
              Add Card
            </button>
            <button
            className="hover:bg-gray-200 p-2 hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setOpenInput(false);
              }}
            >
              {" "}
              Cancel{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddCard;
