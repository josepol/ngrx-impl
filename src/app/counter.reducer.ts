import { Action } from '@ngrx/store';
import { ActionTypes } from './counter.actions';

export interface ICounterReducerState {
    counter: number;
}

export const initialState: ICounterReducerState = {
    counter: 0
}

export function counterReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {
                counter: state.counter + 1
            }
        case ActionTypes.DECREMENT:
            return {
                counter: state.counter - 1
            }
        case ActionTypes.RESET:
            return {
                counter: 0
            }
        default:
            return state;
    }
}