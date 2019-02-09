import {SimpleCharacter} from '../simple-character';
import {Injectable} from '@angular/core';
import {CharacterClassFactory} from '../../character-class/character-class-factory/character-class-factory';

@Injectable({
  providedIn: 'root'
})
export class SimpleCharacterFactory {

  constructor(private classFactory: CharacterClassFactory = new CharacterClassFactory()) {
  }

  build(characterJson: object): SimpleCharacter {
    const simpleCharacter = new SimpleCharacter();

    simpleCharacter.name = characterJson['name'];
    simpleCharacter.level = characterJson['level'];
    simpleCharacter.realm = characterJson['realm'];
    simpleCharacter.thumbnail = characterJson['thumbnail'];
    simpleCharacter.characterClass = this.classFactory.build(characterJson['className']);
    simpleCharacter.characterClass.activeSpec = simpleCharacter.characterClass.specs.find(spec => spec.name == characterJson['spec']);

    return simpleCharacter;
  }

}
