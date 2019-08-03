import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RaiderApplicationStepOneComponent} from './raider-application-step-one.component';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import * as td from 'testdouble';

describe('RaiderApplicationStepOneComponent', () => {
  let component: RaiderApplicationStepOneComponent;
  let compiled: HTMLElement;
  let fixture: ComponentFixture<RaiderApplicationStepOneComponent>;

  let mockRouter: any;
  let mockFormBuilder: FormBuilder;

  const expectedFormGroupConfig: any = {
    realm: ['', Validators.required],
    name: ['', Validators.required],
  };

  beforeEach(async(() => {
    mockRouter = {navigateByUrl: td.function()};
    const MockFormBuilder = td.constructor(FormBuilder);
    mockFormBuilder = new MockFormBuilder();

    td.when(mockFormBuilder.group(expectedFormGroupConfig)).thenReturn(buildFormGroup());

    TestBed.configureTestingModule({
      declarations: [RaiderApplicationStepOneComponent],
      providers: [
        {provide: Router, useValue: mockRouter},
        {provide: FormBuilder, useValue: mockFormBuilder},
      ],
      imports: [ReactiveFormsModule]
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
    expect(applicationInstructions.textContent.trim())
      .toEqual('Start by entering the REALM and NAME of the character that you wish to apply with and click \"Get Started!\" (US Only).');
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
      expect(input.getAttribute('formControlName')).toEqual('realm');
    });

    it('should have a label and input for \'Character Name\'', () => {
      const label: HTMLLabelElement = form.querySelector('.row > .form-group:nth-child(2) > label');
      expect(label.textContent).toEqual('Character Name:');

      const input: HTMLInputElement = form.querySelector('.row > .form-group:nth-child(2) > input.form-control');
      expect(input.placeholder).toEqual('Knute');
      expect(input.getAttribute('formControlName')).toEqual('name');
    });

    it('should have a submit button', () => {
      const button: HTMLButtonElement = form.querySelector('.form-group > button');
      expect(button.textContent).toEqual('Get Started!');
    });

    it('should disable the submit button if the form group is not valid', () => {
      const button: HTMLButtonElement = form.querySelector('.form-group > button');
      expect(button.disabled).toBeTruthy();
    });

    it('should enable the submit button if the form group is valid', () => {
      component.formGroup.controls['realm'].setValue('Mal\'Ganis');
      component.formGroup.controls['name'].setValue('Knute');

      fixture.detectChanges();

      const button: HTMLButtonElement = form.querySelector('.form-group > button');
      expect(button.disabled).toBeFalsy();
    });

    it('should navigate when the submit button is clicked', () => {
      const realm = 'Mal\'Ganis';
      const name = 'Knute';

      component.formGroup.controls['realm'].setValue(realm);
      component.formGroup.controls['name'].setValue(name);

      fixture.detectChanges();

      const button: HTMLButtonElement = form.querySelector('.form-group > button');
      button.click();

      td.verify(mockRouter.navigateByUrl(`raider-application/${realm}/${name}`));
    });
  });

  function buildFormGroup(): FormGroup {
    return new FormBuilder().group(expectedFormGroupConfig);
  }
});
