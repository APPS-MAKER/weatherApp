import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SearchCityPage} from "../search-city/search-city";
import {LocationProvider} from "../../providers/location/location";

/**
 * Generated class for the CityCtrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

class CityInfo {
  city: string;
  code: number;
}

class ListObj {
  // 主标题
  title: string;
  // 副标题
  subtitle?: string;
  // 左侧图标
  icon?: string;
  // 是否选中
  selected: boolean;
  // 原始数据
  metaData: any
}

@Component({
  selector: 'page-city-ctr',
  templateUrl: 'city-ctr.html',
})
export class CityCtrPage {
  // public historyCitys: CityInfo[];
  public IPCityInfo: CityInfo;
  public listObj: ListObj[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public location: LocationProvider
  ) {
  }

  ionViewDidLoad() {
  }

  // 进入页面
  ionViewWillEnter() {
    console.log('enter');
    this.setListObj();
    this.IPCityInfo = JSON.parse(localStorage.getItem('IPCityInfo'));
    console.log(this.IPCityInfo);
  }

  setListObj() {
    const historyCitys = this.location.getHistoryCity();
    // reset
    this.listObj = [];
    this.location.getCurrentLocationInfo().then(res => {
      historyCitys.map(item => {
        this.listObj.push({
          title: item.city,
          selected: res['city'] === item.city,
          metaData: item
        })
      });
    }).catch(err => {
      console.log(err);
    });
  }



  goSearchCityPage() {
    this.navCtrl.push(SearchCityPage);
  }

  doRefresh(refresher) {
    this.setListObj();
    setTimeout(() => {
      refresher.complete();
    }, 1000);
  }

  // 处理删除城市记录
  handelDelCity(msg) {
    this.location.delHistoryCity(msg);
    this.setListObj();
  }

  // 处理选择(切换)城市
  handelSelectCity(msg) {
    this.location.selectHistoryCity(msg);
    this.setListObj();
  }
}
