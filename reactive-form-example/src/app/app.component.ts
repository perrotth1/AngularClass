import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Reactive Form Example';
  honorifics = ['Dr.', 'Mr.', 'Mrs.', 'Ms.'];
  signupForm: FormGroup;
  forbiddenUsernames = ['john.doe', 'jane.doe'];

  constructor(private formBuilder: FormBuilder){

  }

  //We use ngOnInit to initialize the data-bound properties of the form
  ngOnInit() {

    //Set up signupForm as a new FormGroup with nested userData FormGroup, a FormControl, and FormArray
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'honorific': new FormControl('Mrs.'),
      'interests': new FormArray([]),
    });


    this.signupForm.statusChanges.subscribe(
      (value) => console.log(value)
    );

    this.signupForm.setValue({
      'userData': {
        'username': 'jane.smith',
        'email': 'jane.smith@email.com'
      },
      'honorific': 'male',
      'interests': []
    });

    this.signupForm.patchValue({
      'userData': {
        'username': 'jane.doe',
      }
    });

  }

  //Display form info in console and reset the form
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  //has a validation requirement and will get interest values
  onAddInterest() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('interests')).push(control);
  }

  //Check if the value of the FormControl exists in the forbidden names and if so return object { 'nameIsForbidden': true }
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if( this.forbiddenUsernames.indexOf(control.value) !== -1 ){
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
    return promise;
  }

}
