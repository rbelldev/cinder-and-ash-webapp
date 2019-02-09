import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RaiderApplicationStepTwoComponent} from './raider-application-step-two.component';
import {of} from 'rxjs';
import {SimpleCharacter} from '../../../models/battle-net/world-of-warcraft/simple-character/simple-character';
import {ActivatedRoute} from '@angular/router';
import {CharacterClass, ClassSpec} from '../../../models/battle-net/world-of-warcraft/character-class/character-class';

describe('RaiderApplicationStepTwoComponent', () => {
  let component: RaiderApplicationStepTwoComponent;
  let compiled: HTMLElement;
  let fixture: ComponentFixture<RaiderApplicationStepTwoComponent>;

  let mockActivatedRoute: object;
  let expectedCharacter: SimpleCharacter;

  beforeEach(async(() => {
    expectedCharacter = new SimpleCharacter();
    expectedCharacter.name = 'Knute';
    expectedCharacter.realm = 'Mal\'Ganis';
    expectedCharacter.characterClass = new CharacterClass();
    expectedCharacter.characterClass.name = 'Monk';
    expectedCharacter.characterClass.activeSpec = new ClassSpec('Brewmaster', 'Tank');

    mockActivatedRoute = {
      data: of({character: expectedCharacter})
    };

    TestBed.configureTestingModule({
      declarations: [RaiderApplicationStepTwoComponent],
      providers: [{provide: ActivatedRoute, useValue: mockActivatedRoute}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaiderApplicationStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    compiled = fixture.debugElement.nativeElement;
  });

  it('should get the character from the activated route', () => {
    expect(component.character).toBe(expectedCharacter);
  });

  describe('Character Info Media Element', () => {
    let characterInfo: HTMLDivElement;

    beforeEach(() => {
      characterInfo = compiled.querySelector('.media.character-info');
    });

    it('should have a image with the character\'s thumbnail', () => {
      const image: HTMLImageElement = characterInfo.querySelector('img');
      expect(image.src).toBe(`http://render-us.worldofwarcraft.com/character/${expectedCharacter.thumbnail}`);
      expect(image.height).toBe(64);
      expect(image.width).toBe(64);
    });

    it('should have a header in the body with character name and realm', () => {
      const header: HTMLHeadingElement = characterInfo.querySelector('.media-body > h5');
      expect(header.textContent).toEqual(`${expectedCharacter.name} - ${expectedCharacter.realm}`);
    });

    it('should have a subheader in the body with character spec and class', () => {
      const subheader: HTMLHeadingElement = characterInfo.querySelector('.media-body > h6');
      expect(subheader.textContent).toEqual(`${expectedCharacter.characterClass.activeSpec.name} ${expectedCharacter.characterClass.name}`);
    });
  });
});
