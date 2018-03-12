import {NgModule} from '@angular/core';
import {SlideListComponent} from './slide-list/slide-list';
import {CommonModule} from "@angular/common";
// 引入ionic组件，才能在components中使用
import {IonicModule} from 'ionic-angular';

@NgModule({
  declarations: [SlideListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SlideListComponent]
})
export class ComponentsModule {
}
