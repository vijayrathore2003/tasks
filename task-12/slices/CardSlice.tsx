import type { StateCreator } from "zustand";
import type { BoardStore, CardSliceType } from "../types/types";

export const createCardSlice: StateCreator<
  BoardStore,          
  [],                  
  [],                  
  CardSliceType           
> = (set, get) => ({

    cards: {}, 

    addCard : (listId: string, text: string) => {
        const length = Object.keys(get().cards).length
        const cardId = (length + 1).toString();
        set((state) => ({
            cards: {
                ...state.cards, 
                [cardId] : {id: cardId, text:text }
            }, 
            lists: {
                ...state.lists, 
                [listId]: {
                    ...state.lists[listId], 
                    cardIds: [...state.lists[listId].cardIds, cardId]
                } 
            }
        }))
    }
})