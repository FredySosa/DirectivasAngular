import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styles: []
})
export class NgStyleComponent implements OnInit {

  private tamanio = 40;

  constructor() {
  }

  ngOnInit() {
  }

  getTamanio() {
    return this.tamanio;
  }

  aumentaTamanio() {

    this.tamanio = this.tamanio + 5;

  }

  disminuyeTamanio() {
    if (this.tamanio > 5) {
      this.tamanio = this.tamanio - 5;
    }
  }



}
