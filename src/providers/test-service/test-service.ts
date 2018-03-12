import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

/*
  Generated class for the TestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TestServiceProvider {

  constructor(public http: HttpClient) {
    console.log('这里是自定义的服务 = = == = == = = == ');
  }

  testHttp() {
    const url = 'http://localhost:3000/api/test';
    this.http.get(url).subscribe(data => {
      console.log(data);
    });
  }

  testWeather() {
    const url = 'http://api.help.bj.cn/apis/ip';
    this.http.get(url).subscribe(data => {
      console.log(data);
    });
  }
}
