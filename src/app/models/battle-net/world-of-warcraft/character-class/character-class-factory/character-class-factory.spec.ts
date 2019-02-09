import {CharacterClassFactory} from './character-class-factory';

describe('Character Class Factory', () => {

  it('should have the correct class color for each class', () => {
    let testCases: any[] = [
      _deathKnight,
      _demonHunter,
      _druid,
      _hunter,
      _mage,
      _monk,
      _paladin,
      _priest,
      _rogue,
      _shaman,
      _warlock,
      _warrior
    ];

    const characterClassFactory = new CharacterClassFactory();

    testCases.forEach(testCase => {
      const characterClass = characterClassFactory.build(testCase.class);

      const expectationFailOutput = `For Class: ${testCase.class}`;

      expect(characterClass.name).toEqual(testCase.class, expectationFailOutput);
      expect(characterClass.color).toEqual(testCase.expectedColor, expectationFailOutput);
      expect(characterClass.specs.length).toEqual(testCase.expectedSpecs.length, expectationFailOutput);

      testCase.expectedSpecs.forEach(expectedSpec => {
        const foundSpecs = characterClass.specs.filter(spec => spec.name == expectedSpec.name && spec.role == expectedSpec.role);
        expect(foundSpecs.length).toEqual(1, `spec ${expectedSpec.name}, not found for ${testCase.class}`);
      });
    });
  });

  const _deathKnight = {
    class: 'Death Knight',
    expectedColor: '#C41F3B',
    expectedSpecs: [
      {name: 'Frost', role: 'Melee DPS'},
      {name: 'Unholy', role: 'Melee DPS'},
      {name: 'Blood', role: 'Tank'},
    ]
  };

  const _demonHunter = {
    class: 'Demon Hunter',
    expectedColor: '#A330C9',
    expectedSpecs: [
      {name: 'Havoc', role: 'Melee DPS'},
      {name: 'Vengeance', role: 'Tank'},
    ]
  };

  const _druid = {
    class: 'Druid',
    expectedColor: '#FF7D0A',
    expectedSpecs: [
      {name: 'Feral', role: 'Melee DPS'},
      {name: 'Balance', role: 'Ranged DPS'},
      {name: 'Guardian', role: 'Tank'},
      {name: 'Restoration', role: 'Healer'},
    ]
  };

  const _hunter = {
    class: 'Hunter',
    expectedColor: '#ABD473',
    expectedSpecs: [
      {name: 'Marksmanship', role: 'Ranged DPS'},
      {name: 'Beastmaster', role: 'Ranged DPS'},
      {name: 'Survival', role: 'Melee DPS'},
    ]
  };

  const _mage = {
    class: 'Mage',
    expectedColor: '#40C7EB',
    expectedSpecs: [
      {name: 'Frost', role: 'Ranged DPS'},
      {name: 'Fire', role: 'Ranged DPS'},
      {name: 'Arcane', role: 'Ranged DPS'},
    ]
  };

  const _monk = {
    class: 'Monk',
    expectedColor: '#00FF96',
    expectedSpecs: [
      {name: 'Windwalker', role: 'Melee DPS'},
      {name: 'Brewmaster', role: 'Tank'},
      {name: 'Mistweaver', role: 'Healer'},
    ]
  };

  const _paladin = {
    class: 'Paladin',
    expectedColor: '#F58CBA',
    expectedSpecs: [
      {name: 'Retribution', role: 'Melee DPS'},
      {name: 'Holy', role: 'Healer'},
      {name: 'Protection', role: 'Tank'},
    ]
  };

  const _priest = {
    class: 'Priest',
    expectedColor: '#FFFFFF',
    expectedSpecs: [
      {name: 'Holy', role: 'Healer'},
      {name: 'Discipline', role: 'Healer'},
      {name: 'Shadow', role: 'Ranged DPS'},
    ]
  };

  const _rogue = {
    class: 'Rogue',
    expectedColor: '#FFF569',
    expectedSpecs: [
      {name: 'Subtlety', role: 'Melee DPS'},
      {name: 'Assassination', role: 'Melee DPS'},
      {name: 'Outlaw', role: 'Melee DPS'},
    ]
  };

  const _shaman = {
    class: 'Shaman',
    expectedColor: '#0070DE',
    expectedSpecs: [
      {name: 'Enhancement', role: 'Melee DPS'},
      {name: 'Elemental', role: 'Ranged DPS'},
      {name: 'Restoration', role: 'Healer'},
    ]
  };

  const _warlock = {
    class: 'Warlock',
    expectedColor: '#8787ED',
    expectedSpecs: [
      {name: 'Affliction', role: 'Ranged DPS'},
      {name: 'Destruction', role: 'Ranged DPS'},
      {name: 'Demonology', role: 'Ranged DPS'},
    ]
  };

  const _warrior = {
    class: 'Warrior',
    expectedColor: '#C79C6E',
    expectedSpecs: [
      {name: 'Arms', role: 'Melee DPS'},
      {name: 'Fury', role: 'Melee DPS'},
      {name: 'Protection', role: 'Tank'},
    ]
  };

});
