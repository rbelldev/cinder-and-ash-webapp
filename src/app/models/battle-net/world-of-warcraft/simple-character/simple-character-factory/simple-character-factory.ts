import {SimpleCharacter} from '../simple-character';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleCharacterFactory {

  build(characterJson: object): SimpleCharacter {
    const simpleCharacter = new SimpleCharacter();

    simpleCharacter.name = characterJson['name'];
    simpleCharacter.spec = characterJson['spec'];
    simpleCharacter.role = characterJson['role'];
    simpleCharacter.level = characterJson['level'];
    simpleCharacter.realm = characterJson['realm'];
    simpleCharacter.thumbnail = characterJson['thumbnail'];

    const className = characterJson['className'];
    simpleCharacter.className = className;
    simpleCharacter.classColor = this.classColors[className];

    return simpleCharacter;
  }

  private classColors = {
    'Death Knight': '#C41F3B',
    'Demon Hunter': '#A330C9',
    'Druid': '#FF7D0A',
    'Hunter': '#ABD473',
    'Mage': '#40C7EB',
    'Monk': '#00FF96',
    'Paladin': '#F58CBA',
    'Priest': '#FFFFFF',
    'Rouge': '#FFF569',
    'Shaman': '#0070DE',
    'Warlock': '#8787ED',
    'Warrior': '#C79C6E',
  };
}
