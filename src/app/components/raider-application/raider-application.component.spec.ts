import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaiderApplicationComponent } from './raider-application.component';

describe('RaiderApplicationComponent', () => {
  let component: RaiderApplicationComponent;
  let fixture: ComponentFixture<RaiderApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaiderApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiderApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
