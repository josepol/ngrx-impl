import { ICounterReducerState, counterReducer } from "./counter.reducer";
import { ActionReducerMap, MetaReducer, ActionReducer, createSelector } from "@ngrx/store";
import { environment } from "src/environments/environment";

export interface AppState {
    counterState: ICounterReducerState
}

export const reducers: ActionReducerMap<AppState> = {
    counterState: counterReducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return function(state: AppState, action: any): AppState {
        console.log('state', state);
        console.log('action', action);
        return reducer(state, action);
    };
}

export const counterSelector = createSelector(
    (state: AppState) => state.counterState,
    (state: ICounterReducerState) => state.counter
);
  
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : []; 