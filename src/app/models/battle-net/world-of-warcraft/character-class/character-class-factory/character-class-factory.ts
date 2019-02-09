import {CharacterClass, ClassSpec} from '../character-class';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterClassFactory {
  public build(className: string): CharacterClass {

    switch (className) {
      case 'Death Knight':
        return this.buildClass(this._deathKnight);
      case 'Demon Hunter':
        return this.buildClass(this._demonHunter);
      case 'Druid':
        return this.buildClass(this._druid);
      case 'Hunter':
        return this.buildClass(this._hunter);
      case 'Mage':
        return this.buildClass(this._mage);
      case 'Monk':
        return this.buildClass(this._monk);
      case 'Paladin':
        return this.buildClass(this._paladin);
      case 'Priest':
        return this.buildClass(this._priest);
      case 'Rogue':
        return this.buildClass(this._rogue);
      case 'Shaman':
        return this.buildClass(this._shaman);
      case 'Warlock':
        return this.buildClass(this._warlock);
      case 'Warrior':
        return this.buildClass(this._warrior);
    }

    return new CharacterClass();
  }

  private buildClass(classConf: any): CharacterClass {
    let characterClass = new CharacterClass();

    characterClass.name = classConf.class;
    characterClass.color = classConf.color;
    characterClass.specs = [];

    classConf.specs.forEach(spec => {
      characterClass.specs.push(new ClassSpec(spec.name, spec.role));
    });

    return characterClass;
  }

  private _deathKnight = {
    class: 'Death Knight',
    color: '#C41F3B',
    specs: [
      {name: 'Frost', role: ClassSpec.Roles.MeleeDps},
      {name: 'Unholy', role: ClassSpec.Roles.MeleeDps},
      {name: 'Blood', role: ClassSpec.Roles.Tank},
    ]
  };

  private _demonHunter = {
    class: 'Demon Hunter',
    color: '#A330C9',
    specs: [
      {name: 'Havoc', role: ClassSpec.Roles.MeleeDps},
      {name: 'Vengeance', role: ClassSpec.Roles.Tank},
    ]
  };

  private _druid = {
    class: 'Druid',
    color: '#FF7D0A',
    specs: [
      {name: 'Feral', role: ClassSpec.Roles.MeleeDps},
      {name: 'Balance', role: ClassSpec.Roles.RangedDps},
      {name: 'Guardian', role: ClassSpec.Roles.Tank},
      {name: 'Restoration', role: ClassSpec.Roles.Healer},
    ]
  };

  private _hunter = {
    class: 'Hunter',
    color: '#ABD473',
    specs: [
      {name: 'Marksmanship', role: ClassSpec.Roles.RangedDps},
      {name: 'Beastmaster', role: ClassSpec.Roles.RangedDps},
      {name: 'Survival', role: ClassSpec.Roles.MeleeDps},
    ]
  };

  private _mage = {
    class: 'Mage',
    color: '#40C7EB',
    specs: [
      {name: 'Frost', role: ClassSpec.Roles.RangedDps},
      {name: 'Fire', role: ClassSpec.Roles.RangedDps},
      {name: 'Arcane', role: ClassSpec.Roles.RangedDps},
    ]
  };

  private _monk = {
    class: 'Monk',
    color: '#00FF96',
    specs: [
      {name: 'Windwalker', role: ClassSpec.Roles.MeleeDps},
      {name: 'Brewmaster', role: ClassSpec.Roles.Tank},
      {name: 'Mistweaver', role: ClassSpec.Roles.Healer},
    ]
  };

  private _paladin = {
    class: 'Paladin',
    color: '#F58CBA',
    specs: [
      {name: 'Retribution', role: ClassSpec.Roles.MeleeDps},
      {name: 'Holy', role: ClassSpec.Roles.Healer},
      {name: 'Protection', role: ClassSpec.Roles.Tank},
    ]
  };

  private _priest = {
    class: 'Priest',
    color: '#FFFFFF',
    specs: [
      {name: 'Holy', role: ClassSpec.Roles.Healer},
      {name: 'Discipline', role: ClassSpec.Roles.Healer},
      {name: 'Shadow', role: ClassSpec.Roles.RangedDps},
    ]
  };

  private _rogue = {
    class: 'Rogue',
    color: '#FFF569',
    specs: [
      {name: 'Subtlety', role: ClassSpec.Roles.MeleeDps},
      {name: 'Assassination', role: ClassSpec.Roles.MeleeDps},
      {name: 'Outlaw', role: ClassSpec.Roles.MeleeDps},
    ]
  };

  private _shaman = {
    class: 'Shaman',
    color: '#0070DE',
    specs: [
      {name: 'Enhancement', role: ClassSpec.Roles.MeleeDps},
      {name: 'Elemental', role: ClassSpec.Roles.RangedDps},
      {name: 'Restoration', role: ClassSpec.Roles.Healer},
    ]
  };

  private _warlock = {
    class: 'Warlock',
    color: '#8787ED',
    specs: [
      {name: 'Affliction', role: ClassSpec.Roles.RangedDps},
      {name: 'Destruction', role: ClassSpec.Roles.RangedDps},
      {name: 'Demonology', role: ClassSpec.Roles.RangedDps},
    ]
  };

  private _warrior = {
    class: 'Warrior',
    color: '#C79C6E',
    specs: [
      {name: 'Arms', role: ClassSpec.Roles.MeleeDps},
      {name: 'Fury', role: ClassSpec.Roles.MeleeDps},
      {name: 'Protection', role: ClassSpec.Roles.Tank},
    ]
  };
}
