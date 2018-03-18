import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public user: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.user.testApi();
  }

}
