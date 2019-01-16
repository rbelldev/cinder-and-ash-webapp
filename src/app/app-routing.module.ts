import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationCallbackComponent} from './components/authentication-callback/authentication-callback.component';
import {RosterComponent} from './components/roster/roster.component';
import {GuildMemberResolver} from './resolvers/guild-members/guild-member.resolver';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
