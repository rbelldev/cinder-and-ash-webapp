import {CharacterResolver} from './character.resolver';
import * as td from 'testdouble';
import {BattleNetService} from '../../services/battle-net/battle-net.service';
import {SimpleCharacter} from '../../models/battle-net/world-of-warcraft/simple-character/simple-character';
import {of} from 'rxjs';
import {ActivatedRouteSnapshot} from '@angular/router';

describe('Character Resolver', () => {
  let characterResolver: CharacterResolver;
  let mockBattleNetService: BattleNetService;

  beforeEach(() => {
    mockBattleNetService = td.object(BattleNetService.prototype);
    characterResolver = new CharacterResolver(mockBattleNetService);
  });

  it('should return the observable with character model from the battle.net service', () => {
    const realmNameCaptor = td.matchers.captor();
    const characterNameCaptor = td.matchers.captor();
    const characterObservable = of(new SimpleCharacter());

    td.when(mockBattleNetService.getCharacter(realmNameCaptor.capture(), characterNameCaptor.capture())).thenReturn(characterObservable);

    const expectedRealmName = 'Mal\'Ganis';
    const expectedCharacterName = 'Knute';
    const mockActivatedRoute = {paramMap: {get: td.function()}};

    td.when(mockActivatedRoute.paramMap.get('realm')).thenReturn(expectedRealmName);
    td.when(mockActivatedRoute.paramMap.get('character')).thenReturn(expectedCharacterName);

    expect(characterResolver.resolve(mockActivatedRoute as ActivatedRouteSnapshot)).toEqual(characterObservable);
    expect(realmNameCaptor.value).toEqual(expectedRealmName);
    expect(characterNameCaptor.value).toEqual(expectedCharacterName);
  });
});
