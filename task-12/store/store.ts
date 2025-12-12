import { create } from "zustand";
import type { ListType, Task } from '../types/types'
import { initialData, tasks } from "../constants";
import { devtools, persist } from "zustand/middleware";

interface boardState {
    lists: ListType[];
    cards: Record<string, Task>;
    addTask: (listId: string, title: string) => void;
    updateListTask: (newTasks: string[], listId: string) => void;
}

const STORE_NAME = "board-store";

export const useBoardStore = create<boardState>()(
    persist(
        (set, get) => ({
            lists: initialData,
            cards: tasks,
            addTask: (listId: string, title: string) => {
                const newTaskId = (Object.keys(get().cards).length + 1).toString();
                set((state) => ({
                    lists: state.lists.map((listData) => {
                        if (listData.id === listId) {
                            return {
                                ...listData,
                                tasks: [...listData.tasks, newTaskId],
                            };
                        }
                        return listData;
                    }),
                    cards: {
                        ...state.cards,
                        [newTaskId]: { id: newTaskId, title },
                    },
                }));
            },
            updateListTask: (newTasks: string[], listId: string) => {
                set((state) => ({
                    lists: state.lists.map((listData) =>
                        listData.id === listId
                            ? {
                                ...listData,
                                tasks: newTasks,
                            }
                            : listData
                    ),
                }));
            },
        }),
        {
            name: STORE_NAME
        }
    )
);