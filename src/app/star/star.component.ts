import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input() rating: number = 0;
  @Output() outputRating = new EventEmitter<string>();
  starWidth: number = 0;
  constructor() {
    this.rating = 0;
    this.starWidth = (this.rating * 90) / 5;
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.starWidth = (this.rating * 90) / 5;
  }
  viewStarRating()
  {
    this.outputRating.emit(`Đánh giá sản phẩm: ${this.rating}`);
  }
}

