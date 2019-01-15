import { Action } from "@ngrx/store";

export enum ActionTypes {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    RESET = 'RESET'
}

export class Increment implements Action {
    readonly type = ActionTypes.INCREMENT;
}

export class Decrement implements Action {
    readonly type = ActionTypes.DECREMENT;
}

export class Reset implements Action {
    readonly type = ActionTypes.RESET;
}
