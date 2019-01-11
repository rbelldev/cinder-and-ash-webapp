import {GuildService} from '../../services/guild/guild.service';
import {GuildMemberResolver} from './guild-member.resolver';
import * as td from 'testdouble';
import GuildMember from '../../models/guild-member/guild-member';
import {of} from 'rxjs';

describe('GuildMembersResolver', () => {
  let mockGuildService: GuildService;
  let guildMemberResolver: GuildMemberResolver;

  beforeEach(() => {
    mockGuildService = td.object(GuildService.prototype);
    guildMemberResolver = new GuildMemberResolver(mockGuildService);
  });

  it('should resolve the result from the GuildService', () => {
    let expectedGuildMembers = [
      {name: 'knute'} as GuildMember,
      {name: 'gray'} as GuildMember
    ];

    td.when(mockGuildService.getMembers()).thenReturn(of(expectedGuildMembers));

    guildMemberResolver.resolve().subscribe(guildMembers => {
      expect(guildMembers).toEqual(expectedGuildMembers);
    });
  });
});
