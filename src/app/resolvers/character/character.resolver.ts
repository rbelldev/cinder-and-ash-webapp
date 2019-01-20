import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {SimpleCharacter} from '../../models/battle-net/world-of-warcraft/simple-character';
import {BattleNetService} from '../../services/battle-net/battle-net.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<SimpleCharacter> {
  constructor(private battleNetService: BattleNetService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<SimpleCharacter> {
    const realmName = route.paramMap.get('realm');
    const characterName = route.paramMap.get('character');
    return this.battleNetService.getCharacter(realmName, characterName);
  }
}
