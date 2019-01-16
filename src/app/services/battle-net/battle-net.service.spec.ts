import * as td from 'testdouble';
import {BattleNetService} from './battle-net.service';
import {PublicApiHttpService} from '../public-api-http/public-api-http.service';
import {of} from 'rxjs';
import {SimpleCharacter} from '../../models/battle-net/world-of-warcraft/simple-character';

describe('BattleNetService', () => {
  let mockPublicApiHttpService: PublicApiHttpService;
  let battleNetService: BattleNetService;

  beforeEach(() => {
    mockPublicApiHttpService = td.object(PublicApiHttpService.prototype);
    battleNetService = new BattleNetService(mockPublicApiHttpService);
  });

  describe('getCharacter(:realm, :characterName)', () => {
    it('should use the correct api resource and url parameters', () => {
      const expectedRealmName = 'realmName';
      const expectedCharacterName = 'characterName';

      const apiResourceCaptor = td.matchers.captor();
      td.when(mockPublicApiHttpService.get(apiResourceCaptor.capture())).thenReturn(of({}));

      battleNetService.getCharacter(expectedRealmName, expectedCharacterName);

      expect(apiResourceCaptor.value).toBe(`/battle-net/character/${expectedRealmName}/${expectedCharacterName}`);
    });

    it('should return the observable with the simple character model from the http service', () => {
      const characterJson = {name: 'Knute', class: 'Monk'};
      td.when(mockPublicApiHttpService.get(td.matchers.anything())).thenReturn(of(characterJson));
      battleNetService.getCharacter('', '').subscribe((character: SimpleCharacter) => {
        expect(character.name).toEqual(characterJson.name);
        expect(character.class).toEqual(characterJson.class);
      });
    });
  });
});
