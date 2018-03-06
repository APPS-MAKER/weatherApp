import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
// 测试页面 - 跳转 - 页面类
import {TestPage} from '../test/test';
// 测试provider（angular中的service）
import {TestServiceProvider} from "../../providers/test-service/test-service";

import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  window = window
  constructor(public navCtrl: NavController,
              public tsp: TestServiceProvider,
              public translateService: TranslateService) {

  }

  ionViewDidLoad() {
    // 测试HTTP服务
    // this.tsp.testHttp();
    this.tsp.testWeather();
    // 多语言翻译
    this.translateService.addLangs(["zh", "en"]);
    this.translateService.setDefaultLang("zh");
    let browserLang = this.translateService.getBrowserLang();
    console.log(browserLang);
    // 设置为en才能看到效果
    // browserLang = 'en';
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }

  goTestPage() {
    this.navCtrl.push(TestPage);
  }

}
