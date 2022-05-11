import { Component, OnInit } from '@angular/core';
import {  FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-contratar',
  templateUrl: './contratar.component.html',
  styleUrls: ['./contratar.component.scss']
})
export class ContratarComponent implements OnInit {

  //Inicializaciòn de las variables controladoras
  //luego borrar
  emailCtrl = new FormControl('ejemplo@ejemplo.com', [Validators.required, Validators.minLength(10)]);
  passCtrl = new FormControl('', [Validators.minLength(6)]);

  constructor() {
    
  }

  ngOnInit(): void {}

  //Funciòn que recibe el email
  //luego borrar
  getEmail(event: Event) {
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }


}
