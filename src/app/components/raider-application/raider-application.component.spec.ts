import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RaiderApplicationComponent} from './raider-application.component';
import {RaidScheduleComponent} from '../raid-schedule/raid-schedule.component';
import {Component} from '@angular/core';

describe('RaiderApplicationComponent', () => {
  let component: RaiderApplicationComponent;
  let compiled: HTMLElement;
  let fixture: ComponentFixture<RaiderApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RaiderApplicationComponent,
        RaidScheduleComponent,
        MockRouterOutlet
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiderApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
  });

  describe('View', () => {
    it('should have a raid schedule component', () => {
      const raidSchedule: HTMLElement = compiled.querySelector('.col-md-6.order-md-2 > raid-schedule');
      expect(raidSchedule).not.toBeNull();
    });

    it('should have a header', () => {
      const header = compiled.querySelector('.col-md-6.order-md-1 > h2');
      expect(header.textContent).toEqual('Apply Now!');
    });

    it('should have a router-outlet', () => {
      const routerOutlet = compiled.querySelector('.col-md-6.order-md-1 > router-outlet');
      expect(routerOutlet).not.toBeNull();
    });
  });

  @Component({
    selector: 'router-outlet',
    template: ''
  })
  class MockRouterOutlet {

  }
});
