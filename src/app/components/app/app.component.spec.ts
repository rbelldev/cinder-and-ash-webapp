import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {AuthenticationService} from '../../services/authentication/authentication.service';
import * as td from 'testdouble';

describe('App Component', () => {

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let compiled: HTMLElement;
  let mockAuthenticationService: AuthenticationService;

  beforeEach(() => {
    const MockAuthenticationService = td.constructor(AuthenticationService);
    mockAuthenticationService = new MockAuthenticationService();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
      ],
      providers: [{provide: AuthenticationService, useValue: mockAuthenticationService}],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should should have a navigation bar component', () => {
    const navigationBarComponent = compiled.querySelector('navigation-bar');
    expect(navigationBarComponent).not.toBeNull('Could not find the NavigationBarComponent');
  });

  it('should have a fluid container with a router-outlet inside', () => {
    const fluidContainer = compiled.querySelector('div.container-fluid');
    expect(fluidContainer).not.toBeNull('Could not find div with class fluid-container');

    const routerOutlet = fluidContainer.querySelector('router-outlet');
    expect(routerOutlet).not.toBeNull('Could not find the router outlet');
  });

  it('should call handleAuthentication', () => {
    td.verify(mockAuthenticationService.handleAuthentication(), {times: 1});
  });
});
