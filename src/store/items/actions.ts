import {ItemTypes, ADD_ITEM, DELETE_ITEM, Item} from './types';

export function deleteItem (id: number): ItemTypes {
    return {
        type: DELETE_ITEM,
        payload: id
    }
};

export function addItem (item: Item): ItemTypes {
    return {
        type: ADD_ITEM,
        payload: item
    }
};