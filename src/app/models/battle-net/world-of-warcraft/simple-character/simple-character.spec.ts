import {SimpleCharacter} from './simple-character';

describe('Simple Character Model', () => {
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
      const characterModel = new SimpleCharacter();
      characterModel.className = testCase['class'];

      expect(characterModel.classColor).toEqual(testCase['expectedColor']);
    });
  });
});
