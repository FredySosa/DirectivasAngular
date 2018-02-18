import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.parent.params.subscribe(params => {
      console.log('Ruta padre');
      console.log(params);
    });

  }

  nInit() {
  }

}
