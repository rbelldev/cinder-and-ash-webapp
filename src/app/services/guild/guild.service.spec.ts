import {GuildService} from './guild.service';
import {PublicApiHttpService} from '../public-api-http/public-api-http.service';
import * as td from 'testdouble';
import GuildMemberFactory from '../../models/guild-member/guild-member-factory';
import {of} from 'rxjs';
import GuildMember from '../../models/guild-member/guild-member';

describe('GuildService', () => {
  let mockPublicApiHttpService: PublicApiHttpService;
  let mockGuildMemberFactory: GuildMemberFactory;
  let guildService: GuildService;

  beforeEach(() => {
    mockPublicApiHttpService = td.object(PublicApiHttpService.prototype);
    mockGuildMemberFactory = td.object(GuildMemberFactory.prototype);
    guildService = new GuildService(mockPublicApiHttpService, mockGuildMemberFactory);
  });

  describe('getMembers()', () => {
    it('should pass the correct resource to the publicApiHttpService', () => {
      const apiResourceCaptor = td.matchers.captor();
      td.when(mockPublicApiHttpService.get(apiResourceCaptor.capture())).thenReturn(of({members: []}));
      guildService.getMembers();

      expect(apiResourceCaptor.value).toBe('/guild/members');
    });

    it('should pass each value from the member array returned the the http request to the guild member factory', () => {
      const firstExpectedJson = 'one';
      const secondExpectedJson = 'two';
      td.when(mockPublicApiHttpService.get(td.matchers.anything())).thenReturn(of({members: [firstExpectedJson, secondExpectedJson]}));
      guildService.getMembers().subscribe();

      td.verify(mockGuildMemberFactory.build(firstExpectedJson));
      td.verify(mockGuildMemberFactory.build(secondExpectedJson));
    });

    it('should return an observable that has the array of guild members', () => {
      td.when(mockPublicApiHttpService.get(td.matchers.anything())).thenReturn(of({members: [1, 2, 3]}));

      const expectedMemberArray: GuildMember[] = [
        {name: 'knute'} as GuildMember,
        {name: 'gray'} as GuildMember,
        {name: 'ember'} as GuildMember];
      td.when(mockGuildMemberFactory.build(td.matchers.anything())).thenReturn(expectedMemberArray[0], expectedMemberArray[1], expectedMemberArray[2]);

      guildService.getMembers().subscribe(guildMembers => {
        expect(guildMembers).toEqual(expectedMemberArray);
      });
    });
  });
});
