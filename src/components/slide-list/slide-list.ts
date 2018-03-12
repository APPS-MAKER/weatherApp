import {Component, EventEmitter, Input, Output} from '@angular/core';

/**
 * Generated class for the SlideListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

class ListObj {
  // 主标题
  title: string;
  // 副标题 可选
  subtitle?: string;
  // 左侧图标 可选
  icon?: string;
  // 是否选中
  selected: boolean;
  // 原始数据
  metaData: any
}

@Component({
  selector: 'slide-list',
  templateUrl: 'slide-list.html'
})
export class SlideListComponent {

  // 输入数据
  @Input() private recivedData: ListObj[];

  // 输出 删除事件
  @Output() public onDel: EventEmitter<any> = new EventEmitter();

  // 输出 选择事件
  @Output() public onSelect: EventEmitter<any> = new EventEmitter();

  constructor() {
    console.log('Hello SlideListComponent Component');
  }

  // output一个事件 发送要删除的item
  delItem(item) {
    if (item.selected) {
      return alert('无法删除已选中的项');
    }
    this.onDel.emit(item.metaData);
  }

  selectItem(item) {
    if (item.selected) {
      return;
    }
    this.onSelect.emit(item.metaData);
  }

}
