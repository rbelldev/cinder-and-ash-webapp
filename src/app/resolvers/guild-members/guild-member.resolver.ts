import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import GuildMember from '../../models/guild-member/guild-member';
import {Observable} from 'rxjs';
import {GuildService} from '../../services/guild/guild.service';

@Injectable({
  providedIn: 'root'
})
export class GuildMemberResolver implements Resolve<GuildMember[]> {
  constructor(private guildService: GuildService) {
  }

  resolve(): Observable<GuildMember[]> {
    return this.guildService.getMembers();
  }
}
