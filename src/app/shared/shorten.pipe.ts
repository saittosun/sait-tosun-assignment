import { Pipe, PipeTransform } from '@angular/core';
import { Album } from './album.model';

@Pipe({
  name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
  // transform(value: Album[], limit: number) {
  //   if (value.length === 0) {
  //     return value;
  //   }
  //   const resultArray = [];
  //   for (const item of value) {
  //     if (item.title.length > limit) {
  //       resultArray.push(item.title.substr(0, limit) + ' ...');
  //     }
  //   }
  //   return resultArray;
  // }
  transform(value: any, limit: number) {
    if (value.length > limit) {
      return value.substr(0, limit) + ' ...'
    }
    return value;
  }
}
