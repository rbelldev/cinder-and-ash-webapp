import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NavigationBarComponent} from './navigation-bar.component';
import {Component} from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing';

describe('NavigationBarComponent', () => {

  let fixture: ComponentFixture<NavigationBarComponent>;
  let component: NavigationBarComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationBarComponent, EmptyComponent],
      imports: [RouterTestingModule.withRoutes([
        {path: '', component: EmptyComponent},
        {path: 'roster', component: EmptyComponent},
        {path: 'raid-logs', component: EmptyComponent},
      ])],
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

    const toggleButton = navBar.querySelector('button.navbar-toggler');
    expect(toggleButton).not.toBeNull('Could not find toggle button element');

    const navbarCollapse = navBar.querySelector('div.collapse.navbar-collapse');
    expect(navbarCollapse).not.toBeNull('Could not find navbar-collapse element');

    const navItemList = navbarCollapse.querySelector('ul.navbar-nav');
    expect(navItemList).not.toBeNull('Could not find nav-item unordered list element');

    const signIn = navbarCollapse.querySelector('a.navbar-text');
    expect(signIn).not.toBeNull('could not find sign in anchor element');
  });

  it('should have the correct ID on the navbar-collapse element', () => {
    const navbarCollapse = compiled.querySelector('div.collapse.navbar-collapse');
    expect(navbarCollapse.id).toBe(navbarCollapseElementId);
  });

  it('should have a anchor element with its router link set to the app root', () => {
    const anchor = compiled.querySelector('a');
    expect(anchor.getAttribute('routerLink')).toBe('/');
  });

  it('should have a image element with the correct src attribute', () => {
    const image = compiled.querySelector('img');
    expect(image.getAttribute('src')).toBe('../../../assets/images/logo.png');
  });

  it('should have a toggle button', () => {
    const toggleButton = compiled.querySelector('button.navbar-toggler');

    expect(toggleButton.getAttribute('data-toggle')).toBe('collapse');
    expect(toggleButton.getAttribute('data-target')).toBe(`#${navbarCollapseElementId}`);

    const icon = toggleButton.querySelector('i.navbar-toggler-icon');
    expect(icon).not.toBeNull('Could not find icon element');
  });

  it('should have a list of nav items with routerLinks', () => {
    const navListItemAnchors = compiled.querySelectorAll('ul.navbar-nav > li.nav-item > a.nav-link');
    expect(navListItemAnchors.length).toBe(3);

    expect(navListItemAnchors[0].getAttribute('routerLink')).toBe('/');
    expect(navListItemAnchors[0].textContent).toBe('Home');

    expect(navListItemAnchors[1].getAttribute('routerLink')).toBe('roster');
    expect(navListItemAnchors[1].textContent).toBe('Roster');

    expect(navListItemAnchors[2].getAttribute('routerLink')).toBe('raid-logs');
    expect(navListItemAnchors[2].textContent).toBe('Raid Logs');

    const applyButton = compiled.querySelector('ul.navbar-nav > li.nav-item > button.btn.btn-warning');
    expect(applyButton.getAttribute('routerLink')).toBe('/');
    expect(applyButton.textContent).toBe('Apply Now!');
  });

  it('should have a sign in link', () => {
    const signIn = compiled.querySelector('a.navbar-text');
    expect(signIn.textContent).toBe('Sign In');
  });

  const navbarCollapseElementId = `navbar-collapse`;

  @Component({
    template: '',
    selector: ''
  })
  class EmptyComponent {

  }
});
