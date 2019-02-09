import {SimpleCharacterFactory} from './simple-character-factory';
import * as td from 'testdouble';
import {CharacterClassFactory} from '../../character-class/character-class-factory/character-class-factory';
import {CharacterClass, ClassSpec} from '../../character-class/character-class';

describe('Simple Character Factory', () => {
  it('should build a simple character', () => {
    const characterJson = {
      name: 'Knùte',
      className: 'Demon Hunter',
      spec: 'Havoc',
      level: 120,
      realm: 'Mal\'Ganis',
      thumbnail: 'malganis/73/148011849-avatar.jpg',
    };
    const mockClassFactory = td.object(CharacterClassFactory.prototype);
    const expectedClass = new CharacterClass();
    const expectedActiveSpec = new ClassSpec('Havoc', 'DPS');

    expectedClass.specs = [
      new ClassSpec('wrong', 'tank'),
      expectedActiveSpec
    ];

    td.when(mockClassFactory.build(characterJson.className)).thenReturn(expectedClass);

    const simpleCharacter = new SimpleCharacterFactory(mockClassFactory).build(characterJson);

    expect(simpleCharacter.name).toEqual(characterJson.name);
    expect(simpleCharacter.level).toEqual(characterJson.level);
    expect(simpleCharacter.realm).toEqual(characterJson.realm);
    expect(simpleCharacter.thumbnail).toEqual(characterJson.thumbnail);
    expect(simpleCharacter.characterClass).toBe(expectedClass);
    expect(simpleCharacter.characterClass.activeSpec).toBe(expectedActiveSpec);
  });
});
