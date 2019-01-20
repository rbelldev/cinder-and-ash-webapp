import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiderApplicationStepTwoComponent } from './raider-application-step-two.component';

describe('RaiderApplicationStepTwoComponent', () => {
  let component: RaiderApplicationStepTwoComponent;
  let fixture: ComponentFixture<RaiderApplicationStepTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiderApplicationStepTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiderApplicationStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
