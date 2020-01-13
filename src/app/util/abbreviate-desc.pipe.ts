import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abbreviateDsc'
})
export class AbbreviateDescription implements PipeTransform {
  transform(text: string): string {
    if (text.length > 15) {
      return text.substr(0, 15) + '...';
    }

    return text;
  }
}
