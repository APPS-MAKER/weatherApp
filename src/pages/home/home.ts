import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
// 测试provider（angular中的service）
import {LocationProvider} from "../../providers/location/location";
import {TranslateService} from "@ngx-translate/core";
// 城市管理
import {CityCtrPage} from "../city-ctr/city-ctr";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  public cityInfo: any = {
    city: '正在定位中',
    code: -1
  };

  constructor(public navCtrl: NavController,
              public location: LocationProvider,
              public translateService: TranslateService) {

  }

  // 初始化加载
  ionViewDidLoad() {
    this.initSetLang();
  }

  // 进入页面
  ionViewWillEnter(){
    // 暂时 在每次页面进入时获得位置信息
    this.getLocation();
  }

  initSetLang(){
    // 多语言翻译
    this.translateService.addLangs(["zh", "en"]);
    this.translateService.setDefaultLang("zh");
    let browserLang = this.translateService.getBrowserLang();
    // 设置为en才能看到效果
    // browserLang = 'en';
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }

  // 获得地址信息
  getLocation() {
    this.location.getCurrentLocationInfo().then(res => {
      this.cityInfo = res;
    }).catch(err => {
      alert(err);
    })
  }

  goLocationPage() {
    this.navCtrl.push(CityCtrPage);
  }

}
