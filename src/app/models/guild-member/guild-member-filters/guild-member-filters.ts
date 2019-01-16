import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuildMemberFilters {
  coreReady(guildMember): boolean {
    return guildMember.level == 120 && guildMember.spec != 'unknown' && guildMember.role != 'unknown';
  }
}
