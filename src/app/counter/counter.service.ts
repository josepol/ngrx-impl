import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Increment, Decrement, Reset } from '../counter.actions';
import { AppState, counterSelector } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor(
    private store: Store<AppState>
  ) { }

  get() {
    return this.store.pipe(select(state => state.counterState.counter));
  }

  getWithSelector() {
    return this.store.pipe(select(counterSelector));
  }

  increment() {
    this.store.dispatch(new Increment());
  }

  decrement() {
    this.store.dispatch(new Decrement());
  }

  reset() {
    this.store.dispatch(new Reset());
  }
}
