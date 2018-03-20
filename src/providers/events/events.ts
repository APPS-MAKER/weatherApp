import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the EventsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello EventsProvider Provider');
  }

  testApi() {
    /*console.log('新增记录');
    // 新增事项接口 demo
    this.http.post('http://weather.ngxinglearn.xin/api/events/add', {
      username: 'testAddAPI',
      context: 'testAddAPI',
      time: '2018-03-16',
      canNotice: 0
    }).subscribe(data => {
      console.log(data);
    });*/

    /*console.log('查询ID为2的记录');
    // 查询事项接口demo 由于typescript，需要参数为字符型
    this.http.get('http://weather.ngxinglearn.xin/api/events/search', {
      params: {
        id: '2'
      }
    }).subscribe(data => {
      console.log(data);
    });*/

    /*console.log('查询时间段内记录（最后编辑时间）');
    this.http.get('http://weather.ngxinglearn.xin/api/events/search', {
      params: {
        start: '2018-03-13 00:00:00',
        end: '2018-03-16 23:59:59'
      }
    }).subscribe(data => {
      console.log(data);
    });*/

    /*console.log('删除第7条');
    // 删除事项接口demo 参数为id值
    this.http.delete('http://weather.ngxinglearn.xin/api/events/del', {
      params: {
        id: '7'
      }
    }).subscribe(data => {
      console.log(data);
    });*/

    /*console.log('修改第二条');
    // 修改事项接口demo
    this.http.put('http://weather.ngxinglearn.xin/api/events/edit', {
      id: 2,
      username: 'EDITER',
      context: 'EDIT-AT-2018-3-17',
      time: '2018-03-16',
      canNotice: 0
    }).subscribe(data => {
      console.log(data);
    });*/
  }
}
