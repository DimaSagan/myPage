import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanTransform',
  standalone: true
})
export class BooleanTransformPipe implements PipeTransform {

  transform(value: string): boolean {
    if (value === "true") {
      return true
    } else {
      return false
    }
  }

}
