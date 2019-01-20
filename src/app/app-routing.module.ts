import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationCallbackComponent} from './components/authentication-callback/authentication-callback.component';
import {RosterComponent} from './components/roster/roster.component';
import {GuildMemberResolver} from './resolvers/guild-members/guild-member.resolver';
import {RaiderApplicationComponent} from './components/raider-application/raider-application.component';
import {RaiderApplicationStepOneComponent} from './components/raider-application/raider-application-step-one/raider-application-step-one.component';

const routes: Routes = [
  {
    path: 'authentication/callback',
    component: AuthenticationCallbackComponent
  },
  {
    path: 'roster',
    component: RosterComponent,
    resolve: {
      guildMembers: GuildMemberResolver
    }
  },
  {
    path: 'raider-application',
    component: RaiderApplicationComponent,
    children: [
      {path: '', component: RaiderApplicationStepOneComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
