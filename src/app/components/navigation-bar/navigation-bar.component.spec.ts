import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationBarComponent} from './navigation-bar.component';

describe('NavigationBarComponent', () => {

  let fixture: ComponentFixture<NavigationBarComponent>;
  let component: NavigationBarComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationBarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationBarComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should have a nav bar element', () => {
    const navBar = compiled.querySelector('nav.navbar');
    expect(navBar).not.toBeNull('Could not find navbar element');

    const anchor = navBar.querySelector('a.navbar-brand');
    expect(anchor).not.toBeNull('Could not find anchor element');
    expect(anchor.textContent.trim()).toBe('Cinder and Ash');

    const image = anchor.querySelector('img');
    expect(image).not.toBeNull('Could not find image element');
  });

  it('should have a anchor element with its router link set to the app root', () => {
    const anchor = compiled.querySelector('a');
    expect(anchor.getAttribute('routerLink')).toBe('/');
  });

  it('should have a image element with the correct src attribute', () => {
    const image = compiled.querySelector('img');
    expect(image.getAttribute('src')).toBe('../../../assets/images/logo.png');
  });
});
