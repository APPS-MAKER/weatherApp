import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { EventsPage } from '../pages/events/events';
import { UserPage } from '../pages/user/user';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// 自定义组件引用
import { ComponentsModule } from '../components/components.module';
// 自定义页面引用
import { TestPage } from '../pages/test/test';
// 自定义管道（pipe）引用
import { PipesModule } from "../pipes/pipes.module";
// providers(service)引用
import { TestServiceProvider } from '../providers/test-service/test-service';

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    UserPage,
    HomePage,
    TabsPage,
    // 新增的页面
    TestPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    // 管道集合
    PipesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    UserPage,
    HomePage,
    TabsPage,
    // 我也不知道为什么要在两个地方都加
    TestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TestServiceProvider
  ]
})
export class AppModule {}
