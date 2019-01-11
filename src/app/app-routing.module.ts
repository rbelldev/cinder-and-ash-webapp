import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationCallbackComponent} from './components/authentication-callback/authentication-callback.component';
import {RosterComponent} from './components/roster/roster.component';

const routes: Routes = [
  {path: 'authentication/callback', component: AuthenticationCallbackComponent},
  {path: 'roster', component: RosterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
