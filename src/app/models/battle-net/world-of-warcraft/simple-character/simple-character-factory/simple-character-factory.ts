import {SimpleCharacter} from '../simple-character';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleCharacterFactory {

  build(characterJson: object): SimpleCharacter {
    const simpleCharacter = new SimpleCharacter();

    simpleCharacter.name = characterJson['name'];
    simpleCharacter.className = characterJson['className'];
    simpleCharacter.spec = characterJson['spec'];
    simpleCharacter.role = characterJson['role'];
    simpleCharacter.level = characterJson['level'];
    simpleCharacter.realm = characterJson['realm'];
    simpleCharacter.thumbnail = characterJson['thumbnail'];

    return simpleCharacter;
  }
}
