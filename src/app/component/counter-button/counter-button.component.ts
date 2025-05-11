import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  reset,
} from 'src/app/shared/store/counter.action';
import { CounterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.scss'],
})
export class CounterButtonComponent {
  constructor(private store: Store<{ counter: CounterModel }>) {}

  onIncrement() {
    this.store.dispatch(increment());
  }
  onDecrement() {
    this.store.dispatch(decrement());
  }
  onReset() {
    this.store.dispatch(reset());
  }
}
