import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateDsc'
})
export class AbbreviateDescription implements PipeTransform {
  transform(text: string, paramIn: number): string {
    if (text.length > paramIn) {
      return text.substr(0, 15) + '...';
    }

    return text;
  }
}
