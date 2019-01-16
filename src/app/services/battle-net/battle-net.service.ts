import {Injectable} from '@angular/core';
import {PublicApiHttpService} from '../public-api-http/public-api-http.service';
import {Observable} from 'rxjs';
import {SimpleCharacter} from '../../models/battle-net/world-of-warcraft/simple-character';

@Injectable({
  providedIn: 'root'
})
export class BattleNetService {

  constructor(private publicApiHttpService: PublicApiHttpService) {
  }

  getCharacter(realm: string, characterName: string): Observable<SimpleCharacter> {
    return this.publicApiHttpService.get(`/battle-net/character/${realm}/${characterName}`);
  }
}
