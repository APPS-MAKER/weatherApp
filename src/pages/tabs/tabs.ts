import { Component } from '@angular/core';

import { EventsPage } from '../events/events';
import { UserPage } from '../user/user';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  eventRoot = EventsPage;
  userRoot = UserPage;

  constructor() {

  }
}
