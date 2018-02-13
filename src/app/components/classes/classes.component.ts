import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: []
})
export class ClassesComponent implements OnInit {

  alerta = 'alert-danger';
  loading = false;


  propiedades: any = {
    danger: false
  };

  constructor() {
  }

  ngOnInit() {
  }

  ejecutar() {
    this.loading = true;

    setTimeout(() => this.loading = false, 3000);

  }

}
