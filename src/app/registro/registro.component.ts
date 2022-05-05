import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  //Inicializaciòn de las variables controladoras
  emailCtrl = new FormControl('', []);
  passCtrl = new FormControl('', []);

  constructor() { }

  ngOnInit(): void {

  }

  //Funciòn que recibe el email
  getEmail(event: Event) {
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }


}
