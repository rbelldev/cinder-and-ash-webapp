import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RaiderApplicationStepOneComponent} from './raider-application-step-one.component';

describe('RaiderApplicationStepOneComponent', () => {
  let component: RaiderApplicationStepOneComponent;
  let compiled: HTMLElement;
  let fixture: ComponentFixture<RaiderApplicationStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RaiderApplicationStepOneComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiderApplicationStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
  });

  it('should have application instructions', () => {
    const applicationInstructions = compiled.querySelector('.alert.alert-info');
    expect(applicationInstructions.textContent.trim()).toEqual('Start by entering the REALM and NAME of the character that you wish to apply with and click \"Get Started!\" (US Only).');
  });

  describe('Form', () => {
    let form: HTMLFormElement;

    beforeEach(() => {
      form = compiled.querySelector('form');
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
