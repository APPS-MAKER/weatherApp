import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TestPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'testPipe',
})
export class TestPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number, ...args) {
    return value/2;
  }
}
