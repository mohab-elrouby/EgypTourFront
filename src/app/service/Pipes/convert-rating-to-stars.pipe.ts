import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertRatingToStars'
})
export class ConvertRatingToStarsPipe implements PipeTransform {
  startIcon:string = '<i class="fa-solid fa-star text-white bg-danger p-1 mx-1  fs-6 rounded-1"></i>';
  stars:string = '';

  transform(rating: number, ...args: unknown[]): string {
    for(let i = 0 ; i<rating ; i++) {
      this.stars += this.startIcon;
  }
  return this.stars;

  }
}
