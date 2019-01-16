import GuildMember from '../guild-member';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class GuildMemberFactory {
  build(json: any): GuildMember {
    return json as GuildMember;
  }
}
