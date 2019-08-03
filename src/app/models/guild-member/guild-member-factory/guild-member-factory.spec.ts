import GuildMemberFactory from './guild-member-factory';
import GuildMember from '../guild-member';

describe('Guild Member Factory', () => {
  it('should map guild member json to a guild member model', () => {
    const guildMemberJson = {
      name: 'Knute',
      className: 'Monk',
      spec: 'Brew Master',
      role: 'Tank',
      level: 120
    };

    const guildMember: GuildMember = new GuildMemberFactory().build(guildMemberJson);
    expect(guildMember.name).toEqual(guildMemberJson.name);
    // expect(guildMember.className).toEqual(guildMemberJson.className);
    expect(guildMember.spec).toEqual(guildMemberJson.spec);
    expect(guildMember.role).toEqual(guildMemberJson.role);
    expect(guildMember.level).toEqual(guildMemberJson.level);
  });
});
