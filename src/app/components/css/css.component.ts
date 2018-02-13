import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styles: [`
    p {
      color: red;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
