import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EventsProvider} from "../../providers/events/events";

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: EventsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
    this.events.testApi();
  }

}
