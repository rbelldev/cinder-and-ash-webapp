import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {AuthenticationCallbackComponent} from './components/authentication-callback/authentication-callback.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {RaiderApplicationComponent} from './components/raider-application/raider-application.component';
import {RaidScheduleComponent} from './components/raid-schedule/raid-schedule.component';
import {RosterComponent} from './components/roster/roster.component';
import { RaiderApplicationStepOneComponent } from './components/raider-application/raider-application-step-one/raider-application-step-one.component';
import { RaiderApplicationStepTwoComponent } from './components/raider-application/raider-application-step-two/raider-application-step-two.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AuthenticationCallbackComponent,
    RosterComponent,
    RaiderApplicationComponent,
    RaidScheduleComponent,
    RaiderApplicationStepOneComponent,
    RaiderApplicationStepTwoComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
