import type { StateCreator } from "zustand";
import type { BoardStore, ListSlice } from "../types/types";

export const createListSlice: StateCreator<BoardStore, [], [], ListSlice> = (
  set,
  get
) => ({
  lists: {
    "1": {
      id: "1",
      title: "Todos",
      cardIds: [],
    },
    "2": {
      id: "2",
      title: "Ongoing",
      cardIds: [],
    },
    "3": {
      id: "3",
      title: "Completed",
      cardIds: [],
    },
  },
});
