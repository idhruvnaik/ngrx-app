import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from 'src/app/shared/store/counter.action';

@Component({
  selector: 'app-custom-increment',
  templateUrl: './custom-increment.component.html',
  styleUrls: ['./custom-increment.component.scss'],
})
export class CustomIncrementComponent {
  constructor(private store: Store<{ counter: { counter: number } }>) {}
  counterInput!: number;
  actionType = 'add';

  Onincrement() {
    this.store.dispatch(
      customIncrement({ value: +this.counterInput, action: this.actionType })
    );
  }
}
