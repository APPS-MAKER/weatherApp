import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/RX';

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

class CityInfo {
  city: string;
  code: number
}

@Injectable()
export class LocationProvider {

  constructor(public http: HttpClient) {
    // 生成时重置IP定位信息
  }

  getHistoryCity(): CityInfo[] {
    return JSON.parse(localStorage.getItem('historyCityInfo')) || [];
  }

  delHistoryCity(cityInfo: CityInfo) {
    let nowHistory = this.getHistoryCity();
    let filterArr = nowHistory.filter(item => item.city !== cityInfo.city);
    localStorage.setItem('historyCityInfo', JSON.stringify(filterArr));
    // return filterArr;
  }

  selectHistoryCity(cityInfo: CityInfo) {
    localStorage.setItem('localCityInfo', JSON.stringify(cityInfo));
  }

  setStorage(cityInfo: CityInfo) {
    localStorage.setItem('localCityInfo', JSON.stringify(cityInfo));
    const history = this.getHistoryCity();
    let hasSame = history.filter(item => item.city === cityInfo.city);
    if (!hasSame.length) {
      history.push(cityInfo);
      localStorage.setItem('historyCityInfo', JSON.stringify(history));
    }
  }

  // 在localStorage中设置IP定位信息，用于在城市管理页面显示及切换
  setIPLocation() {
    return new Promise((resolve, reject) => {
      this.http.get('http://api.help.bj.cn/apis/ip').subscribe((res) => {
        if (res['data']['city']) {
          const info = {
            city: res['data']['city'],
            code: res['data']['weathercode']
          };
          this.setStorage(info);
          console.log(info);
          localStorage.setItem('IPCityInfo', JSON.stringify(info));
          resolve(info);
        } else {
          reject('没有找到IP定位信息');
        }
      })
    })
  }

  // 订阅? - 当前定位信息
  getCurrentLocationInfo() {
    return new Promise((resolve, reject) => {
      const localCityInfo = localStorage.getItem('localCityInfo');
      if (!localCityInfo) {
        console.log('没有本地记录，读取IP');
        this.setIPLocation().then(res => {
          resolve(res);
        }).catch(err => {
          reject(err);
        })
      } else {
        console.log('有本地记录');
        resolve(JSON.parse(localCityInfo));
      }
    });
  }

  // 搜索城市  关键字-字符串       返回值-由字符串组成的数组
  searchCity(keyword: string): Observable<any> {
    return this.http.get('http://localhost:3000/api/citySearch', {
      params: {
        keyword: keyword
      }
    });
  }

  setSelectCity(name: string) {
    // 返回一个Promise？
    return new Promise((resolve, reject) => {
      this.getCodeByName(name).then((data) => {
        const info = {
          city: data['city'],
          code: data['weathercode'],
        };
        this.setStorage(info);
        // data.seted = true;
        resolve(data);
      }).catch((err) => {
        reject(err)
      })
    })
  }

  getCodeByName(name: string): any {
    // 返回一个promise ？
    return new Promise((resolve, reject) => {
      // 尝试获取XML
      try {
        // API获取XML数据
        this.http.get('http://localhost:3000/api/cityCodeXML').subscribe(data => {
          // 转换为dom格式
          const XMLDom = (new DOMParser()).parseFromString(data['data'], "text/xml");
          // 根据节点名搜索获得天气代码
          let queryDom = XMLDom.querySelectorAll(`county[name='${name}']`)[0];
          // 没有找到 reject
          if (!queryDom) {
            reject('未找到相关城市天气代码，请确认城市名称是否错误');
            return;
          }
          const code = queryDom.getAttribute("weatherCode");
          // 找到resolve 返回信息对象
          resolve({
            city: name,
            weathercode: code
          })
        });
      } catch (err) {
        // 捕获代码错误返回reject
        reject('代码内部错误');
      }
    });
  }

}
