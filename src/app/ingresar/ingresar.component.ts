import { Component, OnInit } from '@angular/core';
import { FormControl, PatternValidator } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.scss']
})
export class IngresarComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  get Password() {
    return this.form.get('password');
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get Mail() {
    return this.form.get('mail');
  }

  get MailValid(){
    return false;
  }

  onEnviar(event: Event) {
    event.preventDefault;
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
