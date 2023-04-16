import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeOnly'
})
export class TimeOnlyPipe implements PipeTransform {

  transform(value: string): string {{
    const date = new Date(value);

      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

}
}