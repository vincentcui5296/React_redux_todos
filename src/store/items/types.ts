export interface Item {
    id: number,
    name: string
}

export interface ItemState {
    items: Item[]
}

export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

interface AddItem {
    type: typeof ADD_ITEM,
    payload: Item
}

interface DeleteItem {
    type: typeof DELETE_ITEM,
    payload: number
}

export type ItemTypes = AddItem | DeleteItem;