import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// Pages
import { MyCalendarsReceivedPage } from '../pages/myCalendarsReceived/myCalendarsReceived';
import { MyCalendarsSendPage } from '../pages/myCalendarsSend/myCalendarsSend';
import { CalendarPage } from '../pages/calendar/calendar';
import { CalendarCreationOnePage } from '../pages/calendarCreationOne/calendarCreationOne';
import { CalendarCreationTwoPage } from '../pages/calendarCreationTwo/calendarCreationTwo';
import { CalendarCreationThreePage } from '../pages/calendarCreationThree/calendarCreationThree';

// API
import { Service } from '../services/soonly.service';
import {IonicStorageModule} from "@ionic/storage";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    MyCalendarsReceivedPage,
    MyCalendarsSendPage,
    CalendarPage,
    CalendarCreationOnePage,
    CalendarCreationTwoPage,
    CalendarCreationThreePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyCalendarsReceivedPage,
    MyCalendarsSendPage,
    CalendarPage,
    CalendarCreationOnePage,
    CalendarCreationTwoPage,
    CalendarCreationThreePage
  ],
  providers: [
    Service,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
