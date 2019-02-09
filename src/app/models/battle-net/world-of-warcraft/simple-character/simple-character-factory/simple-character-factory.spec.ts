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

  it('should have the correct class color for each class', () => {
    let testCases: object[] = [
      {class: 'Death Knight', expectedColor: '#C41F3B'},
      {class: 'Demon Hunter', expectedColor: '#A330C9'},
      {class: 'Druid', expectedColor: '#FF7D0A'},
      {class: 'Hunter', expectedColor: '#ABD473'},
      {class: 'Mage', expectedColor: '#40C7EB'},
      {class: 'Monk', expectedColor: '#00FF96'},
      {class: 'Paladin', expectedColor: '#F58CBA'},
      {class: 'Priest', expectedColor: '#FFFFFF'},
      {class: 'Rouge', expectedColor: '#FFF569'},
      {class: 'Shaman', expectedColor: '#0070DE'},
      {class: 'Warlock', expectedColor: '#8787ED'},
      {class: 'Warrior', expectedColor: '#C79C6E'},
    ];

    testCases.forEach(testCase => {
      const characterJson = {
        name: 'Knùte',
        className: testCase['class'],
        spec: 'Havoc',
        role: 'DPS',
        level: 120,
        realm: 'Mal\'Ganis',
        thumbnail: 'malganis/73/148011849-avatar.jpg',
      };

      const simpleCharacter = new SimpleCharacterFactory().build(characterJson);

      expect(simpleCharacter.classColor).toEqual(testCase['expectedColor']);
    });
  });
});
