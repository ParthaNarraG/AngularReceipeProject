import { ingredient } from 'src/app/shared/ingredient.model';
import * as shoppingListAction from "../store/shopping-list.action";
import { ActionReducerMap } from '@ngrx/store';
import { Action } from '@ngrx/store';

export interface AppState{
    ingredient:ingredient[]
}

export const initialState:AppState={
    ingredient:[new ingredient("Apples",20),new ingredient("tomato",25)]
}

export function reducers(state = initialState, action:shoppingListAction.AddIngredient):AppState {
    console.log('hi');
    switch (action.type) {
        case shoppingListAction.ADD_INGREDIENT:
            return {
                ...state,
               ingredient:[...state.ingredient,action.payload]
            }
        default:
            return state;
    }
}


