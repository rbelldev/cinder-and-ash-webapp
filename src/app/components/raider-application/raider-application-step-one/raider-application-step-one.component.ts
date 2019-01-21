import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'raider-application-step-one',
  templateUrl: './raider-application-step-one.component.html',
  styleUrls: ['./raider-application-step-one.component.css']
})
export class RaiderApplicationStepOneComponent {
  public formGroup: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      realm: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  public submit() {
    console.log('click');
    const realm = this.formGroup.controls['realm'].value;
    const name = this.formGroup.controls['name'].value;

    this.router.navigateByUrl(`raider-application/${realm}/${name}`);
  }


}
