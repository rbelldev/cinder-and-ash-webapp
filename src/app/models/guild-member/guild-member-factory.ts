import GuildMember from './guild-member';

export default class GuildMemberFactory {
  build(json: any): GuildMember {
    return json as GuildMember;
  }
}
