import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss'],
})
export class CounterDisplayComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: Number } }>) {}

  counterDisplay!: Number;
  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      this.counterDisplay = data.counter;
    });
  }
}
