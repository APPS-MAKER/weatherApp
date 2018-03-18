import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  testApi() {
    // 登录时收集信息记录
    /*this.http.post('http://localhost:3000/api/user/login', {
      account: 'testAccountByXING',
      machineCode: '66666666666666666666666'
    }).subscribe(data => {
      console.log(data);
    });*/

    // 检测登录是否有效（是否在其它设备登录）
    /*this.http.get('http://localhost:3000/api/user/check', {
      params: {
        account: 'testAccountByXING',
        machineCode: 'asdfasdfasf'
      }
    }).subscribe(data => {
      console.log(data);
    });*/
  }
}
