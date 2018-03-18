import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LocationProvider} from "../../providers/location/location";
import {HomePage} from "../home/home";

/**
 * Generated class for the SearchCityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-search-city',
  templateUrl: 'search-city.html',
})
export class SearchCityPage {

  public searchRes: string[];
  public keyWord: string;

  public hotCitys: [string] = [
    '上海',
    '北京'
  ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public location: LocationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchCityPage');
  }

  searchCity() {
    if (!this.keyWord) {
      return;
    }
    this.location.searchCity(this.keyWord).subscribe(res => {
      console.log(res);
      if(res.state === 200){
        alert(res.msg);
        this.searchRes = res.data;
      } else {
        alert(res.msg);
        console.log(res.err);
      }
    });
  }

  // 选择城市
  selectCity(name: string) {
    this.location.setSelectCity(name).then((data) => {
      alert('设置成功');
      this.navCtrl.push(HomePage);
    }).catch((err) => {
      console.log(err);
    })
  }
}
