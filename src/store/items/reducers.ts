import {ItemTypes, ADD_ITEM, DELETE_ITEM, ItemState} from './types'

const initialState: ItemState = {
    items: [
        {
            id: 0,
            name: 'Thing to do'
        }
    ]
};

export function itemReducer (state = initialState, action: ItemTypes) {
    switch(action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(m => m.id !== action.payload)
            };
        default:
            return state;
    }
}