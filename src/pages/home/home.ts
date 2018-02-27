import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// 测试页面 - 跳转 - 页面类
import { TestPage } from '../test/test';
// 测试provider（angular中的service）
import { TestServiceProvider } from "../../providers/test-service/test-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public tsp: TestServiceProvider
  ) {

  }
  goTestPage() {
    this.navCtrl.push(TestPage);
  }
}
