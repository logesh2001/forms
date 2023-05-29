import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';
  form = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    street: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    zip: new FormControl('', Validators.required)

  });

  get fullname() {
    return this.form.get('fullname')
  }
  get email() {
    return this.form.get('email')
  }

  get street() {
    return this.form.get('street')
  }
  get city() {
    return this.form.get('city')
  }
  get zip() {
    return this.form.get('zip')
  }


}
