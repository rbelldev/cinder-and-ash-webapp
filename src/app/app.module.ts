import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {AuthenticationCallbackComponent} from './components/authentication-callback/authentication-callback.component';
import {RosterComponent} from './components/roster/roster.component';
import {HttpClientModule} from '@angular/common/http';
import { RaiderApplicationComponent } from './components/raider-application/raider-application.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    AuthenticationCallbackComponent,
    RosterComponent,
    RaiderApplicationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
