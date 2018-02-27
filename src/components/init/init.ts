import { Component } from '@angular/core';

/**
 * Generated class for the InitComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'init',
  templateUrl: 'init.html'
})
export class InitComponent {

  text: string;

  constructor() {
    console.log('Hello InitComponent Component');
    this.text = '我是 src/components/init/ 的组件';
  }

}
