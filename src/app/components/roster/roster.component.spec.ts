import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RosterComponent} from './roster.component';
import * as td from 'testdouble';
import {ActivatedRoute} from '@angular/router';
import GuildMember from '../../models/guild-member/guild-member';
import {GuildMemberFilters} from '../../models/guild-member/guild-member-filters/guild-member-filters';
import {of} from 'rxjs';

describe('RosterComponent', () => {
  let component: RosterComponent;
  let fixture: ComponentFixture<RosterComponent>;

  let mockActivatedRoute: object;
  let resolvedData: object;

  let mockGuildMemberFilters: GuildMemberFilters;
  let expectedCoreReadyGuildMembers: GuildMember[];

  beforeEach(async(() => {
    expectedCoreReadyGuildMembers = [
      buildGuildMember('knute', 'monk'),
      buildGuildMember('gray', 'druid'),
      buildGuildMember('twins', 'warlock')
    ];

    resolvedData = {
      guildMembers: [
        expectedCoreReadyGuildMembers[0],
        expectedCoreReadyGuildMembers[1],
        buildGuildMember('dont include me', 'peon'),
        expectedCoreReadyGuildMembers[2]
      ]
    };

    mockActivatedRoute = {
      data: of(resolvedData)
    };

    // mockGuildMemberFilters = td.object(GuildMemberFilters.prototype);
    const MockGuildMemberFilters = td.constructor(GuildMemberFilters);
    mockGuildMemberFilters = new MockGuildMemberFilters();
    expectedCoreReadyGuildMembers.forEach(member => {
      td.when(mockGuildMemberFilters.coreReady(member)).thenReturn(true);
    });

    TestBed.configureTestingModule({
      declarations: [RosterComponent],
      providers: [
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: GuildMemberFilters, useValue: mockGuildMemberFilters}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a list of core ready guild members', () => {
    expect(component.coreReadyMembers).toEqual(expectedCoreReadyGuildMembers);
  });

  function buildGuildMember(name: string, spec: string) {
    let guildMember: GuildMember = new GuildMember();
    guildMember.name = name;
    guildMember.spec = spec;

    return guildMember;
  }
});
