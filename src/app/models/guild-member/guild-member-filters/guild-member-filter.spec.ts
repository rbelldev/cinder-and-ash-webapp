import {GuildMemberFilters} from './guild-member-filters';
import GuildMember from '../guild-member';

describe('Guild Member Filters', () => {
  let guildMemberFilters: GuildMemberFilters;

  beforeEach(() => {
    guildMemberFilters = new GuildMemberFilters();
  });

  describe('coreReady(:guildMember)', () => {
    it('should not include members below level 120', () => {
      let memberToInclude1: GuildMember = new GuildMember();
      memberToInclude1.level = 120;
      memberToInclude1.spec = 'arcane';
      memberToInclude1.role = 'DPS';

      let memberToInclude2: GuildMember = new GuildMember();
      memberToInclude2.level = 120;
      memberToInclude2.spec = 'wind walker';
      memberToInclude2.role = 'DPS';

      let memberToNotInclude: GuildMember = new GuildMember();
      memberToNotInclude.level = 119;
      memberToNotInclude.spec = 'survival';
      memberToNotInclude.role = 'DPS';

      let memberListToFilter: GuildMember[] = [memberToInclude1, memberToInclude2, memberToNotInclude];

      let filteredMemberList = memberListToFilter.filter(guildMemberFilters.coreReady);
      expect(filteredMemberList.length).toEqual(2);
      expect(filteredMemberList).toContain(memberToInclude1);
      expect(filteredMemberList).toContain(memberToInclude2);
    });

    it('should not include members with an unknown spec', () => {
      let memberToInclude1: GuildMember = new GuildMember();
      memberToInclude1.level = 120;
      memberToInclude1.spec = 'arcane';
      memberToInclude1.role = 'DPS';

      let memberToInclude2: GuildMember = new GuildMember();
      memberToInclude2.level = 120;
      memberToInclude2.spec = 'wind walker';
      memberToInclude2.role = 'DPS';

      let memberToNotInclude: GuildMember = new GuildMember();
      memberToNotInclude.level = 120;
      memberToNotInclude.spec = 'unknown';
      memberToNotInclude.role = 'DPS';

      let memberListToFilter: GuildMember[] = [memberToInclude1, memberToInclude2, memberToNotInclude];

      let filteredMemberList = memberListToFilter.filter(guildMemberFilters.coreReady);
      expect(filteredMemberList.length).toEqual(2);
      expect(filteredMemberList).toContain(memberToInclude1);
      expect(filteredMemberList).toContain(memberToInclude2);
    });

    it('should not include members with an unknown role', () => {
      let memberToInclude1: GuildMember = new GuildMember();
      memberToInclude1.level = 120;
      memberToInclude1.spec = 'arcane';
      memberToInclude1.role = 'DPS';

      let memberToInclude2: GuildMember = new GuildMember();
      memberToInclude2.level = 120;
      memberToInclude2.spec = 'wind walker';
      memberToInclude2.role = 'DPS';

      let memberToNotInclude: GuildMember = new GuildMember();
      memberToNotInclude.level = 120;
      memberToNotInclude.spec = 'mist weaver';
      memberToNotInclude.role = 'unknown';

      let memberListToFilter: GuildMember[] = [memberToInclude1, memberToInclude2, memberToNotInclude];

      let filteredMemberList = memberListToFilter.filter(guildMemberFilters.coreReady);
      expect(filteredMemberList.length).toEqual(2);
      expect(filteredMemberList).toContain(memberToInclude1);
      expect(filteredMemberList).toContain(memberToInclude2);
    });
  });
});
