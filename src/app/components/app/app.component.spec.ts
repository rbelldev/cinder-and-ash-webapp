import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('App Component', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: any;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  }));

  it('should should have a navigation bar component', () => {
    const navigationBarComponent = compiled.querySelector('navigation-bar');
    expect(navigationBarComponent).not.toBeNull('Could not find the NavigationBarComponent');
  });
});
