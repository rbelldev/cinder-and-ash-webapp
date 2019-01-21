import {SimpleCharacterFactory} from './simple-character-factory';

describe('Simple Character Factory', () => {
  it('should build a simple character', () => {
    const characterJson = {
      name: 'Knùte',
      className: 'Demon Hunter',
      spec: 'Havoc',
      role: 'DPS',
      level: 120,
      realm: 'Mal\'Ganis',
      thumbnail: 'malganis/73/148011849-avatar.jpg',
    };

    const simpleCharacter = new SimpleCharacterFactory().build(characterJson);

    expect(simpleCharacter.name).toEqual(characterJson.name);
    expect(simpleCharacter.className).toEqual(characterJson.className);
    expect(simpleCharacter.spec).toEqual(characterJson.spec);
    expect(simpleCharacter.role).toEqual(characterJson.role);
    expect(simpleCharacter.level).toEqual(characterJson.level);
    expect(simpleCharacter.realm).toEqual(characterJson.realm);
    expect(simpleCharacter.thumbnail).toEqual(characterJson.thumbnail);
  });
});
