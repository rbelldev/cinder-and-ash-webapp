import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RaidScheduleComponent} from './raid-schedule.component';

describe('Raid Schedule Component', () => {
  let component: RaidScheduleComponent;
  let compiled: HTMLElement;
  let fixture: ComponentFixture<RaidScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RaidScheduleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
  });

  it('should have a header', () => {
    const header: HTMLElement = compiled.querySelector('h2');
    expect(header.textContent).toEqual('General Guild Info');
  });

  it('should have two card elements', () => {
    const cards: NodeListOf<Element> = compiled.querySelectorAll('.card');
    expect(cards.length).toEqual(2);
  });

  describe('Core Raid Nights Card', () => {
    let card: Element;
    beforeEach(() => {
      card = compiled.querySelectorAll('.card')[0];
    });

    it('should have a header', () => {
      const cardHeader: HTMLElement = card.querySelector('.card > .card-header > h3.card-title');
      expect(cardHeader.textContent).toEqual('Mythic Core Raid Nights');
    });

    it('should have a card body with the core raid night times', () => {
      const raidTimes: NodeListOf<Element> = card.querySelectorAll('.card-body > p');
      expect(raidTimes[0].textContent).toEqual('Wednesday: 7:00 PM - 10:00 PM (ST)');
      expect(raidTimes[1].textContent).toEqual('Thursday: 7:00 PM - 10:00 PM (ST)');
    });
  });

  describe('Options Farm Nights Card', () => {
    let card: Element;
    beforeEach(() => {
      card = compiled.querySelectorAll('.card')[1];
    });

    it('should have a header', () => {
      const cardHeader: HTMLElement = card.querySelector('.card-header > h3.card-title');
      expect(cardHeader.textContent).toEqual('Optional Farm Night');
    });

    it('should have a card body with the optional raid night times', () => {
      const optionalTimes: HTMLElement = card.querySelector('.card-body > p');
      expect(optionalTimes.textContent).toEqual('Tuesday: 7:00 PM - 10:00 PM (ST)');
    });
  });

});
