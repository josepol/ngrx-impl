import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter/counter.service';
import { Observable } from 'rxjs';
import { ICounterReducerState } from './counter.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  count$: Observable<number>;

  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit(): void {
    this.count$ = this.counterService.getWithSelector();
  }

  increment() {
    this.counterService.increment();
  }

  decrement() {
    this.counterService.decrement();
  }

  reset() {
    this.counterService.reset();
  }


}
