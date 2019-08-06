import { Component } from '@angular/core';

@Component({
    templateUrl: './rating-bootstrap.component.html',
    styles: [`
    .star {
      position: relative;
      display: inline-block;
      font-size: 3rem;
      color: #d3d3d3;
    }
    .full {
      color: red;
    }
    .half {
      position: absolute;
      display: inline-block;
      overflow: hidden;
      color: red;
    }
  `]
})
export class RatingBootstrapComponent {
    pageTitle = 'Rating Bootstrap';

    basicCurrentRate = 5;

    heartsCurrentRate = 0;
    heartsRating = 0;

    setHeartsRating() {
        if (!this.heartsRating || isNaN(this.heartsRating)) {
            this.heartsCurrentRate = 0;
            return;
        }

        let heartsCurrentRate = this.heartsRating < 0 ? 0 : this.heartsRating;
        heartsCurrentRate = heartsCurrentRate > 5 ? 5 : heartsCurrentRate;

        this.heartsCurrentRate = heartsCurrentRate;
    }
}
