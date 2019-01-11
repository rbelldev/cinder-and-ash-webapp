import {Injectable} from '@angular/core';
import {PublicApiHttpService} from '../public-api-http/public-api-http.service';
import {Observable} from 'rxjs';
import GuildMember from '../../models/guild-member/guild-member';
import GuildMemberFactory from '../../models/guild-member/guild-member-factory';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuildService {

  constructor(private publicApiHttpService: PublicApiHttpService, private guildMemberFactory: GuildMemberFactory) {
  }

  getMembers(): Observable<GuildMember[]> {
    return this.publicApiHttpService.get('/guild/members').pipe(map(json => {
      console.log('here');
      return json.members.map(memberJson => this.guildMemberFactory.build(memberJson));
    }));
  }
}
