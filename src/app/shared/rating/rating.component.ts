import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {

  rates: number[] = [1, 2, 3, 4, 5];

  rate = 0;

  tempRate: number;

  @Output() rated = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  setRate(star: number) {
    this.rate = star;
    this.tempRate = undefined;
    this.rated.emit(this.rate);
  }

  setTempRate(star: number) {
    if (this.tempRate === undefined) {
      this.tempRate = this.rate;
    }
    this.rate = star;

  }

  limparTempRate() {
    if (this.tempRate !== undefined) {
      this.rate = this.tempRate;
      this.tempRate = undefined;
    }

  }



}
