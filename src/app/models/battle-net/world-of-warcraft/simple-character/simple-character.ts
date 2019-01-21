export class SimpleCharacter {
  name: string;
  className: string;
  spec: string;
  role: string;
  level: number;
  realm: string;
  thumbnail: string;

  public get classColor(): string {
    return this.classColors[this.className];
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
