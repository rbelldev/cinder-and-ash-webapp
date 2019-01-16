import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GuildMemberFilters} from '../../models/guild-member/guild-member-filters/guild-member-filters';
import GuildMember from '../../models/guild-member/guild-member';

@Component({
  selector: 'roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent {
  public coreReadyMembers: GuildMember[];

  constructor(private activatedRoute: ActivatedRoute, private guildMemberFilters: GuildMemberFilters) {
    this.activatedRoute.data.subscribe(data => {
      this.coreReadyMembers = data.guildMembers.filter(guildMember => this.guildMemberFilters.coreReady(guildMember));
    });
  }

}
