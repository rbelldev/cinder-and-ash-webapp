import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RaiderApplicationComponent} from './raider-application.component';
import {RaidScheduleComponent} from '../raid-schedule/raid-schedule.component';

describe('RaiderApplicationComponent', () => {
  let component: RaiderApplicationComponent;
  let compiled: HTMLElement;
  let fixture: ComponentFixture<RaiderApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RaiderApplicationComponent, RaidScheduleComponent]
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

    it('should have application instructions', () => {
      const applicationInstructions = compiled.querySelector('.col-md-6.order-md-1 > .alert.alert-info');
      expect(applicationInstructions.textContent.trim()).toEqual('Start by entering the REALM and NAME of the character that you wish to apply with and click \"Get Started!\" (US Only).');
    });

    describe('Pre-application Form', () => {
      let form: HTMLElement;

      beforeEach(() => {
        form = compiled.querySelector('form.pre-application');
      });

      it('should have a label and input for \'Realm Name\'', () => {
        const label: HTMLLabelElement = form.querySelector('.row > .form-group:nth-child(1) > label');
        expect(label.textContent).toEqual('Realm Name:');

        const input: HTMLInputElement = form.querySelector('.row > .form-group:nth-child(1) > input.form-control');
        expect(input.placeholder).toEqual('Mal\'Ganis');
      });

      it('should have a label and input for \'Character Name\'', () => {
        const label: HTMLLabelElement = form.querySelector('.row > .form-group:nth-child(2) > label');
        expect(label.textContent).toEqual('Character Name:');

        const input: HTMLInputElement = form.querySelector('.row > .form-group:nth-child(2) > input.form-control');
        expect(input.placeholder).toEqual('Knute');
      });

      it('should have a submit button', () => {
        const button: HTMLButtonElement = form.querySelector('.form-group > button');
        expect(button.textContent).toEqual('Get Started!');
      });
    });
  });
});
