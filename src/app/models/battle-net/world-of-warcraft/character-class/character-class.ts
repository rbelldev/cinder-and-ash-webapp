export class CharacterClass {
  public name: string;
  public color: string;
  public activeSpec: ClassSpec;
  public specs: ClassSpec [];
}

export class ClassSpec {
  constructor(public name: string, public role: string) {
  }

  public static Roles = {
    Healer: 'Healer',
    MeleeDps: 'Melee DPS',
    RangedDps: 'Ranged DPS',
    Tank: 'Tank'
  };

}
