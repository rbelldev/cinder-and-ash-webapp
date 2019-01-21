import {Component} from '@angular/core';
import {SimpleCharacter} from '../../../models/battle-net/world-of-warcraft/simple-character/simple-character';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'raider-application-step-two',
  templateUrl: './raider-application-step-two.component.html',
  styleUrls: ['./raider-application-step-two.component.css']
})
export class RaiderApplicationStepTwoComponent {
  public character: SimpleCharacter;

  constructor(route: ActivatedRoute) {
    route.data.subscribe(data => {
      this.character = data.character;
    });
  }
}
