import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterModel } from 'src/app/shared/store/counter.model';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss'],
})
export class CounterDisplayComponent implements OnInit, OnDestroy {
  constructor(private store: Store<{ counter: CounterModel }>) {}

  ngOnDestroy(): void {
    // if (this.counterSubceribe) {
    //   this.counterSubceribe.unsubscribe();
    // }
  }

  counterDisplay!: Number;
  counterSubceribe!: Subscription;
  counter$!: Observable<CounterModel>;

  ngOnInit(): void {
    // this.counterSubceribe = this.store.select('counter').subscribe((data) => {
    //   this.counterDisplay = data.counter;
    // });

    this.counter$ = this.store.select('counter');
  }
}
