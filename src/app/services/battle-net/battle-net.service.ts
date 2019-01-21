import {Injectable} from '@angular/core';
import {PublicApiHttpService} from '../public-api-http/public-api-http.service';
import {Observable} from 'rxjs';
import {SimpleCharacter} from '../../models/battle-net/world-of-warcraft/simple-character/simple-character';
import {map} from 'rxjs/operators';
import {SimpleCharacterFactory} from '../../models/battle-net/world-of-warcraft/simple-character/simple-character-factory/simple-character-factory';

@Injectable({
  providedIn: 'root'
})
export class BattleNetService {

  constructor(private publicApiHttpService: PublicApiHttpService, private characterFactory: SimpleCharacterFactory) {
  }

  getCharacter(realm: string, characterName: string): Observable<SimpleCharacter> {
    return this.publicApiHttpService.get(`/battle-net/character/${realm}/${characterName}`)
      .pipe(map(data => {
        return this.characterFactory.build(data);
      }));
  }
}
